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

async function connectDB() {
  try {
    let mongoUri = process.env.MONGODB_URI;
    
    // If no explicit URI is provided, or it's the default localhost one and fails, fallback to memory server
    if (!mongoUri || mongoUri.includes('127.0.0.1')) {
      console.log('Starting MongoDB Memory Server for local development...');
      const mongoServer = await MongoMemoryServer.create();
      mongoUri = mongoServer.getUri();
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB at', mongoUri);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectDB();

interface AuthRequest extends Request {
  user?: any;
}

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '../public'), { index: false }));
app.use(express.static(path.join(__dirname, '../dist/public'), { index: false }));

// Authentication middleware
function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, async (err, decoded: any) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    
    try {
      const user = await User.findById(decoded.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      
      // Verify token version (session invalidation check)
      if (user.tokenVersion !== decoded.tokenVersion && decoded.tokenVersion !== undefined) {
        return res.status(403).json({ error: 'Session expired due to password reset. Please log in again.' });
      }
      
      req.user = decoded;
      next();
    } catch (dbErr) {
      return res.status(500).json({ error: 'Server error during authentication' });
    }
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

// Specific AI API Routes
app.post('/api/chatgpt', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error('No Key');

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: req.body.message }],
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
      timeout: 10000
    });
    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    try {
      const groqKey = process.env.GROQ_API_KEY;
      const fb = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: req.body.message }],
      }, { headers: { 'Authorization': `Bearer ${groqKey}` } });
      res.json({ response: fb.data.choices[0].message.content + " (Note: Using High-Speed Fallback Model)" });
    } catch (e) {
      res.json({ response: "ChatGPT quota exceeded. Please check your OpenAI billing." });
    }
  }
});

app.post('/api/claude', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // AUTO-FIX: If they used a Groq key for Claude, just use Groq API for them!
    if (apiKey && apiKey.startsWith('gsk_')) {
      const groqResponse = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: req.body.message }],
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      const aiResponse = `[Auto-Fix: Using Groq] ${groqResponse.data.choices[0].message.content}`;
      await saveChatMessage(req.user.id, 'claude', 'user', req.body.message);
      await saveChatMessage(req.user.id, 'claude', 'ai', aiResponse);
      return res.json({ response: aiResponse });
    }

    if (!apiKey) {
      return res.json({ response: "Claude integration is in Demo Mode. Add ANTHROPIC_API_KEY to Render to enable real answers." });
    }

    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [{ role: 'user', content: req.body.message }],
    }, {
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
    });
    const aiResponse = response.data.content[0].text;

    // Save to history
    await saveChatMessage(req.user.id, 'claude', 'user', req.body.message);
    await saveChatMessage(req.user.id, 'claude', 'ai', aiResponse);

    res.json({ response: aiResponse });
  } catch (error: any) {
    console.error('Anthropic API error:', error.response?.data || error.message);
    const errorMessage = error.response?.data?.error?.message || 'Failed to get response from Claude';
    res.status(500).json({ error: errorMessage });
  }
});




app.post('/api/gemini', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const { message, image } = req.body;
    
    let parts: any[] = [{ text: message || "Analyze this image." }];
    
    if (image) {
      // image format is "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
      const mimeType = image.split(';')[0].split(':')[1];
      const base64Data = image.split(',')[1];
      parts.push({
        inlineData: {
          mimeType: mimeType,
          data: base64Data
        }
      });
    }

    const configs = [
      { v: 'v1', m: 'gemini-1.5-flash' },
      { v: 'v1beta', m: 'gemini-2.0-flash-exp' }
    ];
    for (const c of configs) {
      try {
        const r = await axios.post(`https://generativelanguage.googleapis.com/${c.v}/models/${c.m}:generateContent?key=${apiKey}`,
          { contents: [{ parts: parts }] }, { timeout: 15000 });
        const aiResponse = r.data.candidates[0].content.parts[0].text;
        
        // Save to DB (only save text to avoid massive DB bloat)
        await saveChatMessage(req.user.id, 'gemini', 'user', image ? `[Image Uploaded] ${message}` : message);
        await saveChatMessage(req.user.id, 'gemini', 'ai', aiResponse);

        return res.json({ response: aiResponse });
      } catch (e) { continue; }
    }
    res.json({ response: "Gemini is busy. Try again soon." });
  } catch (e) { res.json({ response: "Gemini System Error." }); }
});

app.post('/api/groq', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.GROQ_API_KEY || (process.env.ANTHROPIC_API_KEY?.startsWith('gsk_') ? process.env.ANTHROPIC_API_KEY : null);
    if (!apiKey) return res.json({ response: "Groq API Key is missing! Please add GROQ_API_KEY to Render." });

    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'user', content: req.body.message }],
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      timeout: 10000
    });

    const aiResponse = response.data.choices[0].message.content;
    await saveChatMessage(req.user.id, 'groq', 'user', req.body.message);
    await saveChatMessage(req.user.id, 'groq', 'ai', aiResponse);
    res.json({ response: aiResponse });
  } catch (error: any) {
    const detail = error.response?.data?.error?.message || error.message;
    res.json({ response: `Groq Error: ${detail}` });
  }
});

app.post('/api/blackbox', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.GROQ_API_KEY || (process.env.ANTHROPIC_API_KEY?.startsWith('gsk_') ? process.env.ANTHROPIC_API_KEY : null);
    if (!apiKey) return res.json({ response: "Free Assistant key missing." });

    const { message, image } = req.body;
    
    // Prepare Multimodal Content
    const content: any[] = [{ type: "text", text: message }];
    if (image && image.startsWith('data:image')) {
      content.push({
        type: "image_url",
        image_url: { url: image }
      });
    }

    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        { 
          role: 'system', 
          content: "You are the HSG AI Visual Master. If an image is provided, your ABSOLUTE PRIORITY is to describe the subject's identity, face, and features accurately. Do not change the species or basic look. Reverse-engineer a cinematic art prompt that keeps this specific person/subject but places them in the design requested by the user. If only text is provided, expand it into a high-end art prompt." 
        },
        { role: 'user', content: content }
      ],
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' }
    });
    
    const aiResponse = response.data.choices[0].message.content;
    await saveChatMessage(req.user.id, 'blackbox', 'user', message);
    await saveChatMessage(req.user.id, 'blackbox', 'ai', aiResponse);
    res.json({ response: aiResponse });
  } catch (error: any) {
    const detail = error.response?.data?.error?.message || error.message;
    res.json({ response: `Vision Error: ${detail}` });
  }
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
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ 
      fullName: user.fullName, 
      email: user.email,
      favorites: user.favorites, 
      recentlyViewed: user.recentlyViewed,
      emailNotifications: user.emailNotifications,
      compactView: user.compactView
    });
  } catch (error) {
    console.error('Fetch user data error:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.post('/api/user/favorites', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { toolId, action } = req.body; // action: 'add' or 'remove'
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

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
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

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
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

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
