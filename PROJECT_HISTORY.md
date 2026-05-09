# HSG AI HUB - Project History & AI Handover Document

**Notice to Future AI Assistants**: This document serves as the complete historical context and architectural blueprint for the HSG AI HUB project. If the user starts a new session with a new AI assistant, **read this document first** to understand the project's current state, tech stack, and recent implementations.

---

## 1. Project Overview
**HSG AI HUB** is a high-end, SaaS-grade web platform designed to be the ultimate destination for interacting with multiple AI tools (ChatGPT, Claude, Blackbox AI, Groq, etc.) in a single, unified interface. It features a modern **Glassmorphism** dark theme, fully responsive design, and operates as a single-page application (SPA).

## 2. Tech Stack & Architecture
- **Frontend**: Vanilla HTML5, Vanilla CSS3 (Custom Glassmorphism design system), and Vanilla TypeScript (`src/public/script.ts` compiled to `public/script.js`).
- **Backend**: Node.js, Express.js (`src/server.ts`).
- **Database**: MongoDB (with Mongoose). *Note: Includes an automatic fallback to `MongoMemoryServer` if the primary MongoDB URI fails.*
- **Build System**: TypeScript compiler (`tsc`) and `shx` to copy static assets to the `dist/` directory.
- **Routing**: Client-side Hash Routing (`#chat/toolId`) handled in `script.ts`.

## 3. Major Features & Implementations

### A. The AI Arena & Tool Grid
- Features over 500 curated AI tools categorized dynamically.
- Includes a horizontally scrollable "Prompt Chips" track for quick AI commands.
- Implements fuzzy search and category filtering logic.

### B. Tactical AI War Room
- A unique environment where multiple models (GPT, Blackbox, Groq) orchestrate a "Master Strategy".
- The UI includes an absolute-positioned microphone button that doesn't overlap the resizable input textarea.
- Styled with premium glassmorphism (`rgba(15, 23, 42, 0.7)`) and complex shadow layers.

### C. Creative Studio & Intelligence Feed
- **Creative Studio**: Dual-column layout for AI image generation parameters and a real-time canvas.
- **Intelligence Feed**: RSS-style news feed for the latest AI updates.

### D. Mobile & PWA Perfection (Latest Major Overhaul)
- **Native-App Feel**: Removed cluttered floating action buttons on mobile screens.
- **Bottom Navigation Bar**: A fixed `backdrop-filter: blur` bottom bar (`#mobile-nav`) specifically for viewports under 768px. Features 5 perfectly aligned items: Home, Search, Arena, Studio, News.
- **Single-Column Forcing**: AI Arena grids gracefully collapse to a single column on small screens to prevent squished text.
- **Sticky Chat Headers**: The chat input area docks immediately above the mobile navigation bar for flawless typing ergonomics.
- **Scroll Syncing**: `window.scrollTo(0,0)` is invoked automatically upon view switching to prevent scroll jumping.

### E. Authentication System
- JWT-based session management.
- Features beautiful glassmorphic Login, Signup, Forgot Password, and Dashboard screens.
- Social Login integrations (Google & Facebook).

---

## 4. Key File Locations & "Gotchas"

- **`public/styles.css`**: The monolithic stylesheet. **CRITICAL GOTCHA**: All "Mobile Override" media queries (e.g., `@media (max-width: 768px)`) are carefully placed at the **BOTTOM** of the file (around lines 7400+). Do not insert generic styles at the bottom that might disrupt these cascades.
- **`src/public/script.ts`**: The core frontend engine. Contains tool data, DOM event listeners, and the `switchView` function which manages the SPA state and syncs the mobile-nav "active" classes.
- **`public/index.html`**: The main app shell. Contains the modal definitions, sidebar, and all hidden views (`<div id="arena-container" style="display:none">`).
- **`package.json`**: Deployment is optimized for platforms like Render. A push to the `master` branch triggers the `postinstall` script (`npm run build`) which compiles TypeScript into `dist/` and runs the Express server from there.

---

## 5. Most Recent Bug Fixes (May 2026)
1. **CSS Syntax Restoration**: Fixed an issue where `.dashboard-hero` properties were orphaned without a selector, causing 45 VS Code errors.
2. **Mobile Nav Refinement**: Moved the Global Search trigger into the bottom navigation bar on mobile devices and hid the `scroll-to-top` floating arrow to declutter the UI.
3. **Z-Index Wars**: Properly layered the sidebar overlay (`z-index: 1040`), modals (`z-index: 2000`), and mobile navigation (`z-index: 5000`) so nothing ever gets blocked.

---

**End of Handover Document.**
*To the next AI Assistant: You are ready to continue building world-class features for the HSG AI HUB. Prioritize aesthetic excellence, performant vanilla JS over frameworks where possible, and maintain the responsive mobile-first architecture!*
