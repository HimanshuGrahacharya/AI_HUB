import json
import re

raw_text = """
AI Agentic Platforms & IDEs
Kiro — AI-native IDE and autonomous development environment.
Cursor — AI coding IDE based on VS Code.
Windsurf — AI software engineering workspace.
Replit AI — Cloud coding + AI agents.
Codeium — AI coding assistant and editor.
Continue Dev — Open-source AI coding assistant.
Cline — Autonomous coding agent for VS Code.
Aider — Terminal AI pair programmer.
Bolt.new — AI full-stack app generator.
Lovable — Prompt-to-app builder.

Autonomous AI Agents
Auto-GPT — Autonomous GPT-based agent framework.
BabyAGI — Task planning autonomous AI.
CrewAI — Multi-agent collaboration framework.
LangGraph — Stateful AI agent workflows.
OpenDevin — Open-source autonomous developer AI.
MetaGPT — AI software company simulation agents.
SuperAGI — Autonomous AI infrastructure.
AgentGPT — Browser-based autonomous agents.
Microsoft AutoGen — Multi-agent conversation framework.
Semantic Kernel — AI orchestration framework by Microsoft.

Browser & Desktop AI Automation
Open Interpreter — AI that controls your computer locally.
Browser Use — Browser automation agents.
Skyvern — AI browser workflow automation.
Stagehand — AI web automation framework.
HyperWrite Assistant — Personal AI assistant for browser tasks.
Adept AI — Action-based computer agents.
Rabbit AI — AI action model ecosystem.
MultiOn — AI web browsing agent.

AI Workflow Automation Platforms
n8n — AI workflow automation platform.
Zapier AI — AI-powered workflow automation.
Make — No-code automation workflows.
Flowise — Drag-and-drop LLM orchestration.
Dify — LLM app development platform.
LangFlow — Visual LangChain builder.
Pipedream — AI + API automation platform.

Voice AI & Personal Assistants
Vapi — AI voice agent infrastructure.
Retell AI — Voice AI calling agents.
ElevenLabs — AI voice generation and agents.
LiveKit Agents — Realtime voice/video AI agents.
Pi AI — Conversational personal AI assistant.

Open-Source Local AI Platforms
Ollama — Run LLMs locally.
LM Studio — Local AI model GUI platform.
AnythingLLM — Private AI workspace.
Jan AI — Open-source ChatGPT alternative.
Open WebUI — Self-hosted AI interface.
"""

lines = raw_text.strip().split("\n")
current_category = ""
tools = []

cat_map = {
    "AI Agentic Platforms & IDEs": "Coding & Development",
    "Autonomous AI Agents": "AI Agent Platforms",
    "Browser & Desktop AI Automation": "AI Automation",
    "AI Workflow Automation Platforms": "AI Automation",
    "Voice AI & Personal Assistants": "AI Voice Agents",
    "Open-Source Local AI Platforms": "AI Assistants"
}

for line in lines:
    line = line.strip()
    if not line:
        continue
    if "—" not in line:
        current_category = cat_map.get(line, "AI Agent Platforms")
    else:
        parts = line.split("—")
        name = parts[0].strip()
        desc = parts[1].strip()
        
        domain = re.sub(r'[^a-zA-Z0-9]', '', name).lower() + ".com"
        if "Cursor" in name: domain = "cursor.sh"
        if "Replit" in name: domain = "replit.com"
        if "CrewAI" in name: domain = "crewai.com"
        if "Open Interpreter" in name: domain = "openinterpreter.com"
        if "ElevenLabs" in name: domain = "elevenlabs.io"
        if "Ollama" in name: domain = "ollama.com"
        if "Aider" in name: domain = "aider.chat"
        if "Bolt.new" in name: domain = "bolt.new"
        if "Lovable" in name: domain = "lovable.dev"
        if "Windsurf" in name: domain = "codeium.com/windsurf"
        if "Cline" in name: domain = "github.com/cline/cline"
        if "Continue" in name: domain = "continue.dev"
        if "n8n" in name: domain = "n8n.io"
        if "Make" in name: domain = "make.com"
        if "Pi AI" in name: domain = "pi.ai"
        if "AnythingLLM" in name: domain = "anythingllm.com"
        if "Codeium" in name: domain = "codeium.com"
        if "Auto-GPT" in name: domain = "agpt.co"
        if "BabyAGI" in name: domain = "github.com/yoheinakajima/babyagi"
        if "LangGraph" in name: domain = "langchain.com/langgraph"
        if "OpenDevin" in name: domain = "github.com/OpenDevin/OpenDevin"
        if "MetaGPT" in name: domain = "github.com/geekan/MetaGPT"
        if "SuperAGI" in name: domain = "superagi.com"
        if "AgentGPT" in name: domain = "agentgpt.reworkd.ai"
        if "Microsoft AutoGen" in name: domain = "microsoft.github.io/autogen"
        if "Semantic Kernel" in name: domain = "github.com/microsoft/semantic-kernel"
        if "Browser Use" in name: domain = "browser-use.com"
        if "Skyvern" in name: domain = "skyvern.com"
        if "Stagehand" in name: domain = "stagehand.dev"
        if "HyperWrite" in name: domain = "hyperwriteai.com"
        if "Adept" in name: domain = "adept.ai"
        if "Rabbit" in name: domain = "rabbit.tech"
        if "MultiOn" in name: domain = "multion.ai"
        if "Zapier" in name: domain = "zapier.com"
        if "Flowise" in name: domain = "flowiseai.com"
        if "Dify" in name: domain = "dify.ai"
        if "LangFlow" in name: domain = "langflow.org"
        if "Pipedream" in name: domain = "pipedream.com"
        if "Vapi" in name: domain = "vapi.ai"
        if "Retell" in name: domain = "retellai.com"
        if "LiveKit" in name: domain = "livekit.io"
        if "LM Studio" in name: domain = "lmstudio.ai"
        if "Jan AI" in name: domain = "jan.ai"
        if "Open WebUI" in name: domain = "openwebui.com"
        if "Kiro" in name: domain = "kiro.ai" # guessing based on standard naming
        
        url = "https://" + domain
        logo_domain = domain.split("/")[0] # remove path for favicon
        
        tool = {
            "id": re.sub(r'[^a-zA-Z0-9]', '', name).lower(),
            "name": name,
            "description": desc,
            "category": current_category,
            "link": url,
            "logo": f"https://www.google.com/s2/favicons?domain={logo_domain}&sz=128"
        }
        tools.append(tool)

out = ""
for t in tools:
    out += f"  {{\n"
    out += f'    "id": "{t["id"]}",\n'
    out += f'    "name": "{t["name"]}",\n'
    out += f'    "description": "{t["description"]}",\n'
    out += f'    "category": "{t["category"]}",\n'
    out += f'    "link": "{t["link"]}",\n'
    out += f'    "logo": "{t["logo"]}"\n'
    out += f"  }},\n"

with open("new_tools.txt", "w", encoding="utf-8") as f:
    f.write(out)
