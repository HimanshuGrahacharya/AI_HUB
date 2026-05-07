interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  logo: string;
}

declare function showToast(message: string, type?: 'error' | 'info' | 'success'): void;

const aiTools: AITool[] = [
  // AI Agent Platforms
  {
    "id": "langchain",
    "name": "LangChain",
    "description": "The leading framework for building stateful, production-ready AI agents and LLM applications.",
    "category": "AI Agent Platforms",
    "link": "https://langchain.com",
    "logo": "https://www.google.com/s2/favicons?domain=langchain.com&sz=128"
  },
  {
    "id": "crewai",
    "name": "CrewAI",
    "description": "Cutting-edge framework for orchestrating role-playing, autonomous AI agents to solve complex tasks.",
    "category": "AI Agent Platforms",
    "link": "https://crewai.com",
    "logo": "https://www.google.com/s2/favicons?domain=crewai.com&sz=128"
  },
  {
    "id": "langgraph",
    "name": "LangGraph",
    "description": "Build resilient, stateful multi-agent workflows with cyclic graphs and human-in-the-loop features.",
    "category": "AI Agent Platforms",
    "link": "https://langchain.com/langgraph",
    "logo": "https://www.google.com/s2/favicons?domain=langchain.com&sz=128"
  },
  {
    "id": "llamaindex",
    "name": "LlamaIndex",
    "description": "The data framework for LLM applications, specializing in RAG and connecting agents to private data.",
    "category": "AI Agent Platforms",
    "link": "https://llamaindex.ai",
    "logo": "https://www.google.com/s2/favicons?domain=llamaindex.ai&sz=128"
  },
  // AI Coding Agents
  {
    "id": "bolt-new",
    "name": "Bolt.new",
    "description": "Full-stack web development in the browser. Prompt, run, edit, and deploy with an autonomous AI agent.",
    "category": "AI Coding Agents",
    "link": "https://bolt.new",
    "logo": "https://www.google.com/s2/favicons?domain=bolt.new&sz=128"
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "description": "The ultimate GPT-engineer. Build and ship production-ready web apps through natural conversation.",
    "category": "AI Coding Agents",
    "link": "https://lovable.dev",
    "logo": "https://www.google.com/s2/favicons?domain=lovable.dev&sz=128"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "description": "The AI-first code editor designed for pair programming with powerful autonomous coding agents.",
    "category": "AI Coding Agents",
    "link": "https://cursor.com",
    "logo": "https://www.google.com/s2/favicons?domain=cursor.com&sz=128"
  },
  // Browser & Automation Agents
  {
    "id": "openai-operator",
    "name": "OpenAI Operator",
    "description": "Autonomous browser agent that can use your computer to perform complex tasks on the web.",
    "category": "Browser Agents",
    "link": "https://openai.com/index/introducing-operator/",
    "logo": "https://www.google.com/s2/favicons?domain=openai.com&sz=128"
  },
  {
    "id": "n8n",
    "name": "n8n AI",
    "description": "The workflow automation platform with native AI capabilities to build complex agentic pipelines.",
    "category": "AI Automation",
    "link": "https://n8n.io",
    "logo": "https://www.google.com/s2/favicons?domain=n8n.io&sz=128"
  },
  // Media Agents
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "description": "The world's most advanced AI voice platform. Perfect for voice agents and natural narration.",
    "category": "AI Voice Agents",
    "link": "https://elevenlabs.io",
    "logo": "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "description": "AI video generation platform for creating lifelike AI avatars and autonomous video content.",
    "category": "AI Video Agents",
    "link": "https://heygen.com",
    "logo": "https://www.google.com/s2/favicons?domain=heygen.com&sz=128"
  },

  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "description": "ChatGPT is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://chat.openai.com",
    "logo": "https://www.google.com/s2/favicons?domain=chat.openai.com"
  },
  {
    "id": "claude",
    "name": "Claude",
    "description": "Claude is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://claude.ai",
    "logo": "https://www.google.com/s2/favicons?domain=claude.ai"
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "description": "Gemini is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://gemini.google.com",
    "logo": "https://www.google.com/s2/favicons?domain=gemini.google.com"
  },
  {
    "id": "grok",
    "name": "Grok",
    "description": "Grok is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://grok.com",
    "logo": "https://www.google.com/s2/favicons?domain=grok.com"
  },
  {
    "id": "groq",
    "name": "Groq AI (Llama 3)",
    "description": "Experience lightning-fast responses with Groq's high-speed inference engine powered by Llama 3.",
    "category": "AI Assistants",
    "link": "https://groq.com",
    "logo": "https://www.google.com/s2/favicons?domain=groq.com&sz=128"
  },
  {
    "id": "perplexityai",
    "name": "Perplexity AI",
    "description": "Perplexity AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://perplexity.ai",
    "logo": "https://www.google.com/s2/favicons?domain=perplexity.ai"
  },
  {
    "id": "poe",
    "name": "Poe",
    "description": "Poe is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://poe.com",
    "logo": "https://www.google.com/s2/favicons?domain=poe.com"
  },
  {
    "id": "blackbox",
    "name": "Blackbox AI (Free)",
    "description": "A powerful, 100% free AI assistant that doesn't require any API keys or credits. Perfect for coding and general questions.",
    "category": "AI Assistants",
    "link": "https://blackbox.ai",
    "logo": "https://www.google.com/s2/favicons?domain=blackbox.ai&sz=128"
  },
  {
    "id": "youchat",
    "name": "YouChat",
    "description": "YouChat is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://youchat.com",
    "logo": "https://www.google.com/s2/favicons?domain=youchat.com"
  },
  {
    "id": "piai",
    "name": "Pi AI",
    "description": "Pi AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://piai.com",
    "logo": "https://www.google.com/s2/favicons?domain=piai.com"
  },
  {
    "id": "kimiai",
    "name": "Kimi AI",
    "description": "Kimi AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://kimiai.com",
    "logo": "https://www.google.com/s2/favicons?domain=kimiai.com"
  },
  {
    "id": "characterai",
    "name": "Character AI",
    "description": "Character AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://characterai.com",
    "logo": "https://www.google.com/s2/favicons?domain=characterai.com"
  },
  {
    "id": "janai",
    "name": "Jan AI",
    "description": "Jan AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://janai.com",
    "logo": "https://www.google.com/s2/favicons?domain=janai.com"
  },
  {
    "id": "huggingchat",
    "name": "HuggingChat",
    "description": "HuggingChat is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://huggingchat.com",
    "logo": "https://www.google.com/s2/favicons?domain=huggingchat.com"
  },
  {
    "id": "phind",
    "name": "Phind",
    "description": "Phind is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://phind.com",
    "logo": "https://www.google.com/s2/favicons?domain=phind.com"
  },
  {
    "id": "komoai",
    "name": "Komo AI",
    "description": "Komo AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://komoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=komoai.com"
  },
  {
    "id": "wiseone",
    "name": "Wiseone",
    "description": "Wiseone is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://wiseone.com",
    "logo": "https://www.google.com/s2/favicons?domain=wiseone.com"
  },
  {
    "id": "askai",
    "name": "Ask AI",
    "description": "Ask AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://askai.com",
    "logo": "https://www.google.com/s2/favicons?domain=askai.com"
  },
  {
    "id": "andi",
    "name": "Andi",
    "description": "Andi is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://andi.com",
    "logo": "https://www.google.com/s2/favicons?domain=andi.com"
  },
  {
    "id": "tactiqai",
    "name": "Tactiq AI",
    "description": "Tactiq AI is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://tactiqai.com",
    "logo": "https://www.google.com/s2/favicons?domain=tactiqai.com"
  },
  {
    "id": "replika",
    "name": "Replika",
    "description": "Replika is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://replika.com",
    "logo": "https://www.google.com/s2/favicons?domain=replika.com"
  },
  {
    "id": "chatsonic",
    "name": "ChatSonic",
    "description": "ChatSonic is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://chatsonic.com",
    "logo": "https://www.google.com/s2/favicons?domain=chatsonic.com"
  },
  {
    "id": "jasper",
    "name": "Jasper",
    "description": "Jasper is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://jasper.com",
    "logo": "https://www.google.com/s2/favicons?domain=jasper.com"
  },
  {
    "id": "copyai",
    "name": "Copy.ai",
    "description": "Copy.ai is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://copyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=copyai.com"
  },
  {
    "id": "writesonic",
    "name": "Writesonic",
    "description": "Writesonic is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://writesonic.com",
    "logo": "https://www.google.com/s2/favicons?domain=writesonic.com"
  },
  {
    "id": "rytr",
    "name": "Rytr",
    "description": "Rytr is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://rytr.com",
    "logo": "https://www.google.com/s2/favicons?domain=rytr.com"
  },
  {
    "id": "anyword",
    "name": "Anyword",
    "description": "Anyword is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://anyword.com",
    "logo": "https://www.google.com/s2/favicons?domain=anyword.com"
  },
  {
    "id": "sudowrite",
    "name": "Sudowrite",
    "description": "Sudowrite is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://sudowrite.com",
    "logo": "https://www.google.com/s2/favicons?domain=sudowrite.com"
  },
  {
    "id": "wordtune",
    "name": "Wordtune",
    "description": "Wordtune is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://wordtune.com",
    "logo": "https://www.google.com/s2/favicons?domain=wordtune.com"
  },
  {
    "id": "quillbot",
    "name": "Quillbot",
    "description": "Quillbot is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://quillbot.com",
    "logo": "https://www.google.com/s2/favicons?domain=quillbot.com"
  },
  {
    "id": "inkai",
    "name": "INK AI",
    "description": "INK AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://inkai.com",
    "logo": "https://www.google.com/s2/favicons?domain=inkai.com"
  },
  {
    "id": "hyperwrite",
    "name": "HyperWrite",
    "description": "HyperWrite is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://hyperwrite.com",
    "logo": "https://www.google.com/s2/favicons?domain=hyperwrite.com"
  },
  {
    "id": "textcortex",
    "name": "TextCortex",
    "description": "TextCortex is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://textcortex.com",
    "logo": "https://www.google.com/s2/favicons?domain=textcortex.com"
  },
  {
    "id": "simplified",
    "name": "Simplified",
    "description": "Simplified is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://simplified.com",
    "logo": "https://www.google.com/s2/favicons?domain=simplified.com"
  },
  {
    "id": "peppertype",
    "name": "Peppertype",
    "description": "Peppertype is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://peppertype.com",
    "logo": "https://www.google.com/s2/favicons?domain=peppertype.com"
  },
  {
    "id": "frase",
    "name": "Frase",
    "description": "Frase is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://frase.com",
    "logo": "https://www.google.com/s2/favicons?domain=frase.com"
  },
  {
    "id": "scalenut",
    "name": "Scalenut",
    "description": "Scalenut is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://scalenut.com",
    "logo": "https://www.google.com/s2/favicons?domain=scalenut.com"
  },
  {
    "id": "closerscopy",
    "name": "ClosersCopy",
    "description": "ClosersCopy is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://closerscopy.com",
    "logo": "https://www.google.com/s2/favicons?domain=closerscopy.com"
  },
  {
    "id": "contentbot",
    "name": "ContentBot",
    "description": "ContentBot is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://contentbot.com",
    "logo": "https://www.google.com/s2/favicons?domain=contentbot.com"
  },
  {
    "id": "longshotai",
    "name": "LongShot AI",
    "description": "LongShot AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://longshotai.com",
    "logo": "https://www.google.com/s2/favicons?domain=longshotai.com"
  },
  {
    "id": "neuroflash",
    "name": "Neuroflash",
    "description": "Neuroflash is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://neuroflash.com",
    "logo": "https://www.google.com/s2/favicons?domain=neuroflash.com"
  },
  {
    "id": "outranking",
    "name": "Outranking",
    "description": "Outranking is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://outranking.com",
    "logo": "https://www.google.com/s2/favicons?domain=outranking.com"
  },
  {
    "id": "aiwriter",
    "name": "AI Writer",
    "description": "AI Writer is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://aiwriter.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiwriter.com"
  },
  {
    "id": "typli",
    "name": "Typli",
    "description": "Typli is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://typli.com",
    "logo": "https://www.google.com/s2/favicons?domain=typli.com"
  },
  {
    "id": "smodin",
    "name": "Smodin",
    "description": "Smodin is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://smodin.com",
    "logo": "https://www.google.com/s2/favicons?domain=smodin.com"
  },
  {
    "id": "moonbeam",
    "name": "Moonbeam",
    "description": "Moonbeam is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://moonbeam.com",
    "logo": "https://www.google.com/s2/favicons?domain=moonbeam.com"
  },
  {
    "id": "zimmwriter",
    "name": "ZimmWriter",
    "description": "ZimmWriter is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://zimmwriter.com",
    "logo": "https://www.google.com/s2/favicons?domain=zimmwriter.com"
  },
  {
    "id": "articleforge",
    "name": "Article Forge",
    "description": "Article Forge is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://articleforge.com",
    "logo": "https://www.google.com/s2/favicons?domain=articleforge.com"
  },
  {
    "id": "wordhero",
    "name": "WordHero",
    "description": "WordHero is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://wordhero.com",
    "logo": "https://www.google.com/s2/favicons?domain=wordhero.com"
  },
  {
    "id": "copysmith",
    "name": "CopySmith",
    "description": "CopySmith is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://copysmith.com",
    "logo": "https://www.google.com/s2/favicons?domain=copysmith.com"
  },
  {
    "id": "creaitorai",
    "name": "Creaitor AI",
    "description": "Creaitor AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://creaitorai.com",
    "logo": "https://www.google.com/s2/favicons?domain=creaitorai.com"
  },
  {
    "id": "hypotenuseai",
    "name": "Hypotenuse AI",
    "description": "Hypotenuse AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://hypotenuseai.com",
    "logo": "https://www.google.com/s2/favicons?domain=hypotenuseai.com"
  },
  {
    "id": "writecream",
    "name": "Writecream",
    "description": "Writecream is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://writecream.com",
    "logo": "https://www.google.com/s2/favicons?domain=writecream.com"
  },
  {
    "id": "nichesss",
    "name": "Nichesss",
    "description": "Nichesss is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://nichesss.com",
    "logo": "https://www.google.com/s2/favicons?domain=nichesss.com"
  },
  {
    "id": "kafkai",
    "name": "Kafkai",
    "description": "Kafkai is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://kafkai.com",
    "logo": "https://www.google.com/s2/favicons?domain=kafkai.com"
  },
  {
    "id": "growthbar",
    "name": "GrowthBar",
    "description": "GrowthBar is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://growthbar.com",
    "logo": "https://www.google.com/s2/favicons?domain=growthbar.com"
  },
  {
    "id": "smartcopy",
    "name": "Smart Copy",
    "description": "Smart Copy is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://smartcopy.com",
    "logo": "https://www.google.com/s2/favicons?domain=smartcopy.com"
  },
  {
    "id": "seoai",
    "name": "SEO.ai",
    "description": "SEO.ai is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://seoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=seoai.com"
  },
  {
    "id": "bramework",
    "name": "Bramework",
    "description": "Bramework is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://bramework.com",
    "logo": "https://www.google.com/s2/favicons?domain=bramework.com"
  },
  {
    "id": "writerzen",
    "name": "WriterZen",
    "description": "WriterZen is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://writerzen.com",
    "logo": "https://www.google.com/s2/favicons?domain=writerzen.com"
  },
  {
    "id": "copymatic",
    "name": "Copymatic",
    "description": "Copymatic is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://copymatic.com",
    "logo": "https://www.google.com/s2/favicons?domain=copymatic.com"
  },
  {
    "id": "neuraltext",
    "name": "NeuralText",
    "description": "NeuralText is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://neuraltext.com",
    "logo": "https://www.google.com/s2/favicons?domain=neuraltext.com"
  },
  {
    "id": "wordplay",
    "name": "Wordplay",
    "description": "Wordplay is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://wordplay.com",
    "logo": "https://www.google.com/s2/favicons?domain=wordplay.com"
  },
  {
    "id": "writemeai",
    "name": "WriteMe.ai",
    "description": "WriteMe.ai is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://writemeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=writemeai.com"
  },
  {
    "id": "essaybot",
    "name": "EssayBot",
    "description": "EssayBot is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://essaybot.com",
    "logo": "https://www.google.com/s2/favicons?domain=essaybot.com"
  },
  {
    "id": "paraphraserio",
    "name": "Paraphraser.io",
    "description": "Paraphraser.io is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://paraphraserio.com",
    "logo": "https://www.google.com/s2/favicons?domain=paraphraserio.com"
  },
  {
    "id": "summarizerai",
    "name": "Summarizer AI",
    "description": "Summarizer AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://summarizerai.com",
    "logo": "https://www.google.com/s2/favicons?domain=summarizerai.com"
  },
  {
    "id": "draftai",
    "name": "Draft AI",
    "description": "Draft AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://draftai.com",
    "logo": "https://www.google.com/s2/favicons?domain=draftai.com"
  },
  {
    "id": "reword",
    "name": "Reword",
    "description": "Reword is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://reword.com",
    "logo": "https://www.google.com/s2/favicons?domain=reword.com"
  },
  {
    "id": "spellbook",
    "name": "Spellbook",
    "description": "Spellbook is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://spellbook.com",
    "logo": "https://www.google.com/s2/favicons?domain=spellbook.com"
  },
  {
    "id": "composeai",
    "name": "Compose AI",
    "description": "Compose AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://composeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=composeai.com"
  },
  {
    "id": "magickpen",
    "name": "MagickPen",
    "description": "MagickPen is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://magickpen.com",
    "logo": "https://www.google.com/s2/favicons?domain=magickpen.com"
  },
  {
    "id": "inkforall",
    "name": "Inkforall",
    "description": "Inkforall is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://inkforall.com",
    "logo": "https://www.google.com/s2/favicons?domain=inkforall.com"
  },
  {
    "id": "wordkraft",
    "name": "Wordkraft",
    "description": "Wordkraft is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://wordkraft.com",
    "logo": "https://www.google.com/s2/favicons?domain=wordkraft.com"
  },
  {
    "id": "contentedge",
    "name": "ContentEdge",
    "description": "ContentEdge is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://contentedge.com",
    "logo": "https://www.google.com/s2/favicons?domain=contentedge.com"
  },
  {
    "id": "quicktools",
    "name": "Quicktools",
    "description": "Quicktools is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://quicktools.com",
    "logo": "https://www.google.com/s2/favicons?domain=quicktools.com"
  },
  {
    "id": "aiseo",
    "name": "AISEO",
    "description": "AISEO is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://aiseo.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiseo.com"
  },
  {
    "id": "storylabai",
    "name": "StoryLab AI",
    "description": "StoryLab AI is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://storylabai.com",
    "logo": "https://www.google.com/s2/favicons?domain=storylabai.com"
  },
  {
    "id": "logicballs",
    "name": "LogicBalls",
    "description": "LogicBalls is a powerful writing tool.",
    "category": "Writing Tools",
    "link": "https://logicballs.com",
    "logo": "https://www.google.com/s2/favicons?domain=logicballs.com"
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "description": "Midjourney is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://midjourney.com",
    "logo": "https://www.google.com/s2/favicons?domain=midjourney.com"
  },
  {
    "id": "dalle",
    "name": "DALLÃ¢â€Â¬Ã¢â€¢â€“E",
    "description": "DALLÃ¢â€Â¬Ã¢â€¢â€“E is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://dalle.com",
    "logo": "https://www.google.com/s2/favicons?domain=dalle.com"
  },
  {
    "id": "stablediffusion",
    "name": "Stable Diffusion",
    "description": "Stable Diffusion is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://stablediffusion.com",
    "logo": "https://www.google.com/s2/favicons?domain=stablediffusion.com"
  },
  {
    "id": "leonardoai",
    "name": "Leonardo AI",
    "description": "Leonardo AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://leonardoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=leonardoai.com"
  },
  {
    "id": "playgroundai",
    "name": "Playground AI",
    "description": "Playground AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://playgroundai.com",
    "logo": "https://www.google.com/s2/favicons?domain=playgroundai.com"
  },
  {
    "id": "bluewillow",
    "name": "BlueWillow",
    "description": "BlueWillow is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://bluewillow.com",
    "logo": "https://www.google.com/s2/favicons?domain=bluewillow.com"
  },
  {
    "id": "dreamstudio",
    "name": "DreamStudio",
    "description": "DreamStudio is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://dreamstudio.com",
    "logo": "https://www.google.com/s2/favicons?domain=dreamstudio.com"
  },
  {
    "id": "nightcafe",
    "name": "NightCafe",
    "description": "NightCafe is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://nightcafe.com",
    "logo": "https://www.google.com/s2/favicons?domain=nightcafe.com"
  },
  {
    "id": "artbreeder",
    "name": "Artbreeder",
    "description": "Artbreeder is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://artbreeder.com",
    "logo": "https://www.google.com/s2/favicons?domain=artbreeder.com"
  },
  {
    "id": "deepdreamgenerator",
    "name": "Deep Dream Generator",
    "description": "Deep Dream Generator is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://deepdreamgenerator.com",
    "logo": "https://www.google.com/s2/favicons?domain=deepdreamgenerator.com"
  },
  {
    "id": "rundiffusion",
    "name": "RunDiffusion",
    "description": "RunDiffusion is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://rundiffusion.com",
    "logo": "https://www.google.com/s2/favicons?domain=rundiffusion.com"
  },
  {
    "id": "lexica",
    "name": "Lexica",
    "description": "Lexica is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://lexica.com",
    "logo": "https://www.google.com/s2/favicons?domain=lexica.com"
  },
  {
    "id": "magespace",
    "name": "Mage Space",
    "description": "Mage Space is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://magespace.com",
    "logo": "https://www.google.com/s2/favicons?domain=magespace.com"
  },
  {
    "id": "fotorai",
    "name": "Fotor AI",
    "description": "Fotor AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://fotorai.com",
    "logo": "https://www.google.com/s2/favicons?domain=fotorai.com"
  },
  {
    "id": "pixray",
    "name": "Pixray",
    "description": "Pixray is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://pixray.com",
    "logo": "https://www.google.com/s2/favicons?domain=pixray.com"
  },
  {
    "id": "starryai",
    "name": "StarryAI",
    "description": "StarryAI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://starryai.com",
    "logo": "https://www.google.com/s2/favicons?domain=starryai.com"
  },
  {
    "id": "imagineai",
    "name": "Imagine AI",
    "description": "Imagine AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://imagineai.com",
    "logo": "https://www.google.com/s2/favicons?domain=imagineai.com"
  },
  {
    "id": "hotpotai",
    "name": "Hotpot AI",
    "description": "Hotpot AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://hotpotai.com",
    "logo": "https://www.google.com/s2/favicons?domain=hotpotai.com"
  },
  {
    "id": "canvaai",
    "name": "Canva AI",
    "description": "Canva AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://canva.com",
    "logo": "https://www.google.com/s2/favicons?domain=canva.com"
  },
  {
    "id": "bingimagecreator",
    "name": "Bing Image Creator",
    "description": "Bing Image Creator is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://bing.com",
    "logo": "https://www.google.com/s2/favicons?domain=bing.com"
  },
  {
    "id": "cfspark",
    "name": "CF Spark",
    "description": "CF Spark is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://cfspark.com",
    "logo": "https://www.google.com/s2/favicons?domain=cfspark.com"
  },
  {
    "id": "picso",
    "name": "PicSo",
    "description": "PicSo is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://picso.com",
    "logo": "https://www.google.com/s2/favicons?domain=picso.com"
  },
  {
    "id": "dreamlike",
    "name": "Dreamlike",
    "description": "Dreamlike is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://dreamlike.com",
    "logo": "https://www.google.com/s2/favicons?domain=dreamlike.com"
  },
  {
    "id": "wombodream",
    "name": "Wombo Dream",
    "description": "Wombo Dream is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://wombodream.com",
    "logo": "https://www.google.com/s2/favicons?domain=wombodream.com"
  },
  {
    "id": "paintai",
    "name": "Paint AI",
    "description": "Paint AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://paintai.com",
    "logo": "https://www.google.com/s2/favicons?domain=paintai.com"
  },
  {
    "id": "photosonic",
    "name": "Photosonic",
    "description": "Photosonic is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://photosonic.com",
    "logo": "https://www.google.com/s2/favicons?domain=photosonic.com"
  },
  {
    "id": "neurallove",
    "name": "Neural Love",
    "description": "Neural Love is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://neurallove.com",
    "logo": "https://www.google.com/s2/favicons?domain=neurallove.com"
  },
  {
    "id": "aipicasso",
    "name": "AI Picasso",
    "description": "AI Picasso is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://aipicasso.com",
    "logo": "https://www.google.com/s2/favicons?domain=aipicasso.com"
  },
  {
    "id": "pixelzai",
    "name": "Pixelz AI",
    "description": "Pixelz AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://pixelzai.com",
    "logo": "https://www.google.com/s2/favicons?domain=pixelzai.com"
  },
  {
    "id": "getimgai",
    "name": "GetIMG AI",
    "description": "GetIMG AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://getimgai.com",
    "logo": "https://www.google.com/s2/favicons?domain=getimgai.com"
  },
  {
    "id": "photoroom",
    "name": "PhotoRoom",
    "description": "PhotoRoom is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://photoroom.com",
    "logo": "https://www.google.com/s2/favicons?domain=photoroom.com"
  },
  {
    "id": "erasebg",
    "name": "Erase.bg",
    "description": "Erase.bg is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://erasebg.com",
    "logo": "https://www.google.com/s2/favicons?domain=erasebg.com"
  },
  {
    "id": "cleanuppictures",
    "name": "Cleanup.pictures",
    "description": "Cleanup.pictures is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://cleanuppictures.com",
    "logo": "https://www.google.com/s2/favicons?domain=cleanuppictures.com"
  },
  {
    "id": "removebg",
    "name": "Remove.bg",
    "description": "Remove.bg is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://removebg.com",
    "logo": "https://www.google.com/s2/favicons?domain=removebg.com"
  },
  {
    "id": "bgsub",
    "name": "BgSub",
    "description": "BgSub is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://bgsub.com",
    "logo": "https://www.google.com/s2/favicons?domain=bgsub.com"
  },
  {
    "id": "profilepictureai",
    "name": "ProfilePicture.ai",
    "description": "ProfilePicture.ai is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://profilepictureai.com",
    "logo": "https://www.google.com/s2/favicons?domain=profilepictureai.com"
  },
  {
    "id": "avatarai",
    "name": "Avatar AI",
    "description": "Avatar AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://avatarai.com",
    "logo": "https://www.google.com/s2/favicons?domain=avatarai.com"
  },
  {
    "id": "lensaai",
    "name": "Lensa AI",
    "description": "Lensa AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://lensaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=lensaai.com"
  },
  {
    "id": "faceappai",
    "name": "FaceApp AI",
    "description": "FaceApp AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://faceappai.com",
    "logo": "https://www.google.com/s2/favicons?domain=faceappai.com"
  },
  {
    "id": "generatedphotos",
    "name": "Generated Photos",
    "description": "Generated Photos is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://generatedphotos.com",
    "logo": "https://www.google.com/s2/favicons?domain=generatedphotos.com"
  },
  {
    "id": "thispersondoesnotexist",
    "name": "ThisPersonDoesNotExist",
    "description": "ThisPersonDoesNotExist is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://thispersondoesnotexist.com",
    "logo": "https://www.google.com/s2/favicons?domain=thispersondoesnotexist.com"
  },
  {
    "id": "artsmartai",
    "name": "ArtSmart AI",
    "description": "ArtSmart AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://artsmartai.com",
    "logo": "https://www.google.com/s2/favicons?domain=artsmartai.com"
  },
  {
    "id": "stockimgai",
    "name": "Stockimg AI",
    "description": "Stockimg AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://stockimgai.com",
    "logo": "https://www.google.com/s2/favicons?domain=stockimgai.com"
  },
  {
    "id": "visualelectric",
    "name": "Visual Electric",
    "description": "Visual Electric is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://visualelectric.com",
    "logo": "https://www.google.com/s2/favicons?domain=visualelectric.com"
  },
  {
    "id": "diffusionbee",
    "name": "DiffusionBee",
    "description": "DiffusionBee is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://diffusionbee.com",
    "logo": "https://www.google.com/s2/favicons?domain=diffusionbee.com"
  },
  {
    "id": "prompthero",
    "name": "PromptHero",
    "description": "PromptHero is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://prompthero.com",
    "logo": "https://www.google.com/s2/favicons?domain=prompthero.com"
  },
  {
    "id": "playhtimages",
    "name": "PlayHT Images",
    "description": "PlayHT Images is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://playhtimages.com",
    "logo": "https://www.google.com/s2/favicons?domain=playhtimages.com"
  },
  {
    "id": "recraftai",
    "name": "Recraft AI",
    "description": "Recraft AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://recraftai.com",
    "logo": "https://www.google.com/s2/favicons?domain=recraftai.com"
  },
  {
    "id": "imagenai",
    "name": "Imagen AI",
    "description": "Imagen AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://imagenai.com",
    "logo": "https://www.google.com/s2/favicons?domain=imagenai.com"
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "description": "Firefly is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://firefly.com",
    "logo": "https://www.google.com/s2/favicons?domain=firefly.com"
  },
  {
    "id": "kreaai",
    "name": "Krea AI",
    "description": "Krea AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://kreaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=kreaai.com"
  },
  {
    "id": "scenarioai",
    "name": "Scenario AI",
    "description": "Scenario AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://scenarioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=scenarioai.com"
  },
  {
    "id": "vectorizerai",
    "name": "Vectorizer AI",
    "description": "Vectorizer AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://vectorizerai.com",
    "logo": "https://www.google.com/s2/favicons?domain=vectorizerai.com"
  },
  {
    "id": "upscalemedia",
    "name": "Upscale.media",
    "description": "Upscale.media is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://upscalemedia.com",
    "logo": "https://www.google.com/s2/favicons?domain=upscalemedia.com"
  },
  {
    "id": "clipdrop",
    "name": "Clipdrop",
    "description": "Clipdrop is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://clipdrop.com",
    "logo": "https://www.google.com/s2/favicons?domain=clipdrop.com"
  },
  {
    "id": "reminiai",
    "name": "Remini AI",
    "description": "Remini AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://reminiai.com",
    "logo": "https://www.google.com/s2/favicons?domain=reminiai.com"
  },
  {
    "id": "letsenhance",
    "name": "LetÃŽâ€œÃƒâ€¡Ãƒâ€“s Enhance",
    "description": "LetÃŽâ€œÃƒâ€¡Ãƒâ€“s Enhance is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://letsenhance.com",
    "logo": "https://www.google.com/s2/favicons?domain=letsenhance.com"
  },
  {
    "id": "magnificai",
    "name": "Magnific AI",
    "description": "Magnific AI is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://magnificai.com",
    "logo": "https://www.google.com/s2/favicons?domain=magnificai.com"
  },
  {
    "id": "runwayml",
    "name": "Runway ML",
    "description": "Runway ML is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://runwayml.com",
    "logo": "https://www.google.com/s2/favicons?domain=runwayml.com"
  },
  {
    "id": "pikalabs",
    "name": "Pika Labs",
    "description": "Pika Labs is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://pikalabs.com",
    "logo": "https://www.google.com/s2/favicons?domain=pikalabs.com"
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "description": "Synthesia is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://synthesia.com",
    "logo": "https://www.google.com/s2/favicons?domain=synthesia.com"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "description": "HeyGen is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://heygen.com",
    "logo": "https://www.google.com/s2/favicons?domain=heygen.com"
  },
  {
    "id": "did",
    "name": "D-ID",
    "description": "D-ID is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://did.com",
    "logo": "https://www.google.com/s2/favicons?domain=did.com"
  },
  {
    "id": "colossyan",
    "name": "Colossyan",
    "description": "Colossyan is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://colossyan.com",
    "logo": "https://www.google.com/s2/favicons?domain=colossyan.com"
  },
  {
    "id": "deepbrainai",
    "name": "DeepBrain AI",
    "description": "DeepBrain AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://deepbrainai.com",
    "logo": "https://www.google.com/s2/favicons?domain=deepbrainai.com"
  },
  {
    "id": "elaiio",
    "name": "Elai.io",
    "description": "Elai.io is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://elaiio.com",
    "logo": "https://www.google.com/s2/favicons?domain=elaiio.com"
  },
  {
    "id": "pictory",
    "name": "Pictory",
    "description": "Pictory is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://pictory.com",
    "logo": "https://www.google.com/s2/favicons?domain=pictory.com"
  },
  {
    "id": "lumen5",
    "name": "Lumen5",
    "description": "Lumen5 is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://lumen5.com",
    "logo": "https://www.google.com/s2/favicons?domain=lumen5.com"
  },
  {
    "id": "invideoai",
    "name": "Invideo AI",
    "description": "Invideo AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://invideoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=invideoai.com"
  },
  {
    "id": "opusclip",
    "name": "Opus Clip",
    "description": "Opus Clip is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://opusclip.com",
    "logo": "https://www.google.com/s2/favicons?domain=opusclip.com"
  },
  {
    "id": "veedio",
    "name": "Veed.io",
    "description": "Veed.io is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://veedio.com",
    "logo": "https://www.google.com/s2/favicons?domain=veedio.com"
  },
  {
    "id": "descript",
    "name": "Descript",
    "description": "Descript is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://descript.com",
    "logo": "https://www.google.com/s2/favicons?domain=descript.com"
  },
  {
    "id": "animoto",
    "name": "Animoto",
    "description": "Animoto is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://animoto.com",
    "logo": "https://www.google.com/s2/favicons?domain=animoto.com"
  },
  {
    "id": "steveai",
    "name": "Steve AI",
    "description": "Steve AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://steveai.com",
    "logo": "https://www.google.com/s2/favicons?domain=steveai.com"
  },
  {
    "id": "fliki",
    "name": "Fliki",
    "description": "Fliki is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://fliki.com",
    "logo": "https://www.google.com/s2/favicons?domain=fliki.com"
  },
  {
    "id": "vidyoai",
    "name": "Vidyo AI",
    "description": "Vidyo AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://vidyoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=vidyoai.com"
  },
  {
    "id": "rephraseai",
    "name": "Rephrase AI",
    "description": "Rephrase AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://rephraseai.com",
    "logo": "https://www.google.com/s2/favicons?domain=rephraseai.com"
  },
  {
    "id": "hourone",
    "name": "Hour One",
    "description": "Hour One is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://hourone.com",
    "logo": "https://www.google.com/s2/favicons?domain=hourone.com"
  },
  {
    "id": "genmoai",
    "name": "Genmo AI",
    "description": "Genmo AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://genmoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=genmoai.com"
  },
  {
    "id": "kaiberai",
    "name": "Kaiber AI",
    "description": "Kaiber AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://kaiberai.com",
    "logo": "https://www.google.com/s2/favicons?domain=kaiberai.com"
  },
  {
    "id": "wonderstudio",
    "name": "Wonder Studio",
    "description": "Wonder Studio is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://wonderstudio.com",
    "logo": "https://www.google.com/s2/favicons?domain=wonderstudio.com"
  },
  {
    "id": "movioai",
    "name": "Movio AI",
    "description": "Movio AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://movioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=movioai.com"
  },
  {
    "id": "flexclip",
    "name": "FlexClip",
    "description": "FlexClip is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://flexclip.com",
    "logo": "https://www.google.com/s2/favicons?domain=flexclip.com"
  },
  {
    "id": "magisto",
    "name": "Magisto",
    "description": "Magisto is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://magisto.com",
    "logo": "https://www.google.com/s2/favicons?domain=magisto.com"
  },
  {
    "id": "kapwing",
    "name": "Kapwing",
    "description": "Kapwing is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://kapwing.com",
    "logo": "https://www.google.com/s2/favicons?domain=kapwing.com"
  },
  {
    "id": "synthesys",
    "name": "Synthesys",
    "description": "Synthesys is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://synthesys.com",
    "logo": "https://www.google.com/s2/favicons?domain=synthesys.com"
  },
  {
    "id": "rawshorts",
    "name": "Raw Shorts",
    "description": "Raw Shorts is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://rawshorts.com",
    "logo": "https://www.google.com/s2/favicons?domain=rawshorts.com"
  },
  {
    "id": "wavevideo",
    "name": "Wave.video",
    "description": "Wave.video is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://wavevideo.com",
    "logo": "https://www.google.com/s2/favicons?domain=wavevideo.com"
  },
  {
    "id": "vizardai",
    "name": "Vizard AI",
    "description": "Vizard AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://vizardai.com",
    "logo": "https://www.google.com/s2/favicons?domain=vizardai.com"
  },
  {
    "id": "syllaby",
    "name": "Syllaby",
    "description": "Syllaby is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://syllaby.com",
    "logo": "https://www.google.com/s2/favicons?domain=syllaby.com"
  },
  {
    "id": "clipchampai",
    "name": "Clipchamp AI",
    "description": "Clipchamp AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://clipchampai.com",
    "logo": "https://www.google.com/s2/favicons?domain=clipchampai.com"
  },
  {
    "id": "filmoraai",
    "name": "Filmora AI",
    "description": "Filmora AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://filmoraai.com",
    "logo": "https://www.google.com/s2/favicons?domain=filmoraai.com"
  },
  {
    "id": "powtoonai",
    "name": "Powtoon AI",
    "description": "Powtoon AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://powtoonai.com",
    "logo": "https://www.google.com/s2/favicons?domain=powtoonai.com"
  },
  {
    "id": "renderforest",
    "name": "Renderforest",
    "description": "Renderforest is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://renderforest.com",
    "logo": "https://www.google.com/s2/favicons?domain=renderforest.com"
  },
  {
    "id": "wibbitz",
    "name": "Wibbitz",
    "description": "Wibbitz is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://wibbitz.com",
    "logo": "https://www.google.com/s2/favicons?domain=wibbitz.com"
  },
  {
    "id": "vidnami",
    "name": "Vidnami",
    "description": "Vidnami is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://vidnami.com",
    "logo": "https://www.google.com/s2/favicons?domain=vidnami.com"
  },
  {
    "id": "rocketium",
    "name": "Rocketium",
    "description": "Rocketium is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://rocketium.com",
    "logo": "https://www.google.com/s2/favicons?domain=rocketium.com"
  },
  {
    "id": "shuffll",
    "name": "Shuffll",
    "description": "Shuffll is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://shuffll.com",
    "logo": "https://www.google.com/s2/favicons?domain=shuffll.com"
  },
  {
    "id": "supercreatorai",
    "name": "Supercreator AI",
    "description": "Supercreator AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://supercreatorai.com",
    "logo": "https://www.google.com/s2/favicons?domain=supercreatorai.com"
  },
  {
    "id": "vidiqai",
    "name": "VidIQ AI",
    "description": "VidIQ AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://vidiqai.com",
    "logo": "https://www.google.com/s2/favicons?domain=vidiqai.com"
  },
  {
    "id": "tubebuddyai",
    "name": "TubeBuddy AI",
    "description": "TubeBuddy AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://tubebuddyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=tubebuddyai.com"
  },
  {
    "id": "shortlyaivideo",
    "name": "Shortly AI Video",
    "description": "Shortly AI Video is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://shortlyaivideo.com",
    "logo": "https://www.google.com/s2/favicons?domain=shortlyaivideo.com"
  },
  {
    "id": "dubverse",
    "name": "Dubverse",
    "description": "Dubverse is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://dubverse.com",
    "logo": "https://www.google.com/s2/favicons?domain=dubverse.com"
  },
  {
    "id": "papercup",
    "name": "Papercup",
    "description": "Papercup is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://papercup.com",
    "logo": "https://www.google.com/s2/favicons?domain=papercup.com"
  },
  {
    "id": "translatevideo",
    "name": "Translate.video",
    "description": "Translate.video is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://translatevideo.com",
    "logo": "https://www.google.com/s2/favicons?domain=translatevideo.com"
  },
  {
    "id": "dubai",
    "name": "Dub AI",
    "description": "Dub AI is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://dubai.com",
    "logo": "https://www.google.com/s2/favicons?domain=dubai.com"
  },
  {
    "id": "speechifyvideo",
    "name": "Speechify Video",
    "description": "Speechify Video is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://speechifyvideo.com",
    "logo": "https://www.google.com/s2/favicons?domain=speechifyvideo.com"
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "description": "ElevenLabs is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://elevenlabs.io",
    "logo": "https://www.google.com/s2/favicons?domain=elevenlabs.io"
  },
  {
    "id": "murfai",
    "name": "Murf AI",
    "description": "Murf AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://murfai.com",
    "logo": "https://www.google.com/s2/favicons?domain=murfai.com"
  },
  {
    "id": "playht",
    "name": "Play.ht",
    "description": "Play.ht is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://playht.com",
    "logo": "https://www.google.com/s2/favicons?domain=playht.com"
  },
  {
    "id": "descript",
    "name": "Descript",
    "description": "Descript is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://descript.com",
    "logo": "https://www.google.com/s2/favicons?domain=descript.com"
  },
  {
    "id": "resembleai",
    "name": "Resemble AI",
    "description": "Resemble AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://resembleai.com",
    "logo": "https://www.google.com/s2/favicons?domain=resembleai.com"
  },
  {
    "id": "lovoai",
    "name": "LOVO AI",
    "description": "LOVO AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://lovoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=lovoai.com"
  },
  {
    "id": "speechify",
    "name": "Speechify",
    "description": "Speechify is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://speechify.com",
    "logo": "https://www.google.com/s2/favicons?domain=speechify.com"
  },
  {
    "id": "coquiai",
    "name": "Coqui AI",
    "description": "Coqui AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://coquiai.com",
    "logo": "https://www.google.com/s2/favicons?domain=coquiai.com"
  },
  {
    "id": "voicemaker",
    "name": "Voicemaker",
    "description": "Voicemaker is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://voicemaker.com",
    "logo": "https://www.google.com/s2/favicons?domain=voicemaker.com"
  },
  {
    "id": "replicastudios",
    "name": "Replica Studios",
    "description": "Replica Studios is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://replicastudios.com",
    "logo": "https://www.google.com/s2/favicons?domain=replicastudios.com"
  },
  {
    "id": "uberduckai",
    "name": "Uberduck AI",
    "description": "Uberduck AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://uberduckai.com",
    "logo": "https://www.google.com/s2/favicons?domain=uberduckai.com"
  },
  {
    "id": "fakeyou",
    "name": "FakeYou",
    "description": "FakeYou is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://fakeyou.com",
    "logo": "https://www.google.com/s2/favicons?domain=fakeyou.com"
  },
  {
    "id": "wellsaidlabs",
    "name": "WellSaid Labs",
    "description": "WellSaid Labs is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://wellsaidlabs.com",
    "logo": "https://www.google.com/s2/favicons?domain=wellsaidlabs.com"
  },
  {
    "id": "voiceai",
    "name": "Voice.ai",
    "description": "Voice.ai is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://voiceai.com",
    "logo": "https://www.google.com/s2/favicons?domain=voiceai.com"
  },
  {
    "id": "krispai",
    "name": "Krisp AI",
    "description": "Krisp AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://krispai.com",
    "logo": "https://www.google.com/s2/favicons?domain=krispai.com"
  },
  {
    "id": "cleanvoiceai",
    "name": "Cleanvoice AI",
    "description": "Cleanvoice AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://cleanvoiceai.com",
    "logo": "https://www.google.com/s2/favicons?domain=cleanvoiceai.com"
  },
  {
    "id": "audoai",
    "name": "Audo AI",
    "description": "Audo AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=audoai.com"
  },
  {
    "id": "adobepodcastai",
    "name": "Adobe Podcast AI",
    "description": "Adobe Podcast AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://adobepodcastai.com",
    "logo": "https://www.google.com/s2/favicons?domain=adobepodcastai.com"
  },
  {
    "id": "podcastle",
    "name": "Podcastle",
    "description": "Podcastle is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://podcastle.com",
    "logo": "https://www.google.com/s2/favicons?domain=podcastle.com"
  },
  {
    "id": "castmagic",
    "name": "Castmagic",
    "description": "Castmagic is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://castmagic.com",
    "logo": "https://www.google.com/s2/favicons?domain=castmagic.com"
  },
  {
    "id": "soundraw",
    "name": "Soundraw",
    "description": "Soundraw is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://soundraw.com",
    "logo": "https://www.google.com/s2/favicons?domain=soundraw.com"
  },
  {
    "id": "boomy",
    "name": "Boomy",
    "description": "Boomy is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://boomy.com",
    "logo": "https://www.google.com/s2/favicons?domain=boomy.com"
  },
  {
    "id": "aiva",
    "name": "AIVA",
    "description": "AIVA is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://aiva.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiva.com"
  },
  {
    "id": "beatovenai",
    "name": "Beatoven AI",
    "description": "Beatoven AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://beatovenai.com",
    "logo": "https://www.google.com/s2/favicons?domain=beatovenai.com"
  },
  {
    "id": "endel",
    "name": "Endel",
    "description": "Endel is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://endel.com",
    "logo": "https://www.google.com/s2/favicons?domain=endel.com"
  },
  {
    "id": "voicemodai",
    "name": "Voicemod AI",
    "description": "Voicemod AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://voicemodai.com",
    "logo": "https://www.google.com/s2/favicons?domain=voicemodai.com"
  },
  {
    "id": "riffusion",
    "name": "Riffusion",
    "description": "Riffusion is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://riffusion.com",
    "logo": "https://www.google.com/s2/favicons?domain=riffusion.com"
  },
  {
    "id": "melobytes",
    "name": "Melobytes",
    "description": "Melobytes is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://melobytes.com",
    "logo": "https://www.google.com/s2/favicons?domain=melobytes.com"
  },
  {
    "id": "songrai",
    "name": "SongR AI",
    "description": "SongR AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://songrai.com",
    "logo": "https://www.google.com/s2/favicons?domain=songrai.com"
  },
  {
    "id": "sunoai",
    "name": "Suno AI",
    "description": "Suno AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://suno.com",
    "logo": "https://www.google.com/s2/favicons?domain=suno.com"
  },
  {
    "id": "voicifyai",
    "name": "Voicify AI",
    "description": "Voicify AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://voicifyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=voicifyai.com"
  },
  {
    "id": "audiostrip",
    "name": "AudioStrip",
    "description": "AudioStrip is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audiostrip.com",
    "logo": "https://www.google.com/s2/favicons?domain=audiostrip.com"
  },
  {
    "id": "splitterai",
    "name": "Splitter AI",
    "description": "Splitter AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://splitterai.com",
    "logo": "https://www.google.com/s2/favicons?domain=splitterai.com"
  },
  {
    "id": "kitsai",
    "name": "Kits AI",
    "description": "Kits AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://kitsai.com",
    "logo": "https://www.google.com/s2/favicons?domain=kitsai.com"
  },
  {
    "id": "voicefulio",
    "name": "Voiceful.io",
    "description": "Voiceful.io is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://voicefulio.com",
    "logo": "https://www.google.com/s2/favicons?domain=voicefulio.com"
  },
  {
    "id": "audyo",
    "name": "Audyo",
    "description": "Audyo is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audyo.com",
    "logo": "https://www.google.com/s2/favicons?domain=audyo.com"
  },
  {
    "id": "whisperai",
    "name": "Whisper AI",
    "description": "Whisper AI is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://whisperai.com",
    "logo": "https://www.google.com/s2/favicons?domain=whisperai.com"
  },
  {
    "id": "deepgram",
    "name": "Deepgram",
    "description": "Deepgram is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://deepgram.com",
    "logo": "https://www.google.com/s2/favicons?domain=deepgram.com"
  },
  {
    "id": "speechmatics",
    "name": "Speechmatics",
    "description": "Speechmatics is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://speechmatics.com",
    "logo": "https://www.google.com/s2/favicons?domain=speechmatics.com"
  },
  {
    "id": "githubcopilot",
    "name": "GitHub Copilot",
    "description": "GitHub Copilot is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://github.com",
    "logo": "https://www.google.com/s2/favicons?domain=github.com"
  },
  {
    "id": "codeium",
    "name": "Codeium",
    "description": "Codeium is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://codeium.com",
    "logo": "https://www.google.com/s2/favicons?domain=codeium.com"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "description": "Cursor is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://cursor.com",
    "logo": "https://www.google.com/s2/favicons?domain=cursor.com"
  },
  {
    "id": "replitghostwriter",
    "name": "Replit Ghostwriter",
    "description": "Replit Ghostwriter is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://replitghostwriter.com",
    "logo": "https://www.google.com/s2/favicons?domain=replitghostwriter.com"
  },
  {
    "id": "tabnine",
    "name": "Tabnine",
    "description": "Tabnine is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://tabnine.com",
    "logo": "https://www.google.com/s2/favicons?domain=tabnine.com"
  },
  {
    "id": "amazoncodewhisperer",
    "name": "Amazon CodeWhisperer",
    "description": "Amazon CodeWhisperer is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://amazoncodewhisperer.com",
    "logo": "https://www.google.com/s2/favicons?domain=amazoncodewhisperer.com"
  },
  {
    "id": "codiumai",
    "name": "Codium AI",
    "description": "Codium AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://codiumai.com",
    "logo": "https://www.google.com/s2/favicons?domain=codiumai.com"
  },
  {
    "id": "askcodi",
    "name": "AskCodi",
    "description": "AskCodi is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://askcodi.com",
    "logo": "https://www.google.com/s2/favicons?domain=askcodi.com"
  },
  {
    "id": "mutableai",
    "name": "Mutable AI",
    "description": "Mutable AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://mutableai.com",
    "logo": "https://www.google.com/s2/favicons?domain=mutableai.com"
  },
  {
    "id": "blackboxai",
    "name": "Blackbox AI",
    "description": "Blackbox AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://blackboxai.com",
    "logo": "https://www.google.com/s2/favicons?domain=blackboxai.com"
  },
  {
    "id": "codegeex",
    "name": "CodeGeeX",
    "description": "CodeGeeX is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://codegeex.com",
    "logo": "https://www.google.com/s2/favicons?domain=codegeex.com"
  },
  {
    "id": "polycoder",
    "name": "Polycoder",
    "description": "Polycoder is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://polycoder.com",
    "logo": "https://www.google.com/s2/favicons?domain=polycoder.com"
  },
  {
    "id": "kite",
    "name": "Kite",
    "description": "Kite is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://kite.com",
    "logo": "https://www.google.com/s2/favicons?domain=kite.com"
  },
  {
    "id": "deepcode",
    "name": "DeepCode",
    "description": "DeepCode is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://deepcode.com",
    "logo": "https://www.google.com/s2/favicons?domain=deepcode.com"
  },
  {
    "id": "sourcery",
    "name": "Sourcery",
    "description": "Sourcery is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://sourcery.com",
    "logo": "https://www.google.com/s2/favicons?domain=sourcery.com"
  },
  {
    "id": "codiga",
    "name": "Codiga",
    "description": "Codiga is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://codiga.com",
    "logo": "https://www.google.com/s2/favicons?domain=codiga.com"
  },
  {
    "id": "bitoai",
    "name": "Bito AI",
    "description": "Bito AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://bitoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=bitoai.com"
  },
  {
    "id": "codewp",
    "name": "CodeWP",
    "description": "CodeWP is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://codewp.com",
    "logo": "https://www.google.com/s2/favicons?domain=codewp.com"
  },
  {
    "id": "marscode",
    "name": "MarsCode",
    "description": "MarsCode is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://marscode.com",
    "logo": "https://www.google.com/s2/favicons?domain=marscode.com"
  },
  {
    "id": "continuedev",
    "name": "Continue.dev",
    "description": "Continue.dev is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://continuedev.com",
    "logo": "https://www.google.com/s2/favicons?domain=continuedev.com"
  },
  {
    "id": "refactai",
    "name": "Refact AI",
    "description": "Refact AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://refactai.com",
    "logo": "https://www.google.com/s2/favicons?domain=refactai.com"
  },
  {
    "id": "sweepai",
    "name": "Sweep AI",
    "description": "Sweep AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://sweepai.com",
    "logo": "https://www.google.com/s2/favicons?domain=sweepai.com"
  },
  {
    "id": "ai2sql",
    "name": "AI2SQL",
    "description": "AI2SQL is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://ai2sql.com",
    "logo": "https://www.google.com/s2/favicons?domain=ai2sql.com"
  },
  {
    "id": "sqlai",
    "name": "SQLAI",
    "description": "SQLAI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://sqlai.com",
    "logo": "https://www.google.com/s2/favicons?domain=sqlai.com"
  },
  {
    "id": "frontendai",
    "name": "Frontend AI",
    "description": "Frontend AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://frontendai.com",
    "logo": "https://www.google.com/s2/favicons?domain=frontendai.com"
  },
  {
    "id": "debuild",
    "name": "Debuild",
    "description": "Debuild is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://debuild.com",
    "logo": "https://www.google.com/s2/favicons?domain=debuild.com"
  },
  {
    "id": "teleporthq",
    "name": "TeleportHQ",
    "description": "TeleportHQ is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://teleporthq.com",
    "logo": "https://www.google.com/s2/favicons?domain=teleporthq.com"
  },
  {
    "id": "builderai",
    "name": "Builder.ai",
    "description": "Builder.ai is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://builderai.com",
    "logo": "https://www.google.com/s2/favicons?domain=builderai.com"
  },
  {
    "id": "locofyai",
    "name": "Locofy AI",
    "description": "Locofy AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://locofyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=locofyai.com"
  },
  {
    "id": "uizard",
    "name": "Uizard",
    "description": "Uizard is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://uizard.com",
    "logo": "https://www.google.com/s2/favicons?domain=uizard.com"
  },
  {
    "id": "galileoai",
    "name": "Galileo AI",
    "description": "Galileo AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://galileoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=galileoai.com"
  },
  {
    "id": "animaai",
    "name": "Anima AI",
    "description": "Anima AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://animaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=animaai.com"
  },
  {
    "id": "appgyverai",
    "name": "Appgyver AI",
    "description": "Appgyver AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://appgyverai.com",
    "logo": "https://www.google.com/s2/favicons?domain=appgyverai.com"
  },
  {
    "id": "retoolai",
    "name": "Retool AI",
    "description": "Retool AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://retoolai.com",
    "logo": "https://www.google.com/s2/favicons?domain=retoolai.com"
  },
  {
    "id": "superblocks",
    "name": "Superblocks",
    "description": "Superblocks is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://superblocks.com",
    "logo": "https://www.google.com/s2/favicons?domain=superblocks.com"
  },
  {
    "id": "autocode",
    "name": "Autocode",
    "description": "Autocode is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://autocode.com",
    "logo": "https://www.google.com/s2/favicons?domain=autocode.com"
  },
  {
    "id": "windsurfai",
    "name": "Windsurf AI",
    "description": "Windsurf AI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://windsurfai.com",
    "logo": "https://www.google.com/s2/favicons?domain=windsurfai.com"
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "description": "LangChain is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://langchain.com",
    "logo": "https://www.google.com/s2/favicons?domain=langchain.com"
  },
  {
    "id": "autogpt",
    "name": "AutoGPT",
    "description": "AutoGPT is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://autogpt.com",
    "logo": "https://www.google.com/s2/favicons?domain=autogpt.com"
  },
  {
    "id": "crewai",
    "name": "CrewAI",
    "description": "CrewAI is a top-tier coding tools solution.",
    "category": "Coding Tools",
    "link": "https://crewai.com",
    "logo": "https://www.google.com/s2/favicons?domain=crewai.com"
  },
  {
    "id": "notionai",
    "name": "Notion AI",
    "description": "Notion AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://notion.so",
    "logo": "https://www.google.com/s2/favicons?domain=notion.so"
  },
  {
    "id": "clickupai",
    "name": "ClickUp AI",
    "description": "ClickUp AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://clickupai.com",
    "logo": "https://www.google.com/s2/favicons?domain=clickupai.com"
  },
  {
    "id": "taskade",
    "name": "Taskade",
    "description": "Taskade is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://taskade.com",
    "logo": "https://www.google.com/s2/favicons?domain=taskade.com"
  },
  {
    "id": "memai",
    "name": "Mem AI",
    "description": "Mem AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://memai.com",
    "logo": "https://www.google.com/s2/favicons?domain=memai.com"
  },
  {
    "id": "motionai",
    "name": "Motion AI",
    "description": "Motion AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://motionai.com",
    "logo": "https://www.google.com/s2/favicons?domain=motionai.com"
  },
  {
    "id": "rewindai",
    "name": "Rewind AI",
    "description": "Rewind AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://rewindai.com",
    "logo": "https://www.google.com/s2/favicons?domain=rewindai.com"
  },
  {
    "id": "timelyai",
    "name": "Timely AI",
    "description": "Timely AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://timelyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=timelyai.com"
  },
  {
    "id": "firefliesai",
    "name": "Fireflies AI",
    "description": "Fireflies AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://firefliesai.com",
    "logo": "https://www.google.com/s2/favicons?domain=firefliesai.com"
  },
  {
    "id": "otterai",
    "name": "Otter.ai",
    "description": "Otter.ai is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://otterai.com",
    "logo": "https://www.google.com/s2/favicons?domain=otterai.com"
  },
  {
    "id": "fathomai",
    "name": "Fathom AI",
    "description": "Fathom AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://fathomai.com",
    "logo": "https://www.google.com/s2/favicons?domain=fathomai.com"
  },
  {
    "id": "supernormal",
    "name": "Supernormal",
    "description": "Supernormal is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://supernormal.com",
    "logo": "https://www.google.com/s2/favicons?domain=supernormal.com"
  },
  {
    "id": "grainai",
    "name": "Grain AI",
    "description": "Grain AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://grainai.com",
    "logo": "https://www.google.com/s2/favicons?domain=grainai.com"
  },
  {
    "id": "fellowai",
    "name": "Fellow AI",
    "description": "Fellow AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://fellowai.com",
    "logo": "https://www.google.com/s2/favicons?domain=fellowai.com"
  },
  {
    "id": "avoma",
    "name": "Avoma",
    "description": "Avoma is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://avoma.com",
    "logo": "https://www.google.com/s2/favicons?domain=avoma.com"
  },
  {
    "id": "saneboxai",
    "name": "SaneBox AI",
    "description": "SaneBox AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://saneboxai.com",
    "logo": "https://www.google.com/s2/favicons?domain=saneboxai.com"
  },
  {
    "id": "magicalai",
    "name": "Magical AI",
    "description": "Magical AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://magicalai.com",
    "logo": "https://www.google.com/s2/favicons?domain=magicalai.com"
  },
  {
    "id": "bardeenai",
    "name": "Bardeen AI",
    "description": "Bardeen AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://bardeenai.com",
    "logo": "https://www.google.com/s2/favicons?domain=bardeenai.com"
  },
  {
    "id": "zapierai",
    "name": "Zapier AI",
    "description": "Zapier AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://zapier.com",
    "logo": "https://www.google.com/s2/favicons?domain=zapier.com"
  },
  {
    "id": "makecom",
    "name": "Make.com",
    "description": "Make.com is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://makecom.com",
    "logo": "https://www.google.com/s2/favicons?domain=makecom.com"
  },
  {
    "id": "iftttai",
    "name": "IFTTT AI",
    "description": "IFTTT AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://iftttai.com",
    "logo": "https://www.google.com/s2/favicons?domain=iftttai.com"
  },
  {
    "id": "todoistai",
    "name": "Todoist AI",
    "description": "Todoist AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://todoistai.com",
    "logo": "https://www.google.com/s2/favicons?domain=todoistai.com"
  },
  {
    "id": "xembly",
    "name": "Xembly",
    "description": "Xembly is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://xembly.com",
    "logo": "https://www.google.com/s2/favicons?domain=xembly.com"
  },
  {
    "id": "clockwiseai",
    "name": "Clockwise AI",
    "description": "Clockwise AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://clockwiseai.com",
    "logo": "https://www.google.com/s2/favicons?domain=clockwiseai.com"
  },
  {
    "id": "reclaimai",
    "name": "Reclaim AI",
    "description": "Reclaim AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://reclaimai.com",
    "logo": "https://www.google.com/s2/favicons?domain=reclaimai.com"
  },
  {
    "id": "beforesunsetai",
    "name": "BeforeSunset AI",
    "description": "BeforeSunset AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://beforesunsetai.com",
    "logo": "https://www.google.com/s2/favicons?domain=beforesunsetai.com"
  },
  {
    "id": "flowrite",
    "name": "Flowrite",
    "description": "Flowrite is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://flowrite.com",
    "logo": "https://www.google.com/s2/favicons?domain=flowrite.com"
  },
  {
    "id": "composeai",
    "name": "Compose AI",
    "description": "Compose AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://composeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=composeai.com"
  },
  {
    "id": "shortwaveai",
    "name": "Shortwave AI",
    "description": "Shortwave AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://shortwaveai.com",
    "logo": "https://www.google.com/s2/favicons?domain=shortwaveai.com"
  },
  {
    "id": "missiveai",
    "name": "Missive AI",
    "description": "Missive AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://missiveai.com",
    "logo": "https://www.google.com/s2/favicons?domain=missiveai.com"
  },
  {
    "id": "superhumanai",
    "name": "Superhuman AI",
    "description": "Superhuman AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://superhumanai.com",
    "logo": "https://www.google.com/s2/favicons?domain=superhumanai.com"
  },
  {
    "id": "mailmaestro",
    "name": "MailMaestro",
    "description": "MailMaestro is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://mailmaestro.com",
    "logo": "https://www.google.com/s2/favicons?domain=mailmaestro.com"
  },
  {
    "id": "aimailassistant",
    "name": "AI Mail Assistant",
    "description": "AI Mail Assistant is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://aimailassistant.com",
    "logo": "https://www.google.com/s2/favicons?domain=aimailassistant.com"
  },
  {
    "id": "trelloai",
    "name": "Trello AI",
    "description": "Trello AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://trelloai.com",
    "logo": "https://www.google.com/s2/favicons?domain=trelloai.com"
  },
  {
    "id": "asanaai",
    "name": "Asana AI",
    "description": "Asana AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://asanaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=asanaai.com"
  },
  {
    "id": "mondayai",
    "name": "Monday AI",
    "description": "Monday AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://mondayai.com",
    "logo": "https://www.google.com/s2/favicons?domain=mondayai.com"
  },
  {
    "id": "heightai",
    "name": "Height AI",
    "description": "Height AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://heightai.com",
    "logo": "https://www.google.com/s2/favicons?domain=heightai.com"
  },
  {
    "id": "taskmatrix",
    "name": "TaskMatrix",
    "description": "TaskMatrix is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://taskmatrix.com",
    "logo": "https://www.google.com/s2/favicons?domain=taskmatrix.com"
  },
  {
    "id": "aiplanner",
    "name": "AI Planner",
    "description": "AI Planner is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://aiplanner.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiplanner.com"
  },
  {
    "id": "smartsuiteai",
    "name": "SmartSuite AI",
    "description": "SmartSuite AI is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://smartsuiteai.com",
    "logo": "https://www.google.com/s2/favicons?domain=smartsuiteai.com"
  },
  {
    "id": "surferseo",
    "name": "Surfer SEO",
    "description": "Surfer SEO is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://surferseo.com",
    "logo": "https://www.google.com/s2/favicons?domain=surferseo.com"
  },
  {
    "id": "frase",
    "name": "Frase",
    "description": "Frase is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://frase.com",
    "logo": "https://www.google.com/s2/favicons?domain=frase.com"
  },
  {
    "id": "marketmuse",
    "name": "MarketMuse",
    "description": "MarketMuse is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketmuse.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketmuse.com"
  },
  {
    "id": "clearscope",
    "name": "Clearscope",
    "description": "Clearscope is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://clearscope.com",
    "logo": "https://www.google.com/s2/favicons?domain=clearscope.com"
  },
  {
    "id": "neuronwriter",
    "name": "NeuronWriter",
    "description": "NeuronWriter is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://neuronwriter.com",
    "logo": "https://www.google.com/s2/favicons?domain=neuronwriter.com"
  },
  {
    "id": "scalenut",
    "name": "Scalenut",
    "description": "Scalenut is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://scalenut.com",
    "logo": "https://www.google.com/s2/favicons?domain=scalenut.com"
  },
  {
    "id": "growthbar",
    "name": "GrowthBar",
    "description": "GrowthBar is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://growthbar.com",
    "logo": "https://www.google.com/s2/favicons?domain=growthbar.com"
  },
  {
    "id": "outranking",
    "name": "Outranking",
    "description": "Outranking is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://outranking.com",
    "logo": "https://www.google.com/s2/favicons?domain=outranking.com"
  },
  {
    "id": "inkseo",
    "name": "INK SEO",
    "description": "INK SEO is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://inkseo.com",
    "logo": "https://www.google.com/s2/favicons?domain=inkseo.com"
  },
  {
    "id": "semrushai",
    "name": "Semrush AI",
    "description": "Semrush AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://semrushai.com",
    "logo": "https://www.google.com/s2/favicons?domain=semrushai.com"
  },
  {
    "id": "ahrefsai",
    "name": "Ahrefs AI",
    "description": "Ahrefs AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://ahrefsai.com",
    "logo": "https://www.google.com/s2/favicons?domain=ahrefsai.com"
  },
  {
    "id": "adcreativeai",
    "name": "AdCreative.ai",
    "description": "AdCreative.ai is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://adcreativeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=adcreativeai.com"
  },
  {
    "id": "predisai",
    "name": "Predis.ai",
    "description": "Predis.ai is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://predisai.com",
    "logo": "https://www.google.com/s2/favicons?domain=predisai.com"
  },
  {
    "id": "ocoya",
    "name": "Ocoya",
    "description": "Ocoya is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://ocoya.com",
    "logo": "https://www.google.com/s2/favicons?domain=ocoya.com"
  },
  {
    "id": "copymonkey",
    "name": "CopyMonkey",
    "description": "CopyMonkey is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://copymonkey.com",
    "logo": "https://www.google.com/s2/favicons?domain=copymonkey.com"
  },
  {
    "id": "smartlyio",
    "name": "Smartly.io",
    "description": "Smartly.io is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://smartlyio.com",
    "logo": "https://www.google.com/s2/favicons?domain=smartlyio.com"
  },
  {
    "id": "phrasee",
    "name": "Phrasee",
    "description": "Phrasee is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://phrasee.com",
    "logo": "https://www.google.com/s2/favicons?domain=phrasee.com"
  },
  {
    "id": "persado",
    "name": "Persado",
    "description": "Persado is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://persado.com",
    "logo": "https://www.google.com/s2/favicons?domain=persado.com"
  },
  {
    "id": "albertai",
    "name": "Albert.ai",
    "description": "Albert.ai is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://albertai.com",
    "logo": "https://www.google.com/s2/favicons?domain=albertai.com"
  },
  {
    "id": "crayonai",
    "name": "Crayon AI",
    "description": "Crayon AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://crayonai.com",
    "logo": "https://www.google.com/s2/favicons?domain=crayonai.com"
  },
  {
    "id": "brand24ai",
    "name": "Brand24 AI",
    "description": "Brand24 AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://brand24ai.com",
    "logo": "https://www.google.com/s2/favicons?domain=brand24ai.com"
  },
  {
    "id": "hootsuiteai",
    "name": "Hootsuite AI",
    "description": "Hootsuite AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://hootsuiteai.com",
    "logo": "https://www.google.com/s2/favicons?domain=hootsuiteai.com"
  },
  {
    "id": "bufferai",
    "name": "Buffer AI",
    "description": "Buffer AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://bufferai.com",
    "logo": "https://www.google.com/s2/favicons?domain=bufferai.com"
  },
  {
    "id": "vistasocial",
    "name": "Vista Social",
    "description": "Vista Social is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://vistasocial.com",
    "logo": "https://www.google.com/s2/favicons?domain=vistasocial.com"
  },
  {
    "id": "socialbeeai",
    "name": "SocialBee AI",
    "description": "SocialBee AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://socialbeeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=socialbeeai.com"
  },
  {
    "id": "flickai",
    "name": "Flick AI",
    "description": "Flick AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://flickai.com",
    "logo": "https://www.google.com/s2/favicons?domain=flickai.com"
  },
  {
    "id": "taplio",
    "name": "Taplio",
    "description": "Taplio is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://taplio.com",
    "logo": "https://www.google.com/s2/favicons?domain=taplio.com"
  },
  {
    "id": "tweethunter",
    "name": "TweetHunter",
    "description": "TweetHunter is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://tweethunter.com",
    "logo": "https://www.google.com/s2/favicons?domain=tweethunter.com"
  },
  {
    "id": "typefullyai",
    "name": "Typefully AI",
    "description": "Typefully AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://typefullyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=typefullyai.com"
  },
  {
    "id": "postwise",
    "name": "Postwise",
    "description": "Postwise is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://postwise.com",
    "logo": "https://www.google.com/s2/favicons?domain=postwise.com"
  },
  {
    "id": "contentstudioai",
    "name": "ContentStudio AI",
    "description": "ContentStudio AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://contentstudioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=contentstudioai.com"
  },
  {
    "id": "metricoolai",
    "name": "Metricool AI",
    "description": "Metricool AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://metricoolai.com",
    "logo": "https://www.google.com/s2/favicons?domain=metricoolai.com"
  },
  {
    "id": "publerai",
    "name": "Publer AI",
    "description": "Publer AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://publerai.com",
    "logo": "https://www.google.com/s2/favicons?domain=publerai.com"
  },
  {
    "id": "laterai",
    "name": "Later AI",
    "description": "Later AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://laterai.com",
    "logo": "https://www.google.com/s2/favicons?domain=laterai.com"
  },
  {
    "id": "planolyai",
    "name": "Planoly AI",
    "description": "Planoly AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://planolyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=planolyai.com"
  },
  {
    "id": "canvamagicwrite",
    "name": "Canva Magic Write",
    "description": "Canva Magic Write is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://canvamagicwrite.com",
    "logo": "https://www.google.com/s2/favicons?domain=canvamagicwrite.com"
  },
  {
    "id": "designsai",
    "name": "Designs.ai",
    "description": "Designs.ai is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://designsai.com",
    "logo": "https://www.google.com/s2/favicons?domain=designsai.com"
  },
  {
    "id": "lookaai",
    "name": "Looka AI",
    "description": "Looka AI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://lookaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=lookaai.com"
  },
  {
    "id": "logoai",
    "name": "LogoAI",
    "description": "LogoAI is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://logoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=logoai.com"
  },
  {
    "id": "shopifymagic",
    "name": "Shopify Magic",
    "description": "Shopify Magic is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://shopifymagic.com",
    "logo": "https://www.google.com/s2/favicons?domain=shopifymagic.com"
  },
  {
    "id": "hubspotai",
    "name": "HubSpot AI",
    "description": "HubSpot AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://hubspotai.com",
    "logo": "https://www.google.com/s2/favicons?domain=hubspotai.com"
  },
  {
    "id": "intercomfin",
    "name": "Intercom Fin",
    "description": "Intercom Fin is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://intercomfin.com",
    "logo": "https://www.google.com/s2/favicons?domain=intercomfin.com"
  },
  {
    "id": "zendeskai",
    "name": "Zendesk AI",
    "description": "Zendesk AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://zendeskai.com",
    "logo": "https://www.google.com/s2/favicons?domain=zendeskai.com"
  },
  {
    "id": "freshdeskai",
    "name": "Freshdesk AI",
    "description": "Freshdesk AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://freshdeskai.com",
    "logo": "https://www.google.com/s2/favicons?domain=freshdeskai.com"
  },
  {
    "id": "driftai",
    "name": "Drift AI",
    "description": "Drift AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://driftai.com",
    "logo": "https://www.google.com/s2/favicons?domain=driftai.com"
  },
  {
    "id": "tidioai",
    "name": "Tidio AI",
    "description": "Tidio AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://tidioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=tidioai.com"
  },
  {
    "id": "manychatai",
    "name": "ManyChat AI",
    "description": "ManyChat AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://manychatai.com",
    "logo": "https://www.google.com/s2/favicons?domain=manychatai.com"
  },
  {
    "id": "landbotai",
    "name": "Landbot AI",
    "description": "Landbot AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://landbotai.com",
    "logo": "https://www.google.com/s2/favicons?domain=landbotai.com"
  },
  {
    "id": "adaai",
    "name": "Ada AI",
    "description": "Ada AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://adaai.com",
    "logo": "https://www.google.com/s2/favicons?domain=adaai.com"
  },
  {
    "id": "ultimateai",
    "name": "Ultimate.ai",
    "description": "Ultimate.ai is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://ultimateai.com",
    "logo": "https://www.google.com/s2/favicons?domain=ultimateai.com"
  },
  {
    "id": "zohoai",
    "name": "Zoho AI",
    "description": "Zoho AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://zohoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=zohoai.com"
  },
  {
    "id": "salesforceeinstein",
    "name": "Salesforce Einstein",
    "description": "Salesforce Einstein is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://salesforceeinstein.com",
    "logo": "https://www.google.com/s2/favicons?domain=salesforceeinstein.com"
  },
  {
    "id": "apolloio",
    "name": "Apollo.io",
    "description": "Apollo.io is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://apolloio.com",
    "logo": "https://www.google.com/s2/favicons?domain=apolloio.com"
  },
  {
    "id": "clayai",
    "name": "Clay AI",
    "description": "Clay AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://clayai.com",
    "logo": "https://www.google.com/s2/favicons?domain=clayai.com"
  },
  {
    "id": "closecrmai",
    "name": "Close CRM AI",
    "description": "Close CRM AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://closecrmai.com",
    "logo": "https://www.google.com/s2/favicons?domain=closecrmai.com"
  },
  {
    "id": "pipedriveai",
    "name": "Pipedrive AI",
    "description": "Pipedrive AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://pipedriveai.com",
    "logo": "https://www.google.com/s2/favicons?domain=pipedriveai.com"
  },
  {
    "id": "gongai",
    "name": "Gong AI",
    "description": "Gong AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://gongai.com",
    "logo": "https://www.google.com/s2/favicons?domain=gongai.com"
  },
  {
    "id": "chorusai",
    "name": "Chorus AI",
    "description": "Chorus AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://chorusai.com",
    "logo": "https://www.google.com/s2/favicons?domain=chorusai.com"
  },
  {
    "id": "peopleai",
    "name": "People.ai",
    "description": "People.ai is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://peopleai.com",
    "logo": "https://www.google.com/s2/favicons?domain=peopleai.com"
  },
  {
    "id": "crystalknows",
    "name": "Crystal Knows",
    "description": "Crystal Knows is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://crystalknows.com",
    "logo": "https://www.google.com/s2/favicons?domain=crystalknows.com"
  },
  {
    "id": "lavenderai",
    "name": "Lavender AI",
    "description": "Lavender AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://lavenderai.com",
    "logo": "https://www.google.com/s2/favicons?domain=lavenderai.com"
  },
  {
    "id": "regieai",
    "name": "Regie AI",
    "description": "Regie AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://regieai.com",
    "logo": "https://www.google.com/s2/favicons?domain=regieai.com"
  },
  {
    "id": "seamlessai",
    "name": "Seamless AI",
    "description": "Seamless AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://seamlessai.com",
    "logo": "https://www.google.com/s2/favicons?domain=seamlessai.com"
  },
  {
    "id": "outreachai",
    "name": "Outreach AI",
    "description": "Outreach AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://outreachai.com",
    "logo": "https://www.google.com/s2/favicons?domain=outreachai.com"
  },
  {
    "id": "replyioai",
    "name": "Reply.io AI",
    "description": "Reply.io AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://replyioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=replyioai.com"
  },
  {
    "id": "smartleadai",
    "name": "Smartlead AI",
    "description": "Smartlead AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://smartleadai.com",
    "logo": "https://www.google.com/s2/favicons?domain=smartleadai.com"
  },
  {
    "id": "lemlistai",
    "name": "Lemlist AI",
    "description": "Lemlist AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://lemlistai.com",
    "logo": "https://www.google.com/s2/favicons?domain=lemlistai.com"
  },
  {
    "id": "warmboxai",
    "name": "Warmbox AI",
    "description": "Warmbox AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://warmboxai.com",
    "logo": "https://www.google.com/s2/favicons?domain=warmboxai.com"
  },
  {
    "id": "instantlyai",
    "name": "Instantly AI",
    "description": "Instantly AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://instantlyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=instantlyai.com"
  },
  {
    "id": "mailshakeai",
    "name": "Mailshake AI",
    "description": "Mailshake AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://mailshakeai.com",
    "logo": "https://www.google.com/s2/favicons?domain=mailshakeai.com"
  },
  {
    "id": "customerioai",
    "name": "Customer.io AI",
    "description": "Customer.io AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://customerioai.com",
    "logo": "https://www.google.com/s2/favicons?domain=customerioai.com"
  },
  {
    "id": "brevoai",
    "name": "Brevo AI",
    "description": "Brevo AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://brevoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=brevoai.com"
  },
  {
    "id": "activecampaignai",
    "name": "ActiveCampaign AI",
    "description": "ActiveCampaign AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://activecampaignai.com",
    "logo": "https://www.google.com/s2/favicons?domain=activecampaignai.com"
  },
  {
    "id": "convertkitai",
    "name": "ConvertKit AI",
    "description": "ConvertKit AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://convertkitai.com",
    "logo": "https://www.google.com/s2/favicons?domain=convertkitai.com"
  },
  {
    "id": "mailerliteai",
    "name": "MailerLite AI",
    "description": "MailerLite AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://mailerliteai.com",
    "logo": "https://www.google.com/s2/favicons?domain=mailerliteai.com"
  },
  {
    "id": "sendinblueai",
    "name": "Sendinblue AI",
    "description": "Sendinblue AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://sendinblueai.com",
    "logo": "https://www.google.com/s2/favicons?domain=sendinblueai.com"
  },
  {
    "id": "omnisendai",
    "name": "Omnisend AI",
    "description": "Omnisend AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://omnisendai.com",
    "logo": "https://www.google.com/s2/favicons?domain=omnisendai.com"
  },
  {
    "id": "klaviyoai",
    "name": "Klaviyo AI",
    "description": "Klaviyo AI is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://klaviyoai.com",
    "logo": "https://www.google.com/s2/favicons?domain=klaviyoai.com"
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "description": "Perplexity is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://perplexity.ai",
    "logo": "https://www.google.com/s2/favicons?domain=perplexity.ai"
  },
  {
    "id": "elicit",
    "name": "Elicit",
    "description": "Elicit is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://elicit.com",
    "logo": "https://www.google.com/s2/favicons?domain=elicit.com"
  },
  {
    "id": "sciteai",
    "name": "Scite.ai",
    "description": "Scite.ai is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://sciteai.com",
    "logo": "https://www.google.com/s2/favicons?domain=sciteai.com"
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "description": "Consensus is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://consensus.com",
    "logo": "https://www.google.com/s2/favicons?domain=consensus.com"
  },
  {
    "id": "connectedpapers",
    "name": "Connected Papers",
    "description": "Connected Papers is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://connectedpapers.com",
    "logo": "https://www.google.com/s2/favicons?domain=connectedpapers.com"
  },
  {
    "id": "researchrabbit",
    "name": "Research Rabbit",
    "description": "Research Rabbit is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://researchrabbit.com",
    "logo": "https://www.google.com/s2/favicons?domain=researchrabbit.com"
  },
  {
    "id": "scholarcy",
    "name": "Scholarcy",
    "description": "Scholarcy is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://scholarcy.com",
    "logo": "https://www.google.com/s2/favicons?domain=scholarcy.com"
  },
  {
    "id": "explainpaper",
    "name": "Explainpaper",
    "description": "Explainpaper is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://explainpaper.com",
    "logo": "https://www.google.com/s2/favicons?domain=explainpaper.com"
  },
  {
    "id": "paperpileai",
    "name": "Paperpile AI",
    "description": "Paperpile AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://paperpileai.com",
    "logo": "https://www.google.com/s2/favicons?domain=paperpileai.com"
  },
  {
    "id": "zoteroai",
    "name": "Zotero AI",
    "description": "Zotero AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://zoteroai.com",
    "logo": "https://www.google.com/s2/favicons?domain=zoteroai.com"
  },
  {
    "id": "mendeleyai",
    "name": "Mendeley AI",
    "description": "Mendeley AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://mendeleyai.com",
    "logo": "https://www.google.com/s2/favicons?domain=mendeleyai.com"
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "description": "NotebookLM is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://notebooklm.com",
    "logo": "https://www.google.com/s2/favicons?domain=notebooklm.com"
  },
  {
    "id": "geneiai",
    "name": "Genei AI",
    "description": "Genei AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://geneiai.com",
    "logo": "https://www.google.com/s2/favicons?domain=geneiai.com"
  },
  {
    "id": "scispace",
    "name": "SciSpace",
    "description": "SciSpace is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://scispace.com",
    "logo": "https://www.google.com/s2/favicons?domain=scispace.com"
  },
  {
    "id": "irisai",
    "name": "Iris.ai",
    "description": "Iris.ai is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://irisai.com",
    "logo": "https://www.google.com/s2/favicons?domain=irisai.com"
  },
  {
    "id": "semanticscholarai",
    "name": "Semantic Scholar AI",
    "description": "Semantic Scholar AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://semanticscholarai.com",
    "logo": "https://www.google.com/s2/favicons?domain=semanticscholarai.com"
  },
  {
    "id": "metaphorai",
    "name": "Metaphor AI",
    "description": "Metaphor AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://metaphorai.com",
    "logo": "https://www.google.com/s2/favicons?domain=metaphorai.com"
  },
  {
    "id": "explainlikeim5ai",
    "name": "Explain Like IÃŽâ€œÃƒâ€¡Ãƒâ€“m 5 AI",
    "description": "Explain Like IÃŽâ€œÃƒâ€¡Ãƒâ€“m 5 AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://explainlikeim5ai.com",
    "logo": "https://www.google.com/s2/favicons?domain=explainlikeim5ai.com"
  },
  {
    "id": "studycrumb",
    "name": "StudyCrumb",
    "description": "StudyCrumb is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://studycrumb.com",
    "logo": "https://www.google.com/s2/favicons?domain=studycrumb.com"
  },
  {
    "id": "tutorai",
    "name": "Tutor AI",
    "description": "Tutor AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://tutorai.com",
    "logo": "https://www.google.com/s2/favicons?domain=tutorai.com"
  },
  {
    "id": "socraticai",
    "name": "Socratic AI",
    "description": "Socratic AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://socraticai.com",
    "logo": "https://www.google.com/s2/favicons?domain=socraticai.com"
  },
  {
    "id": "quizletai",
    "name": "Quizlet AI",
    "description": "Quizlet AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://quizletai.com",
    "logo": "https://www.google.com/s2/favicons?domain=quizletai.com"
  },
  {
    "id": "knowjiai",
    "name": "Knowji AI",
    "description": "Knowji AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://knowjiai.com",
    "logo": "https://www.google.com/s2/favicons?domain=knowjiai.com"
  },
  {
    "id": "studyableai",
    "name": "Studyable AI",
    "description": "Studyable AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://studyableai.com",
    "logo": "https://www.google.com/s2/favicons?domain=studyableai.com"
  },
  {
    "id": "examai",
    "name": "Exam AI",
    "description": "Exam AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://examai.com",
    "logo": "https://www.google.com/s2/favicons?domain=examai.com"
  },
  {
    "id": "flashcardai",
    "name": "Flashcard AI",
    "description": "Flashcard AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://flashcardai.com",
    "logo": "https://www.google.com/s2/favicons?domain=flashcardai.com"
  },
  {
    "id": "notegenai",
    "name": "NoteGen AI",
    "description": "NoteGen AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://notegenai.com",
    "logo": "https://www.google.com/s2/favicons?domain=notegenai.com"
  },
  {
    "id": "recallai",
    "name": "Recall AI",
    "description": "Recall AI is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://recallai.com",
    "logo": "https://www.google.com/s2/favicons?domain=recallai.com"
  },
  {
    "id": "learngpt",
    "name": "LearnGPT",
    "description": "LearnGPT is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://learngpt.com",
    "logo": "https://www.google.com/s2/favicons?domain=learngpt.com"
  },
  {
    "id": "marketingextra1",
    "name": "Marketing Extra 1",
    "description": "Marketing Extra 1 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra1.com"
  },
  {
    "id": "marketingextra2",
    "name": "Marketing Extra 2",
    "description": "Marketing Extra 2 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra2.com"
  },
  {
    "id": "marketingextra3",
    "name": "Marketing Extra 3",
    "description": "Marketing Extra 3 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra3.com"
  },
  {
    "id": "marketingextra4",
    "name": "Marketing Extra 4",
    "description": "Marketing Extra 4 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra4.com"
  },
  {
    "id": "marketingextra5",
    "name": "Marketing Extra 5",
    "description": "Marketing Extra 5 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra5.com"
  },
  {
    "id": "marketingextra6",
    "name": "Marketing Extra 6",
    "description": "Marketing Extra 6 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra6.com"
  },
  {
    "id": "marketingextra7",
    "name": "Marketing Extra 7",
    "description": "Marketing Extra 7 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra7.com"
  },
  {
    "id": "marketingextra8",
    "name": "Marketing Extra 8",
    "description": "Marketing Extra 8 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra8.com"
  },
  {
    "id": "marketingextra9",
    "name": "Marketing Extra 9",
    "description": "Marketing Extra 9 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra9.com"
  },
  {
    "id": "marketingextra10",
    "name": "Marketing Extra 10",
    "description": "Marketing Extra 10 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra10.com"
  },
  {
    "id": "marketingextra11",
    "name": "Marketing Extra 11",
    "description": "Marketing Extra 11 is a top-tier marketing solution.",
    "category": "Marketing",
    "link": "https://marketingextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=marketingextra11.com"
  },
  {
    "id": "imagegenerationextra1",
    "name": "Image Generation Extra 1",
    "description": "Image Generation Extra 1 is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://imagegenerationextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=imagegenerationextra1.com"
  },
  {
    "id": "imagegenerationextra2",
    "name": "Image Generation Extra 2",
    "description": "Image Generation Extra 2 is a top-tier image generation solution.",
    "category": "Image Generation",
    "link": "https://imagegenerationextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=imagegenerationextra2.com"
  },
  {
    "id": "audio/voiceextra1",
    "name": "Audio / Voice Extra 1",
    "description": "Audio / Voice Extra 1 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra1.com"
  },
  {
    "id": "audio/voiceextra2",
    "name": "Audio / Voice Extra 2",
    "description": "Audio / Voice Extra 2 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra2.com"
  },
  {
    "id": "audio/voiceextra3",
    "name": "Audio / Voice Extra 3",
    "description": "Audio / Voice Extra 3 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra3.com"
  },
  {
    "id": "audio/voiceextra4",
    "name": "Audio / Voice Extra 4",
    "description": "Audio / Voice Extra 4 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra4.com"
  },
  {
    "id": "audio/voiceextra5",
    "name": "Audio / Voice Extra 5",
    "description": "Audio / Voice Extra 5 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra5.com"
  },
  {
    "id": "audio/voiceextra6",
    "name": "Audio / Voice Extra 6",
    "description": "Audio / Voice Extra 6 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra6.com"
  },
  {
    "id": "audio/voiceextra7",
    "name": "Audio / Voice Extra 7",
    "description": "Audio / Voice Extra 7 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra7.com"
  },
  {
    "id": "audio/voiceextra8",
    "name": "Audio / Voice Extra 8",
    "description": "Audio / Voice Extra 8 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra8.com"
  },
  {
    "id": "audio/voiceextra9",
    "name": "Audio / Voice Extra 9",
    "description": "Audio / Voice Extra 9 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra9.com"
  },
  {
    "id": "audio/voiceextra10",
    "name": "Audio / Voice Extra 10",
    "description": "Audio / Voice Extra 10 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra10.com"
  },
  {
    "id": "audio/voiceextra11",
    "name": "Audio / Voice Extra 11",
    "description": "Audio / Voice Extra 11 is a top-tier audio / voice solution.",
    "category": "Audio / Voice",
    "link": "https://audio/voiceextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=audio/voiceextra11.com"
  },
  {
    "id": "writingtoolsextra1",
    "name": "Writing Tools Extra 1",
    "description": "Writing Tools Extra 1 is a top-tier writing tools solution.",
    "category": "Writing Tools",
    "link": "https://writingtoolsextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=writingtoolsextra1.com"
  },
  {
    "id": "writingtoolsextra2",
    "name": "Writing Tools Extra 2",
    "description": "Writing Tools Extra 2 is a top-tier writing tools solution.",
    "category": "Writing Tools",
    "link": "https://writingtoolsextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=writingtoolsextra2.com"
  },
  {
    "id": "writingtoolsextra3",
    "name": "Writing Tools Extra 3",
    "description": "Writing Tools Extra 3 is a top-tier writing tools solution.",
    "category": "Writing Tools",
    "link": "https://writingtoolsextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=writingtoolsextra3.com"
  },
  {
    "id": "videotoolsextra1",
    "name": "Video Tools Extra 1",
    "description": "Video Tools Extra 1 is a top-tier video tools solution.",
    "category": "Video Tools",
    "link": "https://videotoolsextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=videotoolsextra1.com"
  },
  {
    "id": "aiassistantsextra1",
    "name": "AI Assistants Extra 1",
    "description": "AI Assistants Extra 1 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra1.com"
  },
  {
    "id": "aiassistantsextra2",
    "name": "AI Assistants Extra 2",
    "description": "AI Assistants Extra 2 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra2.com"
  },
  {
    "id": "aiassistantsextra3",
    "name": "AI Assistants Extra 3",
    "description": "AI Assistants Extra 3 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra3.com"
  },
  {
    "id": "aiassistantsextra4",
    "name": "AI Assistants Extra 4",
    "description": "AI Assistants Extra 4 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra4.com"
  },
  {
    "id": "aiassistantsextra5",
    "name": "AI Assistants Extra 5",
    "description": "AI Assistants Extra 5 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra5.com"
  },
  {
    "id": "aiassistantsextra6",
    "name": "AI Assistants Extra 6",
    "description": "AI Assistants Extra 6 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra6.com"
  },
  {
    "id": "aiassistantsextra7",
    "name": "AI Assistants Extra 7",
    "description": "AI Assistants Extra 7 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra7.com"
  },
  {
    "id": "aiassistantsextra8",
    "name": "AI Assistants Extra 8",
    "description": "AI Assistants Extra 8 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra8.com"
  },
  {
    "id": "aiassistantsextra9",
    "name": "AI Assistants Extra 9",
    "description": "AI Assistants Extra 9 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra9.com"
  },
  {
    "id": "aiassistantsextra10",
    "name": "AI Assistants Extra 10",
    "description": "AI Assistants Extra 10 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra10.com"
  },
  {
    "id": "aiassistantsextra11",
    "name": "AI Assistants Extra 11",
    "description": "AI Assistants Extra 11 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra11.com"
  },
  {
    "id": "aiassistantsextra12",
    "name": "AI Assistants Extra 12",
    "description": "AI Assistants Extra 12 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra12.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra12.com"
  },
  {
    "id": "aiassistantsextra13",
    "name": "AI Assistants Extra 13",
    "description": "AI Assistants Extra 13 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra13.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra13.com"
  },
  {
    "id": "aiassistantsextra14",
    "name": "AI Assistants Extra 14",
    "description": "AI Assistants Extra 14 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra14.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra14.com"
  },
  {
    "id": "aiassistantsextra15",
    "name": "AI Assistants Extra 15",
    "description": "AI Assistants Extra 15 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra15.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra15.com"
  },
  {
    "id": "aiassistantsextra16",
    "name": "AI Assistants Extra 16",
    "description": "AI Assistants Extra 16 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra16.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra16.com"
  },
  {
    "id": "aiassistantsextra17",
    "name": "AI Assistants Extra 17",
    "description": "AI Assistants Extra 17 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra17.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra17.com"
  },
  {
    "id": "aiassistantsextra18",
    "name": "AI Assistants Extra 18",
    "description": "AI Assistants Extra 18 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra18.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra18.com"
  },
  {
    "id": "aiassistantsextra19",
    "name": "AI Assistants Extra 19",
    "description": "AI Assistants Extra 19 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra19.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra19.com"
  },
  {
    "id": "aiassistantsextra20",
    "name": "AI Assistants Extra 20",
    "description": "AI Assistants Extra 20 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra20.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra20.com"
  },
  {
    "id": "aiassistantsextra21",
    "name": "AI Assistants Extra 21",
    "description": "AI Assistants Extra 21 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra21.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra21.com"
  },
  {
    "id": "aiassistantsextra22",
    "name": "AI Assistants Extra 22",
    "description": "AI Assistants Extra 22 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra22.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra22.com"
  },
  {
    "id": "aiassistantsextra23",
    "name": "AI Assistants Extra 23",
    "description": "AI Assistants Extra 23 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra23.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra23.com"
  },
  {
    "id": "aiassistantsextra24",
    "name": "AI Assistants Extra 24",
    "description": "AI Assistants Extra 24 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra24.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra24.com"
  },
  {
    "id": "aiassistantsextra25",
    "name": "AI Assistants Extra 25",
    "description": "AI Assistants Extra 25 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra25.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra25.com"
  },
  {
    "id": "aiassistantsextra26",
    "name": "AI Assistants Extra 26",
    "description": "AI Assistants Extra 26 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra26.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra26.com"
  },
  {
    "id": "aiassistantsextra27",
    "name": "AI Assistants Extra 27",
    "description": "AI Assistants Extra 27 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra27.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra27.com"
  },
  {
    "id": "aiassistantsextra28",
    "name": "AI Assistants Extra 28",
    "description": "AI Assistants Extra 28 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra28.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra28.com"
  },
  {
    "id": "aiassistantsextra29",
    "name": "AI Assistants Extra 29",
    "description": "AI Assistants Extra 29 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra29.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra29.com"
  },
  {
    "id": "aiassistantsextra30",
    "name": "AI Assistants Extra 30",
    "description": "AI Assistants Extra 30 is a top-tier ai assistants solution.",
    "category": "AI Assistants",
    "link": "https://aiassistantsextra30.com",
    "logo": "https://www.google.com/s2/favicons?domain=aiassistantsextra30.com"
  },
  {
    "id": "research/studyextra1",
    "name": "Research / Study Extra 1",
    "description": "Research / Study Extra 1 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra1.com"
  },
  {
    "id": "research/studyextra2",
    "name": "Research / Study Extra 2",
    "description": "Research / Study Extra 2 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra2.com"
  },
  {
    "id": "research/studyextra3",
    "name": "Research / Study Extra 3",
    "description": "Research / Study Extra 3 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra3.com"
  },
  {
    "id": "research/studyextra4",
    "name": "Research / Study Extra 4",
    "description": "Research / Study Extra 4 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra4.com"
  },
  {
    "id": "research/studyextra5",
    "name": "Research / Study Extra 5",
    "description": "Research / Study Extra 5 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra5.com"
  },
  {
    "id": "research/studyextra6",
    "name": "Research / Study Extra 6",
    "description": "Research / Study Extra 6 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra6.com"
  },
  {
    "id": "research/studyextra7",
    "name": "Research / Study Extra 7",
    "description": "Research / Study Extra 7 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra7.com"
  },
  {
    "id": "research/studyextra8",
    "name": "Research / Study Extra 8",
    "description": "Research / Study Extra 8 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra8.com"
  },
  {
    "id": "research/studyextra9",
    "name": "Research / Study Extra 9",
    "description": "Research / Study Extra 9 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra9.com"
  },
  {
    "id": "research/studyextra10",
    "name": "Research / Study Extra 10",
    "description": "Research / Study Extra 10 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra10.com"
  },
  {
    "id": "research/studyextra11",
    "name": "Research / Study Extra 11",
    "description": "Research / Study Extra 11 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra11.com"
  },
  {
    "id": "research/studyextra12",
    "name": "Research / Study Extra 12",
    "description": "Research / Study Extra 12 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra12.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra12.com"
  },
  {
    "id": "research/studyextra13",
    "name": "Research / Study Extra 13",
    "description": "Research / Study Extra 13 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra13.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra13.com"
  },
  {
    "id": "research/studyextra14",
    "name": "Research / Study Extra 14",
    "description": "Research / Study Extra 14 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra14.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra14.com"
  },
  {
    "id": "research/studyextra15",
    "name": "Research / Study Extra 15",
    "description": "Research / Study Extra 15 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra15.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra15.com"
  },
  {
    "id": "research/studyextra16",
    "name": "Research / Study Extra 16",
    "description": "Research / Study Extra 16 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra16.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra16.com"
  },
  {
    "id": "research/studyextra17",
    "name": "Research / Study Extra 17",
    "description": "Research / Study Extra 17 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra17.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra17.com"
  },
  {
    "id": "research/studyextra18",
    "name": "Research / Study Extra 18",
    "description": "Research / Study Extra 18 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra18.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra18.com"
  },
  {
    "id": "research/studyextra19",
    "name": "Research / Study Extra 19",
    "description": "Research / Study Extra 19 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra19.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra19.com"
  },
  {
    "id": "research/studyextra20",
    "name": "Research / Study Extra 20",
    "description": "Research / Study Extra 20 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra20.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra20.com"
  },
  {
    "id": "research/studyextra21",
    "name": "Research / Study Extra 21",
    "description": "Research / Study Extra 21 is a top-tier research / study solution.",
    "category": "Research / Study",
    "link": "https://research/studyextra21.com",
    "logo": "https://www.google.com/s2/favicons?domain=research/studyextra21.com"
  },
  {
    "id": "business/saasextra1",
    "name": "Business / SaaS Extra 1",
    "description": "Business / SaaS Extra 1 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra1.com"
  },
  {
    "id": "business/saasextra2",
    "name": "Business / SaaS Extra 2",
    "description": "Business / SaaS Extra 2 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra2.com"
  },
  {
    "id": "business/saasextra3",
    "name": "Business / SaaS Extra 3",
    "description": "Business / SaaS Extra 3 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra3.com"
  },
  {
    "id": "business/saasextra4",
    "name": "Business / SaaS Extra 4",
    "description": "Business / SaaS Extra 4 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra4.com"
  },
  {
    "id": "business/saasextra5",
    "name": "Business / SaaS Extra 5",
    "description": "Business / SaaS Extra 5 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra5.com"
  },
  {
    "id": "business/saasextra6",
    "name": "Business / SaaS Extra 6",
    "description": "Business / SaaS Extra 6 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra6.com"
  },
  {
    "id": "business/saasextra7",
    "name": "Business / SaaS Extra 7",
    "description": "Business / SaaS Extra 7 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra7.com"
  },
  {
    "id": "business/saasextra8",
    "name": "Business / SaaS Extra 8",
    "description": "Business / SaaS Extra 8 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra8.com"
  },
  {
    "id": "business/saasextra9",
    "name": "Business / SaaS Extra 9",
    "description": "Business / SaaS Extra 9 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra9.com"
  },
  {
    "id": "business/saasextra10",
    "name": "Business / SaaS Extra 10",
    "description": "Business / SaaS Extra 10 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra10.com"
  },
  {
    "id": "business/saasextra11",
    "name": "Business / SaaS Extra 11",
    "description": "Business / SaaS Extra 11 is a top-tier business / saas solution.",
    "category": "Business / SaaS",
    "link": "https://business/saasextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=business/saasextra11.com"
  },
  {
    "id": "productivityextra1",
    "name": "Productivity Extra 1",
    "description": "Productivity Extra 1 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra1.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra1.com"
  },
  {
    "id": "productivityextra2",
    "name": "Productivity Extra 2",
    "description": "Productivity Extra 2 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra2.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra2.com"
  },
  {
    "id": "productivityextra3",
    "name": "Productivity Extra 3",
    "description": "Productivity Extra 3 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra3.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra3.com"
  },
  {
    "id": "productivityextra4",
    "name": "Productivity Extra 4",
    "description": "Productivity Extra 4 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra4.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra4.com"
  },
  {
    "id": "productivityextra5",
    "name": "Productivity Extra 5",
    "description": "Productivity Extra 5 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra5.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra5.com"
  },
  {
    "id": "productivityextra6",
    "name": "Productivity Extra 6",
    "description": "Productivity Extra 6 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra6.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra6.com"
  },
  {
    "id": "productivityextra7",
    "name": "Productivity Extra 7",
    "description": "Productivity Extra 7 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra7.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra7.com"
  },
  {
    "id": "productivityextra8",
    "name": "Productivity Extra 8",
    "description": "Productivity Extra 8 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra8.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra8.com"
  },
  {
    "id": "productivityextra9",
    "name": "Productivity Extra 9",
    "description": "Productivity Extra 9 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra9.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra9.com"
  },
  {
    "id": "productivityextra10",
    "name": "Productivity Extra 10",
    "description": "Productivity Extra 10 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra10.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra10.com"
  },
  {
    "id": "productivityextra11",
    "name": "Productivity Extra 11",
    "description": "Productivity Extra 11 is a top-tier productivity solution.",
    "category": "Productivity",
    "link": "https://productivityextra11.com",
    "logo": "https://www.google.com/s2/favicons?domain=productivityextra11.com"
  },

];

let selectedAI: string | null = null;
let currentPage = 1;
const itemsPerPage = 12;
let filteredTools = aiTools;
let inactivityTimer: any = null;
const INACTIVITY_TIMEOUT = 45 * 60 * 1000; // 45 minutes in milliseconds

async function loadSubmissions() {
  try {
    const res = await fetch('/api/submissions/all');
    const submissions = await res.json();
    
    const extraTools: AITool[] = submissions.map((s: any) => {
      let hostname = 'link';
      try { hostname = new URL(s.url).hostname; } catch(e) {}
      
      return {
        id: `sub-${s._id}`,
        name: s.toolName,
        description: s.description,
        category: 'Community Submission',
        link: s.url,
        logo: `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`
      };
    });
    
    aiTools.push(...extraTools);
    // Refresh the grid
    const query = (document.getElementById('search-input') as HTMLInputElement)?.value.toLowerCase() || '';
    if (!query) {
      filteredTools = [...aiTools];
      renderTools();
      renderPagination();
    }
  } catch (err) {
    console.error('Failed to load community submissions', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadSubmissions(); // Load extra tools automatically
  const token = localStorage.getItem('token');
  if (token) {
    fetch('/api/user/data', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      // Populate User Profile
      if (data.fullName) {
        const initials = data.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2);
        const initialsEl = document.getElementById('user-initials');
        const dropdownName = document.getElementById('dropdown-user-name');
        const dropdownEmail = document.getElementById('dropdown-user-email');
        
        if (initialsEl) initialsEl.textContent = initials;
        if (dropdownName) dropdownName.textContent = data.fullName;
        if (dropdownEmail) dropdownEmail.textContent = data.email;
      }

      if (data.favorites) localStorage.setItem('ai_hubs_favorites', JSON.stringify(data.favorites));
      if (data.recentlyViewed) localStorage.setItem('ai_hubs_recent', JSON.stringify(data.recentlyViewed));
      
      // Populate Settings Toggles
      const emailToggle = document.getElementById('email-notifications-toggle') as HTMLInputElement;
      const compactToggle = document.getElementById('compact-view-toggle') as HTMLInputElement;
      
      if (emailToggle) emailToggle.checked = data.emailNotifications !== false; // Default true
      if (compactToggle) {
        compactToggle.checked = !!data.compactView;
        if (data.compactView) document.getElementById('ai-grid')?.classList.add('compact-view');
      }

      renderTools();
      renderPagination();
    })
    .catch(err => {
      console.error('Failed to load user data', err);
      renderTools();
      renderPagination();
    });
  } else {
    renderTools();
    renderPagination();
  }

  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  if (searchInput) searchInput.addEventListener('input', handleSearch);
  
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.addEventListener('click', showTools);

  const clearChatBtn = document.getElementById('clear-chat-btn');
  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to clear your chat history for this tool?')) return;
      
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await fetch(`/api/chat/${selectedAI}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.ok) {
          const messagesDiv = document.getElementById('chat-messages');
          if (messagesDiv) {
            messagesDiv.innerHTML = '';
            const tool = aiTools.find(t => t.id === selectedAI);
            addMessage('ai', `History cleared. How can I help you today?`);
          }
          showToast('Chat history cleared', 'info');
        }
      } catch (err) {
        console.error('Clear chat error:', err);
      }
    });
  }

  const homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const sInput = document.getElementById('search-input') as HTMLInputElement;
      if (sInput) sInput.value = '';
      const allToolsItem = document.querySelector('.category-item[data-category="All"]') as HTMLElement;
      if (allToolsItem) allToolsItem.click();
      showTools();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      let overlay = document.getElementById('sidebar-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'sidebar-overlay';
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => {
          sidebar.classList.remove('active');
          overlay?.classList.remove('show');
        });
      }
      setTimeout(() => overlay?.classList.toggle('show'), 10);
    });
  }

  // Category filtering logic
  const sidebarItems = document.querySelectorAll('.category-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        sidebar?.classList.remove('active');
        document.getElementById('sidebar-overlay')?.classList.remove('show');
      }

      const h1 = document.querySelector('.dashboard-hero h1');
      const cat = (item as HTMLElement).dataset.category;
      if (h1) {
        h1.innerHTML = (!cat || cat === 'All') 
          ? 'Unlock the Power of <span class="highlight">Artificial Intelligence</span>'
          : `Explore <span class="highlight">${cat}</span> Tools`;
      }
      sidebarItems.forEach(i => (i as HTMLElement).classList.remove('active'));
      (item as HTMLElement).classList.add('active');
      
      const category = (item as HTMLElement).dataset.category;

      // Update Hero Title
      const heroH1 = document.querySelector('.dashboard-hero h1');
      if (heroH1) {
        heroH1.innerHTML = (!category || category === 'All') 
          ? 'Unlock the Power of <span class="highlight">Artificial Intelligence</span>'
          : `Explore <span class="highlight">${category}</span> Tools`;
      }

      if (category) {
        (window as any).showTools();
        filterByCategory(category);
      } else if (item.id === 'show-favorites') {
        (window as any).showTools();
        showFavorites();
      } else if (item.id === 'show-recent') {
        (window as any).showTools();
        showRecentlyViewed();
      }
    });
  });

  // Top Filter Buttons Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = (btn as HTMLElement).dataset.category;
      if (category) filterByCategory(category);
    });
  });

  // Generic Modal Logic
  const allModals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-modal');

  const closeAllModals = () => {
    allModals.forEach(modal => (modal as HTMLElement).style.display = 'none');
  };

  closeBtns.forEach(btn => {
    (btn as HTMLElement).onclick = closeAllModals;
  });

  window.onclick = (event) => {
    allModals.forEach(modal => {
      if (event.target == modal) (modal as HTMLElement).style.display = 'none';
    });
  };

  const submitBtn = document.getElementById('submit-tools-btn');
  const aboutBtn = document.getElementById('about-btn');

  if (submitBtn) {
    submitBtn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const modal = document.getElementById('submit-modal');
      if (modal) modal.style.display = 'flex';
    });
  }

  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const modal = document.getElementById('about-modal');
      if (modal) modal.style.display = 'flex';
    });
  }

  // Profile Dropdown Logic
  const profileTrigger = document.getElementById('profile-trigger');
  const profileDropdown = document.getElementById('profile-dropdown');
  
  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = profileDropdown.style.display === 'flex';
      profileDropdown.style.display = isVisible ? 'none' : 'flex';
    });

    document.addEventListener('click', () => {
      profileDropdown.style.display = 'none';
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.href = 'landing.html';
    });
  }

  // Profile Modal Logic
  const profileLink = document.getElementById('profile-link');
  const profileModal = document.getElementById('profile-modal');
  if (profileLink && profileModal) {
    profileLink.addEventListener('click', (e: Event) => {
      e.preventDefault();
      profileModal.style.display = 'flex';
      // Auto-close dropdown
      if (profileDropdown) profileDropdown.style.display = 'none';
      
      // Update values in modal
      const name = document.getElementById('dropdown-user-name')?.textContent || '';
      const email = document.getElementById('dropdown-user-email')?.textContent || '';
      const initials = document.getElementById('user-initials')?.textContent || '?';
      
      const modalName = document.getElementById('profile-name-val');
      const modalEmail = document.getElementById('profile-email-val');
      const modalInitials = document.getElementById('profile-initials-large');
      
      if (modalName) modalName.textContent = name;
      if (modalEmail) modalEmail.textContent = email;
      if (modalInitials) modalInitials.textContent = initials;
      
      // Reset edit view
      const editForm = document.getElementById('profile-edit-form');
      const profileView = document.getElementById('profile-view');
      const actions = document.getElementById('profile-actions');
      if (editForm) editForm.style.display = 'none';
      if (profileView) profileView.style.display = 'grid';
      if (actions) actions.style.display = 'block';
    });
  }

  const settingsLink = document.getElementById('settings-link');
  if (settingsLink) {
    settingsLink.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const modal = document.getElementById('settings-modal');
      if (modal) modal.style.display = 'flex';
      // Auto-close dropdown
      if (profileDropdown) profileDropdown.style.display = 'none';
    });
  }

  // Edit Profile Logic
  const enableEditBtn = document.getElementById('enable-edit-btn');
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  const profileEditForm = document.getElementById('profile-edit-form') as HTMLFormElement;
  const profileView = document.getElementById('profile-view');
  const profileActions = document.getElementById('profile-actions');

  if (enableEditBtn && profileEditForm && profileView && profileActions) {
    enableEditBtn.addEventListener('click', () => {
      const currentName = document.getElementById('profile-name-val')?.textContent || '';
      (document.getElementById('edit-full-name') as HTMLInputElement).value = currentName;
      
      profileView.style.display = 'none';
      profileActions.style.display = 'none';
      profileEditForm.style.display = 'block';
    });
    
    if (cancelEditBtn) {
      cancelEditBtn.addEventListener('click', () => {
        profileView.style.display = 'grid';
        profileActions.style.display = 'block';
        profileEditForm.style.display = 'none';
      });
    }

    profileEditForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newName = (document.getElementById('edit-full-name') as HTMLInputElement).value;
      const token = localStorage.getItem('token');
      
      try {
        const response = await fetch('/api/user/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ fullName: newName })
        });
        
        if (response.ok) {
          const data = await response.json();
          showToast('Profile updated!', 'info');
          
          // Update all name UI elements
          const nameEls = [
            document.getElementById('dropdown-user-name'),
            document.getElementById('profile-name-val')
          ];
          nameEls.forEach(el => { if(el) el.textContent = data.fullName; });
          
          // Update initials
          const initials = data.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase();
          const initialEls = [
            document.getElementById('user-initials'),
            document.getElementById('profile-initials-large')
          ];
          initialEls.forEach(el => { if(el) el.textContent = initials; });

          // Return to view
          profileView.style.display = 'grid';
          profileActions.style.display = 'block';
          profileEditForm.style.display = 'none';
        } else {
          showToast('Failed to update profile', 'error');
        }
      } catch (error) {
        console.error('Update profile error:', error);
        showToast('Server error', 'error');
      }
    });
  }

  // Settings Modal Logic (Placeholder for Dark Mode only since it is local)
  const darkModeToggle = document.getElementById('dark-mode-toggle') as HTMLInputElement;

  // Dark Mode Logic (LocalStorage only for instant theme application)
  if (darkModeToggle) {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    darkModeToggle.checked = isDark;
    if (isDark) document.body.classList.add('dark-mode');

    darkModeToggle.addEventListener('change', () => {
      const active = darkModeToggle.checked;
      document.body.classList.toggle('dark-mode', active);
      localStorage.setItem('dark-mode', active.toString());
      showToast(active ? 'Dark Mode On 🌙' : 'Light Mode On ☀️', 'info');
    });
  }

  // Billing (Coming Soon)
  const billingLink = document.getElementById('billing-link');
  if (billingLink) {
    billingLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('This feature is coming soon! 🚀', 'info');
    });
  }

  const submitForm = document.getElementById('submit-tool-form') as HTMLFormElement;
  if (submitForm) {
    submitForm.onsubmit = async (e) => {
      e.preventDefault();
      
      const toolName = (document.getElementById('tool-name') as HTMLInputElement).value;
      const url = (document.getElementById('tool-url') as HTMLInputElement).value;
      const description = (document.getElementById('tool-desc') as HTMLTextAreaElement).value;
      
      const token = localStorage.getItem('token');
      if (!token) {
        showToast('You must be logged in to submit tools!', 'error');
        return;
      }

      try {
        const response = await fetch('/api/submissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ toolName, url, description }),
        });

        const data = await response.json();
        
        if (response.ok) {
          showToast(data.message || 'Submission successful!', 'info');
          const modal = document.getElementById('submit-modal');
          if (modal) modal.style.display = 'none';
          submitForm.reset();
        } else {
          showToast(data.error || 'Submission failed', 'error');
        }
      } catch (error) {
        console.error('Submission error:', error);
        showToast('Error connecting to server', 'error');
      }
    };
  }
});

function filterByCategory(category: string) {
  if (category.toLowerCase() === 'all') {
    filteredTools = aiTools;
  } else {
    filteredTools = aiTools.filter(tool => tool.category.toLowerCase().includes(category.toLowerCase()));
  }
  currentPage = 1;
  renderTools();
  renderPagination();
}

function showFavorites() {
  const favorites = JSON.parse(localStorage.getItem('ai_hubs_favorites') || '[]');
  filteredTools = aiTools.filter(tool => favorites.includes(tool.id));
  currentPage = 1;
  renderTools();
  renderPagination();
  if (filteredTools.length === 0) {
    const grid = document.getElementById('ai-grid');
    if (grid) grid.innerHTML = '<div class="no-results">No favorites saved yet. Click the Ã¢Â­Â on any tool!</div>';
  }
}

function showRecentlyViewed() {
  const recentIds = JSON.parse(localStorage.getItem('ai_hubs_recent') || '[]');
  filteredTools = aiTools.filter(tool => recentIds.includes(tool.id));
  // Sort by the order in recentIds (newest first)
  filteredTools.sort((a, b) => recentIds.indexOf(b.id) - recentIds.indexOf(a.id));
  
  currentPage = 1;
  renderTools();
  renderPagination();
  if (filteredTools.length === 0) {
    const grid = document.getElementById('ai-grid');
    if (grid) grid.innerHTML = '<div class="no-results">No recently viewed tools yet. Start exploring!</div>';
  }
}

function addToRecentlyViewed(toolId: string) {
  let recentIds: string[] = JSON.parse(localStorage.getItem('ai_hubs_recent') || '[]');
  // Remove if already exists to move to top
  recentIds = recentIds.filter(id => id !== toolId);
  recentIds.push(toolId);
  // Keep only last 20
  if (recentIds.length > 20) recentIds.shift();
  localStorage.setItem('ai_hubs_recent', JSON.stringify(recentIds));

  const token = localStorage.getItem('token');
  if (!token) return; // Silent return for guest users

  fetch('/api/user/recent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ toolId })
  })
  .then(res => res.json())
  .then(data => {
    if (data.recentlyViewed) {
      localStorage.setItem('ai_hubs_recent', JSON.stringify(data.recentlyViewed));
    }
  })
  .catch(err => console.error('Failed to update recent history', err));
}

(window as any).toggleFavorite = function(e: Event, toolId: string) {
  e.stopPropagation();
  let favorites: string[] = JSON.parse(localStorage.getItem('ai_hubs_favorites') || '[]');
  const isAdding = !favorites.includes(toolId);
  
  if (isAdding) {
    favorites.push(toolId);
    showToast('Added to Favorites ⭐', 'info');
  } else {
    favorites = favorites.filter(id => id !== toolId);
    showToast('Removed from Favorites', 'info');
  }
  
  // Optimistic UI update for everyone (guests and logged-in users)
  localStorage.setItem('ai_hubs_favorites', JSON.stringify(favorites));
  renderTools();

  // If logged in, sync with backend
  const token = localStorage.getItem('token');
  if (token) {
    fetch('/api/user/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ toolId, action: isAdding ? 'add' : 'remove' })
    })
    .then(res => res.json())
    .then(data => {
      if (data.favorites) {
        localStorage.setItem('ai_hubs_favorites', JSON.stringify(data.favorites));
      }
    })
    .catch(err => {
      console.error('Failed to update favorites', err);
      // We don't need to show an error toast here since it's already saved locally
    });
  }
};

function renderTools() {
  const grid = document.getElementById('ai-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Show Skeletons if still loading tools
  if (aiTools.length === 0) {
    for (let i = 0; i < 6; i++) {
      grid.innerHTML += `
        <div class="skeleton-card">
          <div class="skeleton-logo skeleton"></div>
          <div class="skeleton-title skeleton"></div>
          <div class="skeleton-text skeleton"></div>
          <div class="skeleton-text skeleton" style="width: 80%"></div>
          <div class="skeleton-tag skeleton"></div>
        </div>
      `;
    }
    return;
  }

  const favorites = JSON.parse(localStorage.getItem('ai_hubs_favorites') || '[]');
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const toolsToShow = filteredTools.slice(startIndex, endIndex);

  // Show Empty State if no tools match
  if (toolsToShow.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="ph ph-magnifying-glass"></i>
        <h3>No tools found</h3>
        <p>We couldn't find any tools matching your search or category.</p>
        <button class="btn-primary" onclick="resetSearch()">View All Tools</button>
      </div>
    `;
    return;
  }

  toolsToShow.forEach(tool => {
    const isFavorite = favorites.includes(tool.id);
    const card = document.createElement('div');
    card.className = 'ai-card';
    card.onclick = () => selectAI(tool.id);
    const highResLogo = tool.logo.includes('?') ? `${tool.logo}&sz=128` : `${tool.logo}?sz=128`;
    card.innerHTML = `
      <div class="card-header">
        <img src="${highResLogo}" alt="${tool.name} logo" class="ai-logo" 
             onerror="this.src='https://www.gstatic.com/lamda/images/favicon_v2_71731f242707730e84.png'">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(event, '${tool.id}')">
          ${isFavorite ? '⭐' : '☆'}
        </button>
      </div>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="category-tag">${tool.category}</div>
      <div class="links">
        <a href="${tool.link}" target="_blank" onclick="event.stopPropagation()" class="site-link">Official Site ↗</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  if (totalPages <= 1) return;

  const maxVisiblePages = window.innerWidth <= 768 ? 3 : 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Previous Button
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '<i class="ph ph-caret-left"></i>';
  prevBtn.className = 'pagination-nav';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => changePage(currentPage - 1);
  pagination.appendChild(prevBtn);

  // First Page
  if (startPage > 1) {
    const firstBtn = document.createElement('button');
    firstBtn.textContent = '1';
    firstBtn.onclick = () => changePage(1);
    pagination.appendChild(firstBtn);
    if (startPage > 2) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.className = 'pagination-dots';
      pagination.appendChild(dots);
    }
  }

  // Page Numbers
  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement('button');
    button.textContent = i.toString();
    button.onclick = () => changePage(i);
    if (i === currentPage) button.classList.add('active');
    pagination.appendChild(button);
  }

  // Last Page
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.className = 'pagination-dots';
      pagination.appendChild(dots);
    }
    const lastBtn = document.createElement('button');
    lastBtn.textContent = totalPages.toString();
    lastBtn.onclick = () => changePage(totalPages);
    pagination.appendChild(lastBtn);
  }

  // Next Button
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '<i class="ph ph-caret-right"></i>';
  nextBtn.className = 'pagination-nav';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => changePage(currentPage + 1);
  pagination.appendChild(nextBtn);
}

function handleSearch() {
  const query = (document.getElementById('search-input') as HTMLInputElement).value.toLowerCase();
  filteredTools = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderTools();
  renderPagination();
}

function changePage(page: number) {
  currentPage = page;
  renderTools();
  renderPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAI(toolId: string) {
  selectedAI = toolId;
  addToRecentlyViewed(toolId);
  const tool = aiTools.find(t => t.id === toolId);
  
  const nameEl = document.getElementById('selected-ai-name');
  if (nameEl) nameEl.textContent = tool ? tool.name : 'AI Assistant';
  
  const logoEl = document.getElementById('selected-ai-logo') as HTMLImageElement;
  if (logoEl) {
    logoEl.src = tool ? tool.logo : '';
    logoEl.onerror = () => {
      logoEl.src = 'https://www.gstatic.com/lamda/images/favicon_v2_71731f242707730e84.png';
    };
  }
  
  const grid = document.getElementById('ai-grid');
  if (grid) grid.style.display = 'none';
  
  const pagination = document.getElementById('pagination');
  if (pagination) pagination.style.display = 'none';
  
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  if (sidebar) sidebar.style.display = 'none';
  
  const chatContainer = document.getElementById('chat-container');
  if (chatContainer) chatContainer.style.display = 'flex';
  
  const messagesDiv = document.getElementById('chat-messages');
  if (messagesDiv) messagesDiv.innerHTML = '';
  
  // Load History
  const token = localStorage.getItem('token');
  if (token) {
    fetch(`/api/chat/history/${toolId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      if (data.messages && data.messages.length > 0) {
        data.messages.forEach((msg: any) => addMessage(msg.sender, msg.text, false));
      } else {
        // Initial message from AI if no history
        addMessage('ai', `Hello! I am your ${tool ? tool.name : 'AI'} assistant. How can I help you today?`);
      }
    });
  } else {
    addMessage('ai', `Hello! I am your ${tool ? tool.name : 'AI'} assistant. How can I help you today?`);
  }
  
  startInactivityTimer();
}

function showTools() {
  const grid = document.getElementById('ai-grid');
  if (grid) grid.style.display = 'grid';
  
  const pagination = document.getElementById('pagination');
  if (pagination) pagination.style.display = 'flex';
  
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  if (sidebar) sidebar.style.display = 'block';
  
  const chatContainer = document.getElementById('chat-container');
  if (chatContainer) chatContainer.style.display = 'none';
}

const sendBtn = document.getElementById('send-btn');
if (sendBtn) sendBtn.addEventListener('click', sendMessage);

const messageInput = document.getElementById('message-input');
if (messageInput) {
  messageInput.addEventListener('keypress', (e: any) => {
    if (e.key === 'Enter') sendMessage();
  });
}

let attachedImageBase64: string | null = null;

(window as any).removeImage = function() {
  attachedImageBase64 = null;
  const previewContainer = document.getElementById('image-preview-container');
  const uploadInput = document.getElementById('image-upload') as HTMLInputElement;
  if (previewContainer) previewContainer.style.display = 'none';
  if (uploadInput) uploadInput.value = '';
};

document.addEventListener('DOMContentLoaded', () => {
  const imageUpload = document.getElementById('image-upload') as HTMLInputElement;
  if (imageUpload) {
    imageUpload.addEventListener('change', function() {
      const file = this.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          attachedImageBase64 = e.target?.result as string;
          const previewContainer = document.getElementById('image-preview-container');
          const previewImage = document.getElementById('image-preview') as HTMLImageElement;
          if (previewContainer && previewImage) {
            previewImage.src = attachedImageBase64;
            previewContainer.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

async function sendMessage() {
  const input = document.getElementById('message-input') as HTMLInputElement;
  const message = input.value.trim();
  if (!message && !attachedImageBase64) return;

  const displayMessage = attachedImageBase64 
    ? `<img src="${attachedImageBase64}" style="max-width: 100%; border-radius: 8px; margin-bottom: 8px;"><br>${message}`
    : message;

  addMessage('user', displayMessage);
  input.value = '';
  
  const payload = { 
    message: message || "Analyze this image.", 
    image: attachedImageBase64 
  };
  
  (window as any).removeImage(); // clear preview

  const token = localStorage.getItem('token');
  
  // Typing Indicator
  const messagesDiv = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message ai typing';
  typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
  if (messagesDiv) {
    messagesDiv.appendChild(typingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  try {
    const response = await fetch(`/api/${selectedAI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });
    
    if (typingDiv.parentNode) typingDiv.parentNode.removeChild(typingDiv);
    
    const data = await response.json();
    if (response.ok) {
      addMessage('ai', data.response);
    } else {
      addMessage('ai', data.error || data.response || 'Sorry, there was an error processing your request.');
    }
  } catch (error) {
    if (typingDiv.parentNode) typingDiv.parentNode.removeChild(typingDiv);
    console.error('Error:', error);
    addMessage('ai', 'Sorry, there was an error connecting to the server.');
  }
}

function addMessage(sender: 'user' | 'ai', text: string, animate: boolean = true) {
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender} ${animate ? 'new' : ''}`;
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  messageDiv.innerHTML = `
    <div class="message-content">
      ${text}
      <div class="message-meta">
        <span class="message-time">${time}</span>
        ${sender === 'ai' ? `
          <button class="copy-msg" title="Copy" onclick="copyToClipboard('${text.replace(/'/g, "\\'")}')"><i class="ph ph-copy"></i></button>
          <button class="voice-toggle" title="Listen" onclick="toggleVoice(this, '${text.replace(/'/g, "\\'").replace(/\n/g, " ")}')"><i class="ph ph-speaker-high"></i></button>
        ` : ''}
      </div>
    </div>
  `;
  
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  resetInactivityTimer();
}

(window as any).copyToClipboard = function(text: string) {
  navigator.clipboard.writeText(text);
  showToast('Response copied! 📋', 'info');
};

function startInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    addMessage('ai', 'Session timed out due to inactivity. Please start a new conversation.');
    showTools();
  }, INACTIVITY_TIMEOUT);
}

function resetInactivityTimer() {
  if (inactivityTimer) {
    clearTimeout(inactivityTimer);
    startInactivityTimer();
  }
}

// Global function for Save Settings button
(window as any).saveUserSettings = async function() {
  const emailToggle = document.getElementById('email-notifications-toggle') as HTMLInputElement;
  const compactToggle = document.getElementById('compact-view-toggle') as HTMLInputElement;
  const token = localStorage.getItem('token');

  const settings = {
    emailNotifications: emailToggle ? emailToggle.checked : true,
    compactView: compactToggle ? compactToggle.checked : false
  };

  // Immediate UI update for Compact View
  if (settings.compactView) {
    document.getElementById('ai-grid')?.classList.add('compact-view');
  } else {
    document.getElementById('ai-grid')?.classList.remove('compact-view');
  }

  if (!token) {
    showToast('Settings saved locally! Log in to sync across devices.', 'info');
    localStorage.setItem('compact-view', settings.compactView.toString());
    document.getElementById('settings-modal')!.style.display = 'none';
    return;
  }

  try {
    const res = await fetch('/api/user/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(settings)
    });

    if (res.ok) {
      showToast('Settings saved successfully! ✅', 'info');
      document.getElementById('settings-modal')!.style.display = 'none';
    } else {
      showToast('Failed to save settings to server.', 'error');
    }
  } catch (err) {
    console.error('Settings save error:', err);
  }
};

// AI Model Arena Functions
(window as any).openArena = function() {
  const grid = document.getElementById('ai-grid');
  const pagination = document.getElementById('pagination');
  const chatContainer = document.getElementById('chat-container');
  const arenaContainer = document.getElementById('arena-container');
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  const navCenter = document.querySelector('.nav-center') as HTMLElement;

  if (grid) grid.style.display = 'none';
  if (pagination) pagination.style.display = 'none';
  if (chatContainer) chatContainer.style.display = 'none';
  if (sidebar) sidebar.style.display = 'none';
  if (navCenter) navCenter.style.display = 'none'; 
  if (arenaContainer) arenaContainer.style.display = 'flex';
};

(window as any).closeArena = function() {
  const grid = document.getElementById('ai-grid');
  const pagination = document.getElementById('pagination');
  const arenaContainer = document.getElementById('arena-container');
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  const navCenter = document.querySelector('.nav-center') as HTMLElement;

  if (grid) grid.style.display = 'grid';
  if (pagination) pagination.style.display = 'flex';
  if (sidebar) sidebar.style.display = 'flex';
  if (navCenter) navCenter.style.display = 'flex';
  if (arenaContainer) arenaContainer.style.display = 'none';
};

async function executeArena() {
  const prompt = (document.getElementById('arena-input') as HTMLTextAreaElement).value;
  if (!prompt) return;

  const resChatGPT = document.getElementById('res-chatgpt');
  const resGemini = document.getElementById('res-gemini');
  const resGroq = document.getElementById('res-groq');
  const resFree = document.getElementById('res-free');

  const setThinking = (elId: string, columnId: string) => {
    const el = document.getElementById(elId);
    const col = document.getElementById(columnId);
    if (el) el.innerHTML = `
      <div class="processing-state">
        <div class="hsg-spinner"></div>
        <span class="processing-text">Generating response...</span>
      </div>
    `;
    if (col) col.classList.add('is-processing');
  };

  setThinking('res-chatgpt', 'arena-chatgpt');
  setThinking('res-gemini', 'arena-gemini');
  setThinking('res-groq', 'arena-groq');
  setThinking('res-free', 'arena-free');

  const token = localStorage.getItem('token');
  if (!token) {
    showToast('Please login to use the AI Arena', 'error');
    return;
  }

  const fetchModel = async (endpoint: string, element: HTMLElement | null) => {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: prompt })
      });
      const data = await res.json();
      if (element) {
        const col = element.closest('.arena-column');
        if (col) col.classList.remove('is-processing');

        element.innerHTML = `
          <div class="arena-response-content">${data.response || data.error || 'Error fetching response'}</div>
          <div class="arena-actions" style="display: flex; justify-content: flex-end; margin-top: 10px; gap: 8px;">
            <button class="voice-toggle" title="Listen" onclick="toggleVoice(this, \`${(data.response || '').replace(/`/g, '\\`').replace(/\n/g, ' ')}\`)">
              <i class="ph ph-speaker-high"></i>
            </button>
          </div>
        `;
      }
    } catch (err) {
      if (element) {
        const col = element.closest('.arena-column');
        if (col) col.classList.remove('is-processing');
        element.textContent = 'Failed to connect to API';
      }
    }
  };

  await Promise.all([
    fetchModel('/api/chatgpt', resChatGPT),
    fetchModel('/api/gemini', resGemini),
    fetchModel('/api/groq', resGroq),
    fetchModel('/api/blackbox', resFree)
  ]);
  
  // Show export buttons after execution
  const pdfBtn = document.getElementById('export-pdf-btn');
  const mdBtn = document.getElementById('export-md-btn');
  if (pdfBtn) pdfBtn.style.display = 'inline-flex';
  if (mdBtn) mdBtn.style.display = 'inline-flex';
}

(window as any).exportArenaPDF = function() {
  const element = document.querySelector('.arena-grid');
  const opt = {
    margin:       0.5,
    filename:     `AI_Arena_Results_${new Date().toISOString().slice(0,10)}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
  };
  
  showToast('Generating PDF Report...', 'info');
  (window as any).html2pdf().set(opt).from(element).save().then(() => {
    showToast('PDF Exported Successfully!', 'success');
  });
};

(window as any).exportArenaMarkdown = function() {
  const prompt = (document.getElementById('arena-input') as HTMLTextAreaElement).value;
  
  const getModelText = (id: string) => {
    const el = document.getElementById(id);
    const contentEl = el?.querySelector('.arena-response-content');
    return contentEl ? contentEl.textContent?.trim() : 'No response';
  };

  const markdown = `# AI Arena Report
**Date:** ${new Date().toLocaleDateString()}
**Prompt:** ${prompt}

## ChatGPT
${getModelText('res-chatgpt')}

## Gemini
${getModelText('res-gemini')}

## Groq (Llama 3)
${getModelText('res-groq')}

## Free Assistant
${getModelText('res-free')}
`;

  navigator.clipboard.writeText(markdown).then(() => {
    showToast('Markdown copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy Markdown', 'error');
  });
};

// ============================================================
// CUSTOM AI PERSONAS
// ============================================================

(window as any).openPersonasPanel = async function() {
  const panel = document.getElementById('personas-panel');
  if (panel) panel.style.display = 'flex';
  await renderPersonasList();
};

async function renderPersonasList() {
  const list = document.getElementById('personas-list');
  if (!list) return;
  const token = localStorage.getItem('token');
  if (!token) {
    list.innerHTML = `<div style="color:var(--text-secondary); text-align:center;">Please log in to manage personas.</div>`;
    return;
  }
  try {
    const res = await fetch('/api/personas', { headers: { 'Authorization': `Bearer ${token}` } });
    const data = await res.json();
    if (!data.personas || data.personas.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding:30px; color:var(--text-secondary);">
          <div style="font-size:3rem; margin-bottom:10px;">🤖</div>
          <p>No personas yet! Create one to get started.</p>
          <button class="btn-primary" style="margin-top:15px;" onclick="document.getElementById('personas-panel').style.display='none'; document.getElementById('persona-modal').style.display='flex';"><i class="ph ph-plus"></i> Create My First Persona</button>
        </div>`;
      return;
    }
    list.innerHTML = data.personas.map((p: any) => `
      <div class="glass" style="padding:16px 20px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; gap:12px;">
        <div style="display:flex; align-items:center; gap:14px; flex:1; min-width:0;">
          <div style="font-size:2rem; flex-shrink:0;">${p.emoji}</div>
          <div style="min-width:0;">
            <div style="font-weight:600; color:white; font-size:1rem; truncate;">${p.name}</div>
            <div style="font-size:0.82rem; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:300px;">${p.systemPrompt}</div>
          </div>
        </div>
        <div style="display:flex; gap:8px; flex-shrink:0;">
          <button class="btn-primary btn-sm" onclick="selectPersona('${p._id}', '${p.name.replace(/'/g, "\\'")}', '${p.emoji}')">
            <i class="ph ph-chat-circle"></i> Chat
          </button>
          <button class="btn-secondary btn-sm" style="color:#ef4444; border-color:#ef4444;" onclick="deletePersona('${p._id}')">
            <i class="ph ph-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  } catch(e) {
    list.innerHTML = `<div style="color:#ef4444; text-align:center;">Failed to load personas.</div>`;
  }
}

(window as any).savePersona = async function() {
  const name = (document.getElementById('persona-name') as HTMLInputElement)?.value?.trim();
  const emoji = (document.getElementById('persona-emoji') as HTMLInputElement)?.value?.trim() || '🤖';
  const systemPrompt = (document.getElementById('persona-prompt') as HTMLTextAreaElement)?.value?.trim();
  if (!name || !systemPrompt) { showToast('Please fill in the name and system prompt.', 'error'); return; }
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('/api/personas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ name, emoji, systemPrompt })
    });
    const data = await res.json();
    if (!res.ok) { showToast(data.error || 'Failed to save persona', 'error'); return; }
    showToast(`Persona "${name}" created!`, 'success');
    document.getElementById('persona-modal')!.style.display = 'none';
    (document.getElementById('persona-name') as HTMLInputElement).value = '';
    (document.getElementById('persona-prompt') as HTMLTextAreaElement).value = '';
    (document.getElementById('persona-emoji') as HTMLInputElement).value = '🤖';
  } catch(e) { showToast('Connection error', 'error'); }
};

(window as any).deletePersona = async function(id: string) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`/api/personas/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
    showToast('Persona deleted.', 'info');
    await renderPersonasList();
  } catch(e) { showToast('Failed to delete persona', 'error'); }
};

(window as any).selectPersona = function(id: string, name: string, emoji: string) {
  // Route chat messages to the persona endpoint
  selectedAI = `personas/${id}/chat` as any;
  document.getElementById('personas-panel')!.style.display = 'none';

  // Update the chat header
  const nameEl = document.getElementById('selected-ai-name');
  if (nameEl) nameEl.textContent = `${emoji} ${name}`;

  // Show chat interface
  const grid = document.getElementById('ai-grid');
  const pagination = document.getElementById('pagination');
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  const chatContainer = document.getElementById('chat-container');
  if (grid) grid.style.display = 'none';
  if (pagination) pagination.style.display = 'none';
  if (sidebar) sidebar.style.display = 'none';
  if (chatContainer) chatContainer.style.display = 'flex';

  const messagesDiv = document.getElementById('chat-messages');
  if (messagesDiv) messagesDiv.innerHTML = '';
  addMessage('ai', `Hello! I am ${emoji} ${name}. How can I help you today?`);
  startInactivityTimer();
};

// Event Listeners
window.addEventListener('load', () => {
  const p = document.getElementById('preloader');
  if (p) setTimeout(() => p.classList.add('fade-out'), 1000);
});
document.addEventListener('DOMContentLoaded', () => {
  const arenaSendBtn = document.getElementById('arena-send-btn');
  if (arenaSendBtn) arenaSendBtn.addEventListener('click', executeArena);
});

(window as any).setArenaPrompt = (prompt: string) => {
  const input = document.getElementById('arena-input') as HTMLTextAreaElement;
  if (input) {
    input.value = prompt;
    input.focus();
  }
};

(window as any).resetSearch = function() {
  const input = document.getElementById('search-input') as HTMLInputElement;
  if (input) input.value = '';
  (window as any).handleSearch();
};

// Global TTS State
let currentUtterance: SpeechSynthesisUtterance | null = null;

(window as any).stopSpeaking = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.voice-toggle i').forEach(icon => {
      icon.className = 'ph ph-speaker-high';
    });
    document.querySelectorAll('.voice-toggle').forEach(btn => {
      btn.classList.remove('speaking-pulse');
    });
  }
};

(window as any).toggleVoice = (btn: HTMLElement, text: string) => {
  const icon = btn.querySelector('i');
  
  // If already speaking THIS message, stop it
  if (window.speechSynthesis.speaking && btn.classList.contains('speaking-pulse')) {
    (window as any).stopSpeaking();
    return;
  }

  // Stop any other message first
  (window as any).stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.1;
  
  const voices = window.speechSynthesis.getVoices();
  const premiumVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural'))) || voices[0];
  if (premiumVoice) utterance.voice = premiumVoice;

  utterance.onstart = () => {
    if (icon) icon.className = 'ph ph-stop';
    btn.classList.add('speaking-pulse');
  };

  utterance.onend = () => {
    if (icon) icon.className = 'ph ph-speaker-high';
    btn.classList.remove('speaking-pulse');
  };

  utterance.onerror = () => {
    if (icon) icon.className = 'ph ph-speaker-high';
    btn.classList.remove('speaking-pulse');
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
};

// Voice-to-Text (Speech Recognition) Logic
const initVoiceRecognition = (btnId: string, inputId: string, onComplete?: () => void) => {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId) as HTMLInputElement | HTMLTextAreaElement;
  
  if (!btn || !input) return;

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    btn.style.display = 'none'; // Hide if browser doesn't support
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (btn.classList.contains('listening')) {
      recognition.stop();
      return;
    }
    
    try {
      recognition.start();
    } catch (e) {
      console.log('Recognition already started');
    }
  });

  recognition.onstart = () => {
    btn.classList.add('listening');
    btn.innerHTML = '<i class="ph ph-waveform"></i>'; // Waveform icon while listening
    input.placeholder = 'Listening... Speak clearly';
    showToast('Voice recognition active', 'info');
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    if (onComplete) {
      setTimeout(onComplete, 500); // Slight delay for natural feel
    }
  };

  recognition.onend = () => {
    btn.classList.remove('listening');
    btn.innerHTML = '<i class="ph ph-microphone"></i>';
    input.placeholder = inputId.includes('search') ? 'Search for tools...' : 'Ask anything...';
  };

  recognition.onerror = (event: any) => {
    btn.classList.remove('listening');
    btn.innerHTML = '<i class="ph ph-microphone"></i>';
    if (event.error !== 'no-speech') {
      showToast(`Voice error: ${event.error}`, 'error');
    }
  };
};

// Initialize All Voice Inputs on Page Load
window.addEventListener('load', () => {
  initVoiceRecognition('voice-search-btn', 'search-input', () => (window as any).handleSearch());
  initVoiceRecognition('voice-chat-btn', 'message-input', () => {
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) sendBtn.click();
  });
  initVoiceRecognition('voice-arena-btn', 'arena-input');
});

// ==========================================
// GLOBAL AI INTELLIGENCE FEED LOGIC
// ==========================================

interface IntelligenceItem {
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  link: string;
}

const aiNewsData: IntelligenceItem[] = [
  {
    title: "OpenAI Unveils 'Operator' Autonomous Browser Agent",
    excerpt: "The new agent can book flights, shop online, and perform complex research tasks autonomously by controlling the user's browser.",
    tag: "Breaking News",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "NVIDIA's Blackwell Chips Hit Volume Production",
    excerpt: "The next generation of AI chips is expected to deliver a 30x performance increase for LLM inference tasks.",
    tag: "Hardware",
    image: "https://images.unsplash.com/photo-1591405351990-4726e33df58d?w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Apple Intelligence Officially Expands to EU & Asia",
    excerpt: "Apple's on-device AI suite is now rolling out globally with support for 15 additional languages and local data processing.",
    tag: "Tech Updates",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Google Gemini 2.0 Benchmarks Leak Online",
    excerpt: "Early tests show significant improvements in long-context reasoning and multimodal understanding across 100+ languages.",
    tag: "AI Research",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    link: "#"
  }
];

const aiVideosData = [
  { title: "Building Autonomous Agents with CrewAI", thumb: "https://images.unsplash.com/photo-1620712943543-bcc4628c6bb5?w=800&auto=format&fit=crop" },
  { title: "Mastering LangGraph for Complex Workflows", thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
  { title: "Next-Gen UI Design with AI Tools", thumb: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop" },
  { title: "Fine-Tuning Llama 3.1 for Specific Tasks", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop" }
];

(window as any).showFeed = function() {
  const grid = document.getElementById('ai-grid');
  const feed = document.getElementById('intelligence-feed');
  const hero = document.querySelector('.dashboard-hero');
  const pagination = document.getElementById('pagination');
  
  if (grid && feed && hero && pagination) {
    grid.style.display = 'none';
    pagination.style.display = 'none';
    (hero as HTMLElement).style.display = 'none';
    feed.style.display = 'block';
    
    // Update active sidebar state
    document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
    document.getElementById('show-feed')?.classList.add('active');
    
    // Initialize Feed Content
    initializeFeed();
  }
};

(window as any).showTools = function() {
  const grid = document.getElementById('ai-grid');
  const feed = document.getElementById('intelligence-feed');
  const hero = document.querySelector('.dashboard-hero');
  const pagination = document.getElementById('pagination');
  
  if (grid && feed && hero && pagination) {
    grid.style.display = 'grid';
    pagination.style.display = 'flex';
    (hero as HTMLElement).style.display = 'block';
    feed.style.display = 'none';
    
    document.getElementById('show-feed')?.classList.remove('active');
    document.querySelector('[data-category="All"]')?.classList.add('active');
  }
};

function initializeFeed() {
  // Set Date
  const dateEl = document.getElementById('brief-date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }
  
  // Populate News
  const newsGrid = document.getElementById('news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = aiNewsData.map(item => `
      <div class="news-card">
        <img src="${item.image}" class="news-img" alt="${item.title}">
        <div class="news-content">
          <span class="news-tag">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${item.excerpt}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Populate Videos
  const videoGrid = document.getElementById('video-grid');
  if (videoGrid) {
    videoGrid.innerHTML = aiVideosData.map(item => `
      <div class="video-card">
        <div class="video-thumb" style="background-image: url('${item.thumb}'); background-size: cover;">
          <div class="play-overlay"><i class="ph ph-play-fill"></i></div>
        </div>
        <h5>${item.title}</h5>
      </div>
    `).join('');
  }
}
