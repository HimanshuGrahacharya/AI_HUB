# 🚀 HSG AI HUB — The World's Most Powerful AI Platform

![HSG AI HUB Banner](https://himanshu-ai-hub.onrender.com/logos/ai-hubs-logo.svg)

> **HSG AI HUB** is a professional-grade, world-class SaaS platform centralizing the power of Artificial Intelligence. Explore **550+ curated AI tools**, compare top LLMs side-by-side, generate art, orchestrate autonomous agent swarms, and run automated AI workflows — all in one stunning glassmorphism interface.

🌐 **Live Demo:** [himanshu-ai-hub.onrender.com](https://himanshu-ai-hub.onrender.com)

---

## 🌟 Flagship Features

### 🤖 HSG Agentic Forge *(Exclusive)*
Simulate fully autonomous multi-agent pipelines with real-time terminal execution.
- **Squad Presets**: Choose between Dev, Marketing, or Analyst AI squads.
- **Live Orchestration**: Watch agents like "Lead Architect" → "Senior Coder" → "QA Auditor" hand off tasks with animated pipeline bubbles and glowing neon connective paths.
- **Terminal Simulator**: Monospace execution logs stream in real-time as agents think, write code, and report results.

### ⚡ AI Model Arena *(4-Column Comparison)*
Test your prompts against four world-class AI models simultaneously:
- **ChatGPT** — Industry standard for creative writing.
- **Google Gemini** — High-speed multimodal reasoning (v1.5 Flash).
- **Groq AI** — Lightning-fast Llama 3.1 8B inference.
- **Free Assistant** — Groq's massive 70B model, no API key needed.

### ⚔️ AI War Room & Multi-Agent Missions
Orchestrate multiple AI models together to solve complex strategic problems.
- **Swarm Intelligence**: GPT + Gemini + Groq working in tandem.
- **Master Strategy**: Automated synthesis of all AI viewpoints into one actionable plan.

### 🎨 Creative Studio & Vision Forge
The ultimate AI art playground.
- **Parallel Vision Forge**: Generate 4 unique image variations simultaneously.
- **Vision AI Engine**: Upload images for AI prompt reverse-engineering or content analysis.
- **Masterpiece Gallery**: Manage, remix, and publish AI-generated art.

### 🔥 Trending Prompt Library
A curated library of 20+ expert-crafted prompts across 5 categories.
- One-click injection into the active workspace.
- Categories: Coding, Business, Creative, Writing, Research.

### 🎭 Custom AI Persona Engine
Define your own AI experts with unique personalities and system instructions.
- Switch between "Senior Python Dev", "Marketing Guru", or your own custom agents instantly.

### 📱 Full PWA & Native Installability
- **Install on Any Device**: Add to home screen on iOS, Android, and Windows.
- **Offline Reliable**: Service Worker with Stale-While-Revalidate caching strategy.
- **Maskable Icons**: Perfectly tailored for all modern operating systems.

### 🔗 SPA Hash Routing
- **Deep-Linking**: Navigate directly to any module via URL hash (e.g., `/#chat/chatgpt`).
- **Session Persistence**: Page refreshes restore your chat session and UI state perfectly.

---

## 📚 AI Tool Directory — 550+ Tools Across 12 Categories

The most comprehensive AI tool directory in any open-source project:

| Category | Examples |
|---|---|
| 🤖 **AI Assistants** | ChatGPT, Claude, Gemini, Groq, Ollama, Jan AI, Open WebUI |
| 🖥️ **Agentic IDEs** | Cursor, Kiro, Windsurf, Replit AI, Bolt.new, Lovable, Cline, Aider |
| 🦾 **Autonomous Agents** | Auto-GPT, BabyAGI, MetaGPT, OpenDevin, SuperAGI, AgentGPT |
| 🔗 **Agent Platforms** | LangChain, CrewAI, LangGraph, Microsoft AutoGen, Semantic Kernel |
| ⚙️ **Workflow Automation** | n8n, Zapier AI, Make, Flowise, Dify, LangFlow, Pipedream |
| 🌐 **Browser Automation** | Browser Use, Skyvern, Stagehand, Open Interpreter, MultiOn |
| 🎙️ **Voice AI** | Vapi, Retell AI, ElevenLabs, LiveKit Agents, Pi AI |
| 🎨 **Image Generation** | Midjourney, DALL-E 3, Stable Diffusion, Flux, Ideogram |
| 💻 **Coding & Development** | GitHub Copilot, Codeium, Continue Dev, Tabnine |
| 📝 **Writing & Productivity** | Notion AI, Jasper, Copy.ai, Writesonic |
| 🔍 **Research & Study** | Perplexity AI, Elicit, Consensus, SciSpace |
| 🎬 **Video & Media** | Runway, Sora, Pika Labs, HeyGen |

---

## 🛡️ Enterprise-Grade Security
- **3-Step OTP Auth**: Secure email verification for every user.
- **Google & Facebook OAuth**: Seamless one-click social authentication.
- **JWT Protection**: Professional session management with data isolation.
- **Guest Sandbox**: Zero-friction instant access with a real JWT guest token.
- **DB Resilience**: Automated fallback to `MongoMemoryServer` for high availability.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, Vanilla CSS (Glassmorphism), TypeScript |
| **Backend** | Node.js, Express.js, TypeScript |
| **Database** | MongoDB Atlas + In-Memory Fallback |
| **AI Integrations** | OpenAI, Google Gemini, Groq, Blackbox AI |
| **Auth** | JWT, Google OAuth, Facebook OAuth, OTP Email |
| **Build** | TSC + Shx Production Pipeline |
| **Deployment** | Render (auto-deploy on push) |
| **PWA** | Service Worker, Web App Manifest, Maskable Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (or local MongoDB)
- API Keys: OpenAI, Google Gemini, Groq

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuGrahacharya/AI_HUB.git
   cd AI_HUB
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables** (create a `.env` file):
   ```env
   OPENAI_API_KEY=your_key
   GEMINI_API_KEY=your_key
   GROQ_API_KEY=your_key
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   ```
4. **Build the production bundle:**
   ```bash
   npm run build
   ```
5. **Run the server:**
   ```bash
   npm start
   ```
6. **Open** `http://localhost:3000` in your browser.

---

## 📈 SEO & Performance
- **100% SEO Optimized**: Meta tags, OpenGraph, and Twitter Card integration.
- **Semantic HTML5**: Built with accessibility and search engine crawlability in mind.
- **Performance First**: Efficient DOM management, lazy loading, and minimal layout thrash.
- **PWA Score**: Lighthouse PWA score optimized for full installability.

---

## 🗺️ Roadmap

- [ ] **Real Backend Binding** for Agentic Forge (LangGraph / CrewAI integration)
- [ ] **Custom Agent Builder**: Let users define their own agent squads and save them in MongoDB
- [ ] **AI Tool Reviews**: Community ratings and comments on each tool
- [ ] **API Playground**: Test any listed AI tool's API directly from the dashboard

---

**Built with ❤️ by [Himanshu Grahacharya](https://github.com/HimanshuGrahacharya)**
*Turning the future of AI into a reality, one prompt at a time.*