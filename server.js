require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.post('/api/chatgpt', async (req, res) => {
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
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to get response from ChatGPT' });
  }
});

app.post('/api/claude', async (req, res) => {
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
  } catch (error) {
    console.error('Anthropic API error:', error);
    res.status(500).json({ error: 'Failed to get response from Claude' });
  }
});

app.post('/api/blackbox', async (req, res) => {
  try {
    // Note: Blackbox AI may not have a public API. This is a placeholder.
    // You might need to use web scraping or find an alternative integration method.
    const response = await axios.post('https://www.blackbox.ai/api/chat', {
      message: req.body.message,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.BLACKBOX_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json({ response: response.data.response });
  } catch (error) {
    console.error('Blackbox AI API error:', error);
    res.status(500).json({ error: 'Failed to get response from Blackbox AI' });
  }
});

app.listen(PORT, () => {
  console.log(`AI Hub server running on http://localhost:${PORT}`);
});
