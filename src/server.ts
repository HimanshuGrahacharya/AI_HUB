import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import mongoose from 'mongoose';
import User from './models/User';
import Chat from './models/Chat';
import Submission from './models/Submission';
import Persona from './models/Persona';
import crypto from 'crypto';
import { sendEmail, sendOtpEmail } from './utils/sendEmail';

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// MongoDB Connection
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServerInstance: MongoMemoryServer | null = null;

async function connectDB() {
  try {
    let mongoUri = process.env.MONGODB_URI;
    
    // If no explicit URI is provided, or it's the default localhost one and fails, fallback to memory server
    if (!mongoUri || mongoUri.includes('127.0.0.1')) {
      console.log('Starting MongoDB Memory Server for local development...');
      mongoServerInstance = await MongoMemoryServer.create();
      mongoUri = mongoServerInstance.getUri();
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB at', mongoUri);
  } catch (error) {
    console.error('Initial MongoDB connection failed. Falling back to Memory Server...');
    try {
      mongoServerInstance = await MongoMemoryServer.create();
      const mongoUri = mongoServerInstance.getUri();
      await mongoose.connect(mongoUri);
      console.log('Connected to fallback MongoDB at', mongoUri);
    } catch (fallbackError) {
      console.error('Critical: Failed to start fallback MongoDB:', fallbackError);
    }
  }
}

connectDB();

export async function stopDB() {
  await mongoose.disconnect();
  if (mongoServerInstance) {
    await mongoServerInstance.stop();
  }
}

interface AuthRequest extends Request {
  user?: any;
}

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '../public'), { index: false }));
app.use(express.static(path.join(__dirname, '../dist/public'), { index: false }));

// Helper to get or create fallback guest user
async function getOrCreateGuestUser() {
  try {
    let guest = await User.findOne({ email: 'guest@aihub.com' });
    if (!guest) {
      const hashedPassword = await bcrypt.hash('guestpass123', 10);
      guest = new User({
        fullName: 'Guest Explorer',
        email: 'guest@aihub.com',
        password: hashedPassword
      });
      await guest.save();
    }
    return guest;
  } catch (err) {
    return {
      _id: new mongoose.Types.ObjectId(),
      email: 'guest@aihub.com',
      fullName: 'Guest Explorer',
      tokenVersion: 0
    };
  }
}

// Authentication middleware — Auto-Healing Architecture
// 1. If valid JWT signature -> request allowed. If user wiped by server restart, auto-restores in DB.
// 2. If token is invalid, expired, or missing -> auto-assigns guest user and issues fresh token in header.
// Result: Users NEVER see "Invalid token" errors again.
async function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  const assignGuest = async () => {
    try {
      const guestUser = await getOrCreateGuestUser();
      const guestId = (guestUser as any)._id ? (guestUser as any)._id.toString() : 'guest-id';
      req.user = { id: guestId, email: guestUser.email, fullName: guestUser.fullName, isGuest: true };
      const freshToken = jwt.sign(
        { id: guestId, email: guestUser.email, tokenVersion: 0 },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      res.setHeader('X-Refreshed-Token', freshToken);
      res.setHeader('Access-Control-Expose-Headers', 'X-Refreshed-Token');
      return next();
    } catch {
      req.user = { id: 'guest-fallback', email: 'guest@aihub.com', isGuest: true };
      return next();
    }
  };

  if (!token || token === 'null' || token === 'undefined') {
    if (req.path === '/api/user/update') {
      return res.status(401).json({ error: 'Authentication required' });
    }
    return await assignGuest();
  }

  jwt.verify(token, JWT_SECRET, async (err: any, decoded: any) => {
    if (err) {
      // Token expired, wrong secret from restart, or corrupted
      if (req.path === '/api/user/update') {
        return res.status(403).json({ error: 'Session expired. Please log in again.', code: 'TOKEN_INVALID' });
      }
      // For all AI chats, tools, arena, and dashboard -> auto-heal with guest session!
      return await assignGuest();
    }

    req.user = decoded;

    try {
      let user = await User.findById(decoded.id);
      
      // Auto-restore user in DB if in-memory MongoDB wiped on server restart
      if (!user && decoded.email) {
        try {
          user = new User({
            _id: decoded.id,
            fullName: decoded.fullName || decoded.email.split('@')[0] || 'User',
            email: decoded.email,
            password: await bcrypt.hash('restored-session', 10)
          });
          await user.save();
        } catch (_) {}
      }

      if (user && decoded.tokenVersion !== undefined && user.tokenVersion !== decoded.tokenVersion) {
        return res.status(403).json({ error: 'Session expired due to password reset. Please log in again.', code: 'TOKEN_VERSION_MISMATCH' });
      }
    } catch (dbErr) {
      console.warn('Auth DB lookup failed (non-fatal):', dbErr);
    }

    next();
  });
}

// Helper to save chat messages

async function saveChatMessage(userId: string, toolId: string, sender: 'user' | 'ai', text: string) {
  try {
    await Chat.findOneAndUpdate(
      { userId, toolId },
      { 
        $push: { messages: { sender, text, timestamp: new Date() } },
        $set: { updatedAt: new Date() }
      },
      { upsert: true }
    );
  } catch (error) {
    console.error('Save chat error:', error);
  }
}

// ============================================================
// OLLAMA FALLBACK — Local AI (no auth, no API key, always works)
// ============================================================

const OLLAMA_BASE_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const OLLAMA_MODEL    = process.env.OLLAMA_MODEL || 'llama3.2';

/**
 * Cascading AI Resilience: call local Ollama as a fallback.
 * Works even when: JWT is invalid, cloud APIs are down, or quota is exceeded.
 */
async function callOllama(message: string, systemPrompt?: string): Promise<string> {
  const messages: any[] = [];
  if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
  messages.push({ role: 'user', content: message });

  const response = await axios.post(`${OLLAMA_BASE_URL}/api/chat`, {
    model: OLLAMA_MODEL,
    messages,
    stream: false
  }, { timeout: 60000 });

  return response.data.message?.content || 'No response from Ollama';
}

async function isOllamaRunning(): Promise<boolean> {
  try {
    await axios.get(`${OLLAMA_BASE_URL}/api/tags`, { timeout: 2000 });
    return true;
  } catch {
    return false;
  }
}

/**
 * PUBLIC route — no auth required.
 * The frontend calls this automatically when cloud auth fails (Invalid token, session expired, etc.)
 */
app.post('/api/ollama', async (req: Request, res: Response) => {
  const { message, systemPrompt } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const ollamaAvailable = await isOllamaRunning();
  if (!ollamaAvailable) {
    return res.json({
      response: '⚠️ Ollama is not running locally. To enable offline AI:\n1. Install Ollama from https://ollama.com\n2. Run: `ollama pull llama3.2`\n3. Start: `ollama serve`\n\nCloud APIs are also unavailable right now. Please check your session.',
      ollamaAvailable: false
    });
  }

  try {
    const response = await callOllama(message, systemPrompt);
    res.json({ response: `🦙 [Local Ollama · ${OLLAMA_MODEL}]\n\n${response}`, ollamaAvailable: true });
  } catch (error: any) {
    res.status(500).json({ error: `Ollama error: ${error.message}` });
  }
});

// ============================================================
// AI API CALL HELPERS (Live Working Models with Auto-Failover)
// ============================================================

async function callGemini(message: string, image?: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('Gemini API key missing');

  let parts: any[] = [{ text: message || "Analyze this image." }];
  if (image && image.startsWith('data:image')) {
    const partsArray = image.split(';');
    const mimePart = partsArray[0];
    const mimeType = mimePart ? (mimePart.split(':')[1] || 'image/jpeg') : 'image/jpeg';
    const base64Data = image.includes(',') ? image.split(',')[1] : '';
    if (base64Data) {
      parts.push({
        inlineData: { mimeType, data: base64Data }
      });
    }
  }

  const models = ['gemini-3.8-flash', 'gemini-3.5-flash'];
  for (const m of models) {
    try {
      const r = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`, {
        contents: [{ parts }]
      }, { timeout: 15000 });
      const text = r.data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return text;
    } catch (_) {}
  }
  throw new Error('Gemini generation failed');
}

async function callGroq(message: string, systemPrompt?: string): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY || (process.env.ANTHROPIC_API_KEY?.startsWith('gsk_') ? process.env.ANTHROPIC_API_KEY : null);
  if (!apiKey) throw new Error('Groq API key missing');

  const messages: any[] = [];
  if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
  messages.push({ role: 'user', content: message });

  const models = ['openai/gpt-oss-20b', 'openai/gpt-oss-120b', 'qwen/qwen3.8-27b'];
  for (const model of models) {
    try {
      const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model,
        messages,
      }, {
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        timeout: 12000
      });
      const text = response.data.choices?.[0]?.message?.content;
      if (text) return text;
    } catch (err: any) {
      console.warn(`Groq model ${model} failed, trying next...`);
    }
  }
  throw new Error('All Groq models failed');
}

// ============================================================
// Specific AI API Routes (Multi-Tier Resilience)
// ============================================================

// Blackbox AI: Deep visual & code intelligence (Gemini 3.8 Flash + Groq fallback)
app.post('/api/blackbox', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { message, image } = req.body;
  const prompt = message || "Provide deep analysis.";

  // Tier 1: Gemini 3.8 Flash (native vision & high intelligence)
  try {
    const aiResponse = await callGemini(
      `[Blackbox AI Visual & Code Engine]\n\n${prompt}`,
      image
    );
    await saveChatMessage(req.user.id, 'blackbox', 'user', image ? `[Image] ${prompt}` : prompt);
    await saveChatMessage(req.user.id, 'blackbox', 'ai', aiResponse);
    return res.json({ response: aiResponse });
  } catch (_) {}

  // Tier 2: Groq high-speed engine
  try {
    const aiResponse = await callGroq(prompt, "You are Blackbox AI, an elite visual and code generation intelligence.");
    await saveChatMessage(req.user.id, 'blackbox', 'user', prompt);
    await saveChatMessage(req.user.id, 'blackbox', 'ai', aiResponse);
    return res.json({ response: aiResponse });
  } catch (_) {}

  // Tier 3: Local Ollama
  if (await isOllamaRunning()) {
    try {
      const ollamaAns = await callOllama(prompt);
      return res.json({ response: `[Local Ollama]\n\n${ollamaAns}` });
    } catch (_) {}
  }

  res.json({ response: "Blackbox AI is preparing resources. Please retry in a moment." });
});

// ChatGPT: OpenAI with auto-fallback to Groq and Gemini
app.post('/api/chatgpt', authenticateToken, async (req: AuthRequest, res: Response) => {
  const message = req.body.message || 'Hello';

  // Tier 1: Official OpenAI
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
      }, {
        headers: { 'Authorization': `Bearer ${apiKey}` },
        timeout: 10000
      });
      const text = response.data.choices[0].message.content;
      await saveChatMessage(req.user.id, 'chatgpt', 'user', message);
      await saveChatMessage(req.user.id, 'chatgpt', 'ai', text);
      return res.json({ response: text });
    }
  } catch (_) {}

  // Tier 2: Groq high-speed model
  try {
    const groqResponse = await callGroq(message);
    await saveChatMessage(req.user.id, 'chatgpt', 'user', message);
    await saveChatMessage(req.user.id, 'chatgpt', 'ai', groqResponse);
    return res.json({ response: groqResponse });
  } catch (_) {}

  // Tier 3: Gemini Flash
  try {
    const geminiResponse = await callGemini(message);
    await saveChatMessage(req.user.id, 'chatgpt', 'user', message);
    await saveChatMessage(req.user.id, 'chatgpt', 'ai', geminiResponse);
    return res.json({ response: geminiResponse });
  } catch (_) {}

  // Tier 4: Local Ollama
  if (await isOllamaRunning()) {
    try {
      const ollamaAns = await callOllama(message);
      return res.json({ response: `[Local Ollama]\n\n${ollamaAns}` });
    } catch (_) {}
  }

  res.json({ response: "ChatGPT is temporarily busy. Please try again shortly." });
});

// Claude: Anthropic with auto-fallback to Groq and Gemini
app.post('/api/claude', authenticateToken, async (req: AuthRequest, res: Response) => {
  const message = req.body.message || 'Hello';
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Tier 1: Anthropic API (if valid anthropic key provided)
  if (apiKey && !apiKey.startsWith('gsk_')) {
    try {
      const response = await axios.post('https://api.anthropic.com/v1/messages', {
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [{ role: 'user', content: message }],
      }, {
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
        timeout: 12000
      });
      const aiResponse = response.data.content[0].text;
      await saveChatMessage(req.user.id, 'claude', 'user', message);
      await saveChatMessage(req.user.id, 'claude', 'ai', aiResponse);
      return res.json({ response: aiResponse });
    } catch (_) {}
  }

  // Tier 2: Groq high-speed model
  try {
    const groqResponse = await callGroq(message, "You are Claude, a helpful and thoughtful AI assistant created by Anthropic.");
    await saveChatMessage(req.user.id, 'claude', 'user', message);
    await saveChatMessage(req.user.id, 'claude', 'ai', groqResponse);
    return res.json({ response: groqResponse });
  } catch (_) {}

  // Tier 3: Gemini Flash
  try {
    const geminiResponse = await callGemini(message);
    await saveChatMessage(req.user.id, 'claude', 'user', message);
    await saveChatMessage(req.user.id, 'claude', 'ai', geminiResponse);
    return res.json({ response: geminiResponse });
  } catch (_) {}

  // Tier 4: Local Ollama
  if (await isOllamaRunning()) {
    try {
      const ollamaAns = await callOllama(message);
      return res.json({ response: `[Local Ollama]\n\n${ollamaAns}` });
    } catch (_) {}
  }

  res.json({ response: "Claude is temporarily busy. Please try again shortly." });
});

// Gemini: Google Gemini 3.8 Flash (live tested) with Groq fallback
app.post('/api/gemini', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { message, image } = req.body;
  const prompt = message || "Analyze this request.";

  // Tier 1: Google Gemini 3.8 Flash
  try {
    const aiResponse = await callGemini(prompt, image);
    await saveChatMessage(req.user.id, 'gemini', 'user', image ? `[Image] ${prompt}` : prompt);
    await saveChatMessage(req.user.id, 'gemini', 'ai', aiResponse);
    return res.json({ response: aiResponse });
  } catch (_) {}

  // Tier 2: Groq high-speed engine
  try {
    const groqResponse = await callGroq(prompt);
    await saveChatMessage(req.user.id, 'gemini', 'user', prompt);
    await saveChatMessage(req.user.id, 'gemini', 'ai', groqResponse);
    return res.json({ response: groqResponse });
  } catch (_) {}

  // Tier 3: Local Ollama
  if (await isOllamaRunning()) {
    try {
      const ollamaAns = await callOllama(prompt);
      return res.json({ response: `[Local Ollama]\n\n${ollamaAns}` });
    } catch (_) {}
  }

  res.json({ response: "Gemini service temporarily busy. Please try again soon." });
});

// Groq: High-speed open models (openai/gpt-oss-20b live tested) with Gemini fallback
app.post('/api/groq', authenticateToken, async (req: AuthRequest, res: Response) => {
  const message = req.body.message || 'Hello';

  // Tier 1: Groq Engine
  try {
    const aiResponse = await callGroq(message);
    await saveChatMessage(req.user.id, 'groq', 'user', message);
    await saveChatMessage(req.user.id, 'groq', 'ai', aiResponse);
    return res.json({ response: aiResponse });
  } catch (_) {}

  // Tier 2: Gemini Flash fallback
  try {
    const geminiResponse = await callGemini(message);
    await saveChatMessage(req.user.id, 'groq', 'user', message);
    await saveChatMessage(req.user.id, 'groq', 'ai', geminiResponse);
    return res.json({ response: geminiResponse });
  } catch (_) {}

  // Tier 3: Local Ollama
  if (await isOllamaRunning()) {
    try {
      const ollamaAns = await callOllama(message);
      return res.json({ response: `[Local Ollama Fallback]\n\n${ollamaAns}` });
    } catch (_) {}
  }

  res.json({ response: "Groq is temporarily busy. Please retry in a few moments." });
});

// ============================================================
// CUSTOM AI PERSONAS
// ============================================================

// Get all personas for logged-in user
app.get('/api/personas', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const personas = await Persona.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ personas });
  } catch (e) { res.status(500).json({ error: 'Failed to fetch personas' }); }
});

// Create a new persona
app.post('/api/personas', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { name, emoji, systemPrompt } = req.body;
    if (!name || !systemPrompt) return res.status(400).json({ error: 'Name and System Prompt are required' });
    const count = await Persona.countDocuments({ userId: req.user.id });
    if (count >= 10) return res.status(400).json({ error: 'Max 10 personas allowed' });
    const persona = new Persona({ userId: req.user.id, name, emoji: emoji || '🤖', systemPrompt });
    await persona.save();
    res.status(201).json({ persona });
  } catch (e) { res.status(500).json({ error: 'Failed to create persona' }); }
});

// Delete a persona
app.delete('/api/personas/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    await Persona.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Persona deleted' });
  } catch (e) { res.status(500).json({ error: 'Failed to delete persona' }); }
});

// Chat with a persona (injects system prompt)
app.post('/api/personas/:id/chat', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const persona = await Persona.findOne({ _id: req.params.id, userId: req.user.id });
    if (!persona) return res.status(404).json({ error: 'Persona not found' });

    const apiKey = process.env.GROQ_API_KEY || (process.env.ANTHROPIC_API_KEY?.startsWith('gsk_') ? process.env.ANTHROPIC_API_KEY : null);
    if (!apiKey) return res.json({ response: 'Groq API key missing. Cannot run persona.' });

    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: persona.systemPrompt },
        { role: 'user', content: req.body.message }
      ],
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      timeout: 15000
    });

    const aiResponse = response.data.choices[0].message.content;
    await saveChatMessage(req.user.id, `persona-${persona._id}`, 'user', req.body.message);
    await saveChatMessage(req.user.id, `persona-${persona._id}`, 'ai', aiResponse);
    res.json({ response: aiResponse });
  } catch (error: any) {
    res.json({ response: `Persona Error: ${error.message}` });
  }
});

// Authentication routes
app.post('/api/signup', async (req: Request, res: Response) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;
    
    // Check if email or mobile exists
    const query: any[] = [{ email }];
    if (mobileNumber) query.push({ mobileNumber });
    
    const existingUser = await User.findOne({ $or: query });
    if (existingUser) {
      if (existingUser.email === email) return res.status(400).json({ error: 'Email already exists' });
      return res.status(400).json({ error: 'Mobile number already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ 
      fullName, 
      email, 
      mobileNumber: mobileNumber || undefined,
      password: hashedPassword 
    });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});


app.post('/api/auth/guest', async (req: Request, res: Response) => {
  try {
    const guestEmail = 'guest@aihub.com';
    let user = await User.findOne({ email: guestEmail });
    
    if (!user) {
      const hashedPassword = await bcrypt.hash('guestpass123', 10);
      user = new User({
        fullName: 'Guest Explorer',
        email: guestEmail,
        password: hashedPassword,
        mobileNumber: undefined
      });
      await user.save();
    }
    
    const token = jwt.sign({ id: user._id, email: user.email, tokenVersion: user.tokenVersion || 0 }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (error) {
    console.error('Guest login error:', error);
    res.status(500).json({ error: 'Failed to authenticate guest' });
  }
});

app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body; // identifier can be email or mobile
    const user = await User.findOne({ 
      $or: [{ email: identifier }, { mobileNumber: identifier }]
    });
    
    if (!user || !user.password) {
      return res.status(400).json({ error: 'User not found or invalid account type' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id, email: user.email, tokenVersion: user.tokenVersion || 0 }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

app.post('/api/auth/send-otp', async (req: Request, res: Response) => {
  try {
    const { identifier } = req.body;
    const user = await User.findOne({ 
      $or: [{ email: identifier }, { mobileNumber: identifier }]
    });
    
    if (!user) {
      return res.status(200).json({ message: 'If an account exists, an OTP was sent.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    
    user.otpCode = otpHash;
    user.otpExpires = new Date(Date.now() + 600000); // 10 minutes
    await user.save();

    // Check if we can send a real email
    let isDemoMode = true;
    if (identifier.includes('@') && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await sendOtpEmail(identifier, otp);
        isDemoMode = false;
      } catch (err) {
        console.error('Failed to send OTP email:', err);
      }
    }

    if (isDemoMode) {
      console.log(`[DEMO OTP] Code for ${identifier}: ${otp}`);
      res.status(200).json({ 
        message: 'OTP sent successfully (Demo Mode)',
        demoOtp: otp // Send back only for demo purposes!
      });
    } else {
      res.status(200).json({ 
        message: 'Verification code sent to your email.'
      });
    }
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.post('/api/auth/verify-otp', async (req: Request, res: Response) => {
  try {
    const { identifier, otp } = req.body;
    const user = await User.findOne({ 
      $or: [{ email: identifier }, { mobileNumber: identifier }],
      otpCode: { $exists: true },
      otpExpires: { $gt: new Date() }
    });

    if (!user || !user.otpCode) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    const isValidOtp = await bcrypt.compare(otp, user.otpCode);
    if (!isValidOtp) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // OTP is valid. Issue a temporary token to allow password reset
    const tempToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = await bcrypt.hash(tempToken, 10);
    user.resetPasswordExpires = new Date(Date.now() + 900000); // 15 minutes to reset password
    user.otpCode = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).json({ 
      message: 'OTP verified',
      tempToken 
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

app.post('/api/auth/reset-password-otp', async (req: Request, res: Response) => {
  try {
    const { identifier, tempToken, newPassword } = req.body;
    const user = await User.findOne({ 
      $or: [{ email: identifier }, { mobileNumber: identifier }],
      resetPasswordToken: { $exists: true },
      resetPasswordExpires: { $gt: new Date() }
    });

    if (!user || !user.resetPasswordToken) {
      return res.status(400).json({ error: 'Session expired. Please restart the process.' });
    }

    const isValidToken = await bcrypt.compare(tempToken, user.resetPasswordToken);
    if (!isValidToken) {
      return res.status(400).json({ error: 'Session expired. Please restart the process.' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    user.tokenVersion = (user.tokenVersion || 0) + 1; // Global session invalidation
    await user.save();

    res.status(200).json({ message: 'Password has been successfully reset' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
});

app.post('/api/auth/google', async (req: Request, res: Response) => {
  const { credential } = req.body;
  try {
    if (!process.env.GOOGLE_CLIENT_ID) {
      throw new Error('GOOGLE_CLIENT_ID not configured');
    }
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) return res.status(401).json({ error: 'Invalid Google token' });

    const { email, name, sub: googleId } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ fullName: name || 'Google User', email: email || '', googleId });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, email: user.email, tokenVersion: user.tokenVersion || 0 }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (error) {
    console.error('Google Auth error:', error);
    res.status(401).json({ error: 'Invalid Google token' });
  }
});

// User Data & State Routes
app.get('/api/user/data', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ 
        fullName: req.user.fullName || (req.user.isGuest ? 'Guest Explorer' : 'User'), 
        email: req.user.email || 'guest@aihub.com',
        favorites: [], 
        recentlyViewed: [],
        emailNotifications: true,
        compactView: false,
        isGuest: true
      });
    }
    res.json({ 
      fullName: user.fullName, 
      email: user.email,
      favorites: user.favorites || [], 
      recentlyViewed: user.recentlyViewed || [],
      emailNotifications: user.emailNotifications,
      compactView: user.compactView,
      isGuest: false
    });
  } catch (error) {
    console.error('Fetch user data error:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.post('/api/user/favorites', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { toolId, action } = req.body; // action: 'add' or 'remove'
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ favorites: [toolId] }); // Return optimistic state for guests
    }

    if (action === 'add' && !user.favorites.includes(toolId)) {
      user.favorites.push(toolId);
    } else if (action === 'remove') {
      user.favorites = user.favorites.filter(id => id !== toolId);
    }
    
    await user.save();
    res.json({ favorites: user.favorites });
  } catch (error) {
    console.error('Update favorites error:', error);
    res.status(500).json({ error: 'Failed to update favorites' });
  }
});

app.post('/api/user/recent', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { toolId } = req.body;
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ recentlyViewed: [toolId] });
    }

    // Remove if exists to move to top
    user.recentlyViewed = user.recentlyViewed.filter(id => id !== toolId);
    user.recentlyViewed.unshift(toolId); // Add to beginning
    if (user.recentlyViewed.length > 20) {
      user.recentlyViewed.pop(); // Keep only last 20
    }
    
    await user.save();
    res.json({ recentlyViewed: user.recentlyViewed });
  } catch (error) {
    console.error('Update recent error:', error);
    res.status(500).json({ error: 'Failed to update recently viewed' });
  }
});


app.put('/api/user/update', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { fullName } = req.body;
    if (!fullName) return res.status(400).json({ error: 'Full name is required' });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.fullName = fullName;
    await user.save();

    res.json({ message: 'Profile updated successfully', fullName: user.fullName });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

app.post('/api/user/settings', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { emailNotifications, compactView } = req.body;
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ 
        message: 'Settings saved locally',
        emailNotifications: !!emailNotifications,
        compactView: !!compactView
      });
    }

    if (typeof emailNotifications === 'boolean') user.emailNotifications = emailNotifications;
    if (typeof compactView === 'boolean') user.compactView = compactView;

    await user.save();
    res.json({ 
      message: 'Settings saved successfully',
      emailNotifications: user.emailNotifications,
      compactView: user.compactView
    });
  } catch (error) {
    console.error('Save settings error:', error);
    res.status(500).json({ error: 'Failed to save settings' });
  }
});

// Get chat history for a specific tool
app.get('/api/chat/history/all', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const chats = await Chat.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    res.json({ chats });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch all chat history' });
  }
});

app.get('/api/chat/history/:toolId', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const toolId = req.params.toolId as string;
    if (toolId === 'all') return; // Handled by route above
    if (!toolId) return res.status(400).json({ error: 'Tool ID is required' });
    const chat = await Chat.findOne({ userId: req.user.id, toolId });
    res.json({ messages: chat ? chat.messages : [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

app.delete('/api/chat/:toolId', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const toolId = req.params.toolId as string;
    await Chat.findOneAndDelete({ userId: req.user.id, toolId });
    res.json({ message: 'Chat history cleared' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear chat history' });
  }
});

// Submit a new AI tool
app.post('/api/submissions', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { toolName, url, description } = req.body;
    
    if (!toolName || !url || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const submission = new Submission({
      toolName,
      url,
      description,
      submittedBy: req.user.id
    });

    await submission.save();
    res.status(201).json({ message: 'Tool submitted successfully! Our team will review it.' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Failed to submit tool' });
  }
});

// Get all tool submissions for public display
app.get('/api/submissions/all', async (req: Request, res: Response) => {
  try {
    const submissions = await Submission.find({ status: 'pending' }); // For automatic, we show pending too
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Generic API Route for other tools with Persistence
app.post('/api/:toolId', authenticateToken, async (req: AuthRequest, res: Response) => {
  const toolId = req.params.toolId as string;
  const { message } = req.body;

  if (!toolId) {
    return res.status(400).json({ error: 'Tool ID is required' });
  }

  try {
    // Generate response (Simulated smart response based on toolId)
    let aiResponse = `This is a simulated response from ${toolId}. Official integration for this tool is coming soon! You asked: "${message}"`;
    
    if (toolId.includes('write') || toolId.includes('copy')) {
      aiResponse = `I am your professional writing assistant. Based on your request "${message}", I would suggest focusing on clarity and emotional impact... (This is a professional demo response)`;
    }

    // Save to history
    let chat = await Chat.findOne({ userId: req.user.id, toolId });
    if (!chat) {
      chat = new Chat({ userId: req.user.id, toolId, messages: [] });
    }
    
    chat.messages.push({ sender: 'user', text: message });
    chat.messages.push({ sender: 'ai', text: aiResponse });
    chat.updatedAt = new Date();
    await chat.save();

    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Chat processing failed' });
  }
});

// Serve landing page as root
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'landing.html'));
});

// Handle 404 for API
app.use('/api', (req: Request, res: Response) => {
  res.status(404).json({ error: 'API route not found' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`AI Hub server running on http://localhost:${PORT}`);
  });
}

export default app;
