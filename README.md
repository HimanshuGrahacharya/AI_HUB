# Himan's AI Hub

A web-based hub for interacting with multiple AI tools like ChatGPT, Claude, and Blackbox AI.

**Author:** Himanshu Grahacharya  
**GitHub:** [https://github.com/HimanshuGrahacharya](https://github.com/HimanshuGrahacharya)

## Project Structure

```
AI-HUBS/
├── .gitignore
├── package.json
├── package-lock.json
├── Procfile
├── server.js
├── TODO.md
├── .env.example
├── README.md
└── public/
    ├── index.html
    ├── script.js
    └── styles.css
```

## Setup Instructions

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download the project files to your local machine.

2. Navigate to the project directory:
   ```
   cd AI-HUBS
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   This installs:
   - **express**: Web framework for Node.js to handle HTTP requests and serve static files.
   - **axios**: HTTP client for making API requests to external AI services.
   - **dotenv**: Loads environment variables from a .env file for secure API key management.
   - **nodemon** (dev dependency): Automatically restarts the server during development.

### Environment Setup

1. Create a `.env` file in the root directory by copying `.env.example`:
   ```
   cp .env.example .env
   ```

2. Fill in your API keys in the `.env` file:
   - `OPENAI_API_KEY`: Your OpenAI API key for ChatGPT access.
   - `ANTHROPIC_API_KEY`: Your Anthropic API key for Claude access.
   - `BLACKBOX_API_KEY`: Your Blackbox AI API key (if available; note that Blackbox AI may not have a public API).

### Running the Application

#### Development Mode
```
npm run dev
```
This starts the server with nodemon, which automatically restarts on file changes.

#### Production Mode
```
npm start
```
This starts the server normally.

The application will be available at `http://localhost:3000`.

### Features

- **AI Assistants & Chatbots**: Interact with ChatGPT, Claude, and Blackbox AI.
- **Card-based Layout**: Displays AI tools in an organized card format.
- **Search Functionality**: Filter AI tools by name or description.
- **Pagination**: Navigate through multiple pages of AI tools.
- **Responsive Design**: Works on desktop and mobile devices.

### API Endpoints

- `POST /api/chatgpt`: Send messages to ChatGPT.
- `POST /api/claude`: Send messages to Claude.
- `POST /api/blackbox`: Send messages to Blackbox AI (placeholder implementation).

### Deployment

This application can be deployed to platforms like Heroku using the provided `Procfile`.

## Deployment

### Heroku Deployment

1. Create a Heroku account at https://www.heroku.com/ and install the Heroku CLI.

2. Login to Heroku CLI:
   ```
   heroku login
   ```

3. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```

4. Set environment variables for API keys:
   ```
   heroku config:set OPENAI_API_KEY=your_openai_api_key
   heroku config:set ANTHROPIC_API_KEY=your_anthropic_api_key
   heroku config:set BLACKBOX_API_KEY=your_blackbox_api_key
   ```

5. Deploy to Heroku:
   ```
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

6. Open the deployed app:
   ```
   heroku open
   ```

The app will be available at `https://your-app-name.herokuapp.com`.

### Other Deployment Options

- **Vercel**: Use `vercel` CLI for serverless deployment.
- **Railway**: Push to GitHub and deploy via Railway dashboard.
- **Render**: Connect GitHub repo and deploy with environment variables.

## Contributing

Feel free to contribute by adding more AI integrations or improving the UI/UX.
