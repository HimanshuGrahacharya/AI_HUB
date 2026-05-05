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
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'), { index: false }));
app.use(express.static(path.join(__dirname, '../dist/public'), { index: false }));

// Authentication middleware
function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Specific AI API Routes
app.post('/api/chatgpt', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: req.body.message }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json({ response: response.data.choices[0].message.content });
  } catch (error: any) {
    console.error('OpenAI API error:', error.message);
    res.status(500).json({ error: 'Failed to get response from ChatGPT' });
  }
});

app.post('/api/claude', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [{ role: 'user', content: req.body.message }],
    }, {
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
    });
    res.json({ response: response.data.content[0].text });
  } catch (error: any) {
    console.error('Anthropic API error:', error.message);
    res.status(500).json({ error: 'Failed to get response from Claude' });
  }
});

app.post('/api/gemini', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({ response: "Gemini integration is in Demo Mode. To enable real answers, add GEMINI_API_KEY to your Render environment variables!" });
    }
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      contents: [{ parts: [{ text: req.body.message }] }]
    });
    res.json({ response: response.data.candidates[0].content.parts[0].text });
  } catch (error: any) {
    console.error('Gemini API error:', error.message);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

// Authentication routes
app.post('/api/signup', async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(400).json({ error: 'User not found or invalid account type' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Failed to login' });
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

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
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
      recentlyViewed: user.recentlyViewed 
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

// Get chat history for a specific tool
app.get('/api/chat/history/:toolId', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const toolId = req.params.toolId as string;
    if (!toolId) return res.status(400).json({ error: 'Tool ID is required' });
    const chat = await Chat.findOne({ userId: req.user.id, toolId });
    res.json({ messages: chat ? chat.messages : [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
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
