"""
generate_tools.py - Tool list generator for AI-HUBS platform.
Run this script to regenerate the new_tools.txt output file.
"""
import re

TOOLS_DATA = [
    # AI Agentic Platforms & IDEs
    ("Kiro", "AI-native IDE and autonomous development environment.", "Coding & Development", "kiro.ai"),
    ("Cursor", "AI coding IDE based on VS Code.", "Coding & Development", "cursor.sh"),
    ("Windsurf", "AI software engineering workspace.", "Coding & Development", "codeium.com/windsurf"),
    ("Replit AI", "Cloud coding + AI agents.", "Coding & Development", "replit.com"),
    ("Codeium", "AI coding assistant and editor.", "Coding & Development", "codeium.com"),
    ("Continue Dev", "Open-source AI coding assistant.", "Coding & Development", "continue.dev"),
    ("Cline", "Autonomous coding agent for VS Code.", "Coding & Development", "github.com/cline/cline"),
    ("Aider", "Terminal AI pair programmer.", "Coding & Development", "aider.chat"),
    ("Bolt.new", "AI full-stack app generator.", "Coding & Development", "bolt.new"),
    ("Lovable", "Prompt-to-app builder.", "Coding & Development", "lovable.dev"),
    # Autonomous AI Agents
    ("Auto-GPT", "Autonomous GPT-based agent framework.", "AI Agent Platforms", "agpt.co"),
    ("BabyAGI", "Task planning autonomous AI.", "AI Agent Platforms", "github.com/yoheinakajima/babyagi"),
    ("CrewAI", "Multi-agent collaboration framework.", "AI Agent Platforms", "crewai.com"),
    ("LangGraph", "Stateful AI agent workflows.", "AI Agent Platforms", "langchain.com/langgraph"),
    ("OpenDevin", "Open-source autonomous developer AI.", "AI Agent Platforms", "github.com/OpenDevin/OpenDevin"),
    ("MetaGPT", "AI software company simulation agents.", "AI Agent Platforms", "github.com/geekan/MetaGPT"),
    ("SuperAGI", "Autonomous AI infrastructure.", "AI Agent Platforms", "superagi.com"),
    ("AgentGPT", "Browser-based autonomous agents.", "AI Agent Platforms", "agentgpt.reworkd.ai"),
    ("Microsoft AutoGen", "Multi-agent conversation framework.", "AI Agent Platforms", "microsoft.github.io/autogen"),
    ("Semantic Kernel", "AI orchestration framework by Microsoft.", "AI Agent Platforms", "github.com/microsoft/semantic-kernel"),
    # Browser & Desktop AI Automation
    ("Open Interpreter", "AI that controls your computer locally.", "AI Automation", "openinterpreter.com"),
    ("Browser Use", "Browser automation agents.", "AI Automation", "browser-use.com"),
    ("Skyvern", "AI browser workflow automation.", "AI Automation", "skyvern.com"),
    ("Stagehand", "AI web automation framework.", "AI Automation", "stagehand.dev"),
    ("HyperWrite Assistant", "Personal AI assistant for browser tasks.", "AI Automation", "hyperwriteai.com"),
    ("Adept AI", "Action-based computer agents.", "AI Automation", "adept.ai"),
    ("Rabbit AI", "AI action model ecosystem.", "AI Automation", "rabbit.tech"),
    ("MultiOn", "AI web browsing agent.", "AI Automation", "multion.ai"),
    # AI Workflow Automation Platforms
    ("n8n", "AI workflow automation platform.", "AI Automation", "n8n.io"),
    ("Zapier AI", "AI-powered workflow automation.", "AI Automation", "zapier.com"),
    ("Make", "No-code automation workflows.", "AI Automation", "make.com"),
    ("Flowise", "Drag-and-drop LLM orchestration.", "AI Automation", "flowiseai.com"),
    ("Dify", "LLM app development platform.", "AI Automation", "dify.ai"),
    ("LangFlow", "Visual LangChain builder.", "AI Automation", "langflow.org"),
    ("Pipedream", "AI + API automation platform.", "AI Automation", "pipedream.com"),
    # Voice AI & Personal Assistants
    ("Vapi", "AI voice agent infrastructure.", "AI Voice Agents", "vapi.ai"),
    ("Retell AI", "Voice AI calling agents.", "AI Voice Agents", "retellai.com"),
    ("ElevenLabs", "AI voice generation and agents.", "AI Voice Agents", "elevenlabs.io"),
    ("LiveKit Agents", "Realtime voice/video AI agents.", "AI Voice Agents", "livekit.io"),
    ("Pi AI", "Conversational personal AI assistant.", "AI Voice Agents", "pi.ai"),
    # Open-Source Local AI Platforms
    ("Ollama", "Run LLMs locally.", "AI Assistants", "ollama.com"),
    ("LM Studio", "Local AI model GUI platform.", "AI Assistants", "lmstudio.ai"),
    ("AnythingLLM", "Private AI workspace.", "AI Assistants", "anythingllm.com"),
    ("Jan AI", "Open-source ChatGPT alternative.", "AI Assistants", "jan.ai"),
    ("Open WebUI", "Self-hosted AI interface.", "AI Assistants", "openwebui.com"),
]


def make_id(name: str) -> str:
    return re.sub(r"[^a-zA-Z0-9]", "", name).lower()


def make_logo(domain: str) -> str:
    root = domain.split("/")[0]
    return f"https://www.google.com/s2/favicons?domain={root}&sz=128"


out = ""
for name, desc, category, domain in TOOLS_DATA:
    tool_id = make_id(name)
    url = "https://" + domain
    logo = make_logo(domain)
    out += "  {\n"
    out += f'    "id": "{tool_id}",\n'
    out += f'    "name": "{name}",\n'
    out += f'    "description": "{desc}",\n'
    out += f'    "category": "{category}",\n'
    out += f'    "link": "{url}",\n'
    out += f'    "logo": "{logo}"\n'
    out += "  },\n"

with open("new_tools.txt", "w", encoding="utf-8") as f:
    f.write(out)

print(f"Generated {len(TOOLS_DATA)} tools to new_tools.txt")
