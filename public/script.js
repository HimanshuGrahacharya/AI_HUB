const aiTools = [
  { id: 'chatgpt', name: 'ChatGPT (OpenAI)', description: 'Versatile AI assistant for writing, coding, and more', category: 'AI Assistants & Chatbots', link: 'https://chat.openai.com', logo: 'https://chat.openai.com/favicon.ico' },
  { id: 'claude', name: 'Claude (Anthropic)', description: 'AI assistant for text, reasoning, and creative tasks', category: 'AI Assistants & Chatbots', link: 'https://claude.ai', logo: 'https://claude.ai/favicon.ico' },
  { id: 'blackbox', name: 'Blackbox AI', description: 'AI chatbot with personality and reasoning', category: 'AI Assistants & Chatbots', link: 'https://www.blackbox.ai', logo: 'https://www.blackbox.ai/favicon.ico' },
  { id: 'gemini', name: 'Google Gemini', description: 'Google\'s AI conversational model with search integration', category: 'AI Assistants & Chatbots', link: 'https://gemini.google.com', logo: 'https://gemini.google.com/favicon.ico' },
  { id: 'perplexity', name: 'Perplexity AI', description: 'AI-powered search and answers', category: 'AI Assistants & Chatbots', link: 'https://www.perplexity.ai', logo: 'https://www.perplexity.ai/favicon.ico' },
  { id: 'grok', name: 'Grok', description: 'AI chatbot with personality and reasoning', category: 'AI Assistants & Chatbots', link: 'https://grok.x.ai', logo: 'https://grok.x.ai/favicon.ico' },
  { id: 'poe', name: 'Poe', description: 'AI chat aggregation platform', category: 'AI Assistants & Chatbots', link: 'https://poe.com', logo: 'https://poe.com/favicon.ico' },
  { id: 'copilot', name: 'Microsoft Copilot', description: 'AI assistant integrated in Microsoft tools', category: 'AI Assistants & Chatbots', link: 'https://copilot.microsoft.com', logo: 'https://copilot.microsoft.com/favicon.ico' },
  { id: 'deepseek', name: 'DeepSeek', description: 'General AI tool gaining popularity', category: 'AI Assistants & Chatbots', link: 'https://chat.deepseek.com', logo: 'https://chat.deepseek.com/favicon.ico' },
  { id: 'mistral', name: 'Mistral AI', description: 'Fast open-weight language models', category: 'AI Assistants & Chatbots', link: 'https://mistral.ai', logo: 'https://mistral.ai/favicon.ico' },
  { id: 'pi', name: 'Pi (Inflection AI)', description: 'Personal AI companion', category: 'AI Assistants & Chatbots', link: 'https://pi.ai', logo: 'https://pi.ai/favicon.ico' },
  { id: 'youchat', name: 'YouChat', description: 'AI search + chat', category: 'AI Assistants & Chatbots', link: 'https://you.com', logo: 'https://you.com/favicon.ico' },
  { id: 'characterai', name: 'Character.AI', description: 'Role-play & character chats', category: 'AI Assistants & Chatbots', link: 'https://character.ai', logo: 'https://character.ai/favicon.ico' },
  { id: 'komo', name: 'Komo AI', description: 'AI-powered search assistant', category: 'AI Assistants & Chatbots', link: 'https://komo.ai', logo: 'https://komo.ai/favicon.ico' },
  { id: 'midjourney', name: 'Midjourney', description: 'Popular text-to-image AI art tool', category: 'AI Image & Art Generation', link: 'https://www.midjourney.com', logo: 'https://www.midjourney.com/favicon.ico' },
  { id: 'dalle', name: 'DALL·E (OpenAI)', description: 'Powerful image generation from prompts', category: 'AI Image & Art Generation', link: 'https://openai.com/dall-e-3', logo: 'https://openai.com/favicon.ico' },
  { id: 'stablediffusion', name: 'Stable Diffusion', description: 'Open-source image generation', category: 'AI Image & Art Generation', link: 'https://stability.ai', logo: 'https://stability.ai/favicon.ico' },
  { id: 'firefly', name: 'Adobe Firefly', description: 'AI for images, design, and more', category: 'AI Image & Art Generation', link: 'https://www.adobe.com/products/firefly.html', logo: 'https://www.adobe.com/favicon.ico' },
  { id: 'recraft', name: 'Recraft', description: 'AI image generation with edit workspace', category: 'AI Image & Art Generation', link: 'https://www.recraft.ai', logo: 'https://www.recraft.ai/favicon.ico' },
  { id: 'designer', name: 'Microsoft Designer', description: 'AI design and graphics generation', category: 'AI Image & Art Generation', link: 'https://designer.microsoft.com', logo: 'https://designer.microsoft.com/favicon.ico' },
  { id: 'canva', name: 'Canva AI / Magic Studio', description: 'AI design tools integrated into Canva', category: 'AI Image & Art Generation', link: 'https://www.canva.com', logo: 'https://www.canva.com/favicon.ico' },
  { id: 'removebg', name: 'Remove.bg', description: 'Automatic background removal', category: 'AI Image & Art Generation', link: 'https://www.remove.bg', logo: 'https://www.remove.bg/favicon.ico' },
  { id: 'githubcopilot', name: 'GitHub Copilot', description: 'AI coding assistant for IDEs', category: 'AI Coding & Developer Tools', link: 'https://github.com/features/copilot', logo: 'https://github.com/favicon.ico' },
  { id: 'qodo', name: 'Qodo', description: 'AI tool for code generation and review', category: 'AI Coding & Developer Tools', link: 'https://www.qodo.ai', logo: 'https://www.qodo.ai/favicon.ico' },
  { id: 'cursor', name: 'Cursor', description: 'Coding assistant with workspace integration', category: 'AI Coding & Developer Tools', link: 'https://cursor.sh', logo: 'https://cursor.sh/favicon.ico' },
  { id: 'replit', name: 'Replit AI', description: 'Coding with AI help in the browser', category: 'AI Coding & Developer Tools', link: 'https://replit.com', logo: 'https://replit.com/favicon.ico' },
  { id: 'tabnine', name: 'Tabnine', description: 'AI code completion assistant', category: 'AI Coding & Developer Tools', link: 'https://www.tabnine.com', logo: 'https://www.tabnine.com/favicon.ico' },
  { id: 'askcodi', name: 'AskCodi / Codiga', description: 'AI helpers for coding tasks', category: 'AI Coding & Developer Tools', link: 'https://www.askcodi.com', logo: 'https://www.askcodi.com/favicon.ico' },
  { id: 'jasper', name: 'Jasper AI', description: 'Content and copywriting AI', category: 'AI Writing & Content Creation', link: 'https://www.jasper.ai', logo: 'https://www.jasper.ai/favicon.ico' },
  { id: 'copyai', name: 'Copy.ai', description: 'Automated writing prompts and ads', category: 'AI Writing & Content Creation', link: 'https://www.copy.ai', logo: 'https://www.copy.ai/favicon.ico' },
  { id: 'writesonic', name: 'Writesonic', description: 'AI writing for blogs and SEO content', category: 'AI Writing & Content Creation', link: 'https://writesonic.com', logo: 'https://writesonic.com/favicon.ico' },
  { id: 'grammarly', name: 'Grammarly', description: 'AI grammar, tone, and writing suggestions', category: 'AI Writing & Content Creation', link: 'https://www.grammarly.com', logo: 'https://www.grammarly.com/favicon.ico' },
  { id: 'quillbot', name: 'QuillBot', description: 'Paraphrasing and content enhancement', category: 'AI Writing & Content Creation', link: 'https://www.quillbot.com', logo: 'https://www.quillbot.com/favicon.ico' },
  { id: 'rytr', name: 'Rytr / Sudowrite', description: 'Creative writing tools', category: 'AI Writing & Content Creation', link: 'https://rytr.me', logo: 'https://rytr.me/favicon.ico' },
  { id: 'notion', name: 'Notion AI', description: 'Embeds AI into notes and planning', category: 'Productivity & Workflow Tools', link: 'https://www.notion.so', logo: 'https://www.notion.so/favicon.ico' },
  { id: 'zapier', name: 'Zapier AI', description: 'Automated AI workflows', category: 'Productivity & Workflow Tools', link: 'https://zapier.com', logo: 'https://zapier.com/favicon.ico' },
  { id: 'bardeen', name: 'Bardeen AI', description: 'Browser automation with AI', category: 'Productivity & Workflow Tools', link: 'https://www.bardeen.ai', logo: 'https://www.bardeen.ai/favicon.ico' },
  { id: 'airtable', name: 'Airtable AI', description: 'Smart database automation', category: 'Productivity & Workflow Tools', link: 'https://www.airtable.com', logo: 'https://www.airtable.com/favicon.ico' },
  { id: 'fireflies', name: 'Fireflies.ai', description: 'AI meeting notes and transcripts', category: 'Productivity & Workflow Tools', link: 'https://fireflies.ai', logo: 'https://fireflies.ai/favicon.ico' },
  { id: 'mem', name: 'Mem AI', description: 'AI-assisted personal knowledge base', category: 'Productivity & Workflow Tools', link: 'https://get.mem.ai', logo: 'https://get.mem.ai/favicon.ico' },
  { id: 'runway', name: 'Runway ML', description: 'AI video editing and generation', category: 'AI Video & Audio Tools', link: 'https://runwayml.com', logo: 'https://runwayml.com/favicon.ico' },
  { id: 'capcut', name: 'CapCut (AI features)', description: 'AI video tools', category: 'AI Video & Audio Tools', link: 'https://www.capcut.com', logo: 'https://www.capcut.com/favicon.ico' },
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'AI voice synthesis', category: 'AI Video & Audio Tools', link: 'https://elevenlabs.io', logo: 'https://elevenlabs.io/favicon.ico' },
  { id: 'suno', name: 'Suno / Udio', description: 'AI music and sound generation', category: 'AI Video & Audio Tools', link: 'https://www.suno.ai', logo: 'https://www.suno.ai/favicon.ico' },
  { id: 'deepl', name: 'DeepL Translator', description: 'AI translation tool', category: 'Other Helpful AI Tools', link: 'https://www.deepl.com', logo: 'https://www.deepl.com/favicon.ico' },
  { id: 'googletranslate', name: 'Google Translate (AI enhanced)', description: 'Translation and language AI', category: 'Other Helpful AI Tools', link: 'https://translate.google.com', logo: 'https://translate.google.com/favicon.ico' },
  { id: 'interiorai', name: 'InteriorAI, RoomGPT', description: 'AI interior design tools', category: 'Other Helpful AI Tools', link: 'https://interiorai.com', logo: 'https://interiorai.com/favicon.ico' },
  { id: 'recipecook', name: 'AI Recipe Generators', description: 'AI recipe generators like myaichef, DishGen, etc.', category: 'Other Helpful AI Tools', link: 'https://myaichef.com', logo: 'https://myaichef.com/favicon.ico' },
  { id: 'leonardo', name: 'Leonardo AI', description: 'Game & concept art generation', category: 'AI Image & Design Tools', link: 'https://leonardo.ai', logo: 'https://leonardo.ai/favicon.ico' },
  { id: 'ideogram', name: 'Ideogram AI', description: 'Text-to-image with perfect text', category: 'AI Image & Design Tools', link: 'https://ideogram.ai', logo: 'https://ideogram.ai/favicon.ico' },
  { id: 'nightcafe', name: 'NightCafe', description: 'Community image generation', category: 'AI Image & Design Tools', link: 'https://creator.nightcafe.studio', logo: 'https://creator.nightcafe.studio/favicon.ico' },
  { id: 'playground', name: 'Playground AI', description: 'Image generation & editing', category: 'AI Image & Design Tools', link: 'https://playground.com', logo: 'https://playground.com/favicon.ico' },
  { id: 'photoroom', name: 'PhotoRoom', description: 'Product photo background editing', category: 'AI Image & Design Tools', link: 'https://www.photoroom.com', logo: 'https://www.photoroom.com/favicon.ico' },
  { id: 'pikalabs', name: 'Pika Labs', description: 'Text-to-video AI', category: 'AI Video Tools', link: 'https://pika.art', logo: 'https://pika.art/favicon.ico' },
  { id: 'synthesia', name: 'Synthesia', description: 'AI avatar videos', category: 'AI Video Tools', link: 'https://www.synthesia.io', logo: 'https://www.synthesia.io/favicon.ico' },
  { id: 'heygen', name: 'HeyGen', description: 'AI talking avatar videos', category: 'AI Video Tools', link: 'https://www.heygen.com', logo: 'https://www.heygen.com/favicon.ico' },
  { id: 'lumen5', name: 'Lumen5', description: 'Blog to video converter', category: 'AI Video Tools', link: 'https://lumen5.com', logo: 'https://lumen5.com/favicon.ico' },
  { id: 'descript', name: 'Descript', description: 'AI video & podcast editing', category: 'AI Video Tools', link: 'https://www.descript.com', logo: 'https://www.descript.com/favicon.ico' },
  { id: 'murf', name: 'Murf AI', description: 'AI voice-over generator', category: 'AI Voice & Audio', link: 'https://murf.ai', logo: 'https://murf.ai/favicon.ico' },
  { id: 'playht', name: 'Play.ht', description: 'Text-to-speech voices', category: 'AI Voice & Audio', link: 'https://play.ht', logo: 'https://play.ht/favicon.ico' },
  { id: 'voicemod', name: 'Voicemod AI', description: 'Real-time AI voice changer', category: 'AI Voice & Audio', link: 'https://www.voicemod.net', logo: 'https://www.voicemod.net/favicon.ico' },
  { id: 'krisp', name: 'Krisp AI', description: 'Noise cancellation', category: 'AI Voice & Audio', link: 'https://krisp.ai', logo: 'https://krisp.ai/favicon.ico' },
  { id: 'auphonic', name: 'Auphonic', description: 'Audio enhancement', category: 'AI Voice & Audio', link: 'https://auphonic.com', logo: 'https://auphonic.com/favicon.ico' },
  { id: 'codeium', name: 'Codeium', description: 'Free AI coding assistant', category: 'AI Coding & Developer Tools', link: 'https://codeium.com', logo: 'https://codeium.com/favicon.ico' },
  { id: 'snyk', name: 'Snyk AI', description: 'Security & vulnerability scanning', category: 'AI Coding & Developer Tools', link: 'https://snyk.io', logo: 'https://snyk.io/favicon.ico' },
  { id: 'phind', name: 'Phind', description: 'AI search for developers', category: 'AI Coding & Developer Tools', link: 'https://phind.com', logo: 'https://phind.com/favicon.ico' },
  { id: 'continuedev', name: 'Continue.dev', description: 'Open-source coding assistant', category: 'AI Coding & Developer Tools', link: 'https://continue.dev', logo: 'https://continue.dev/favicon.ico' },
  { id: 'warp', name: 'Warp AI', description: 'AI-powered terminal', category: 'AI Coding & Developer Tools', link: 'https://www.warp.dev', logo: 'https://www.warp.dev/favicon.ico' },
  { id: 'surferseo', name: 'Surfer SEO', description: 'AI SEO optimization', category: 'AI Marketing & SEO', link: 'https://surferseo.com', logo: 'https://surferseo.com/favicon.ico' },
  { id: 'frase', name: 'Frase.io', description: 'Content research & writing', category: 'AI Marketing & SEO', link: 'https://www.frase.io', logo: 'https://www.frase.io/favicon.ico' },
  { id: 'ocoya', name: 'Ocoya', description: 'AI social media content', category: 'AI Marketing & SEO', link: 'https://www.ocoya.com', logo: 'https://www.ocoya.com/favicon.ico' },
  { id: 'adcreative', name: 'AdCreative.ai', description: 'AI ad creatives', category: 'AI Marketing & SEO', link: 'https://www.adcreative.ai', logo: 'https://www.adcreative.ai/favicon.ico' },
  { id: 'copysmith', name: 'CopySmith', description: 'E-commerce content AI', category: 'AI Marketing & SEO', link: 'https://www.copysmith.ai', logo: 'https://www.copysmith.ai/favicon.ico' },
  { id: 'taskade', name: 'Taskade AI', description: 'AI task & workflow management', category: 'AI Productivity & Notes', link: 'https://www.taskade.com', logo: 'https://www.taskade.com/favicon.ico' },
  { id: 'reflect', name: 'Reflect AI', description: 'Smart note-taking', category: 'AI Productivity & Notes', link: 'https://reflect.app', logo: 'https://reflect.app/favicon.ico' },
  { id: 'rewind', name: 'Rewind AI', description: 'Personal search engine', category: 'AI Productivity & Notes', link: 'https://www.rewind.ai', logo: 'https://www.rewind.ai/favicon.ico' },
  { id: 'tome', name: 'Tome AI', description: 'AI presentations', category: 'AI Productivity & Notes', link: 'https://tome.app', logo: 'https://tome.app/favicon.ico' },
  { id: 'superhuman', name: 'Superhuman AI', description: 'Smart email assistant', category: 'AI Productivity & Notes', link: 'https://superhuman.com', logo: 'https://superhuman.com/favicon.ico' },
  { id: 'gong', name: 'Gong AI', description: 'Sales conversation intelligence', category: 'AI Business & Sales', link: 'https://www.gong.io', logo: 'https://www.gong.io/favicon.ico' },
  { id: 'clari', name: 'Clari AI', description: 'Revenue forecasting', category: 'AI Business & Sales', link: 'https://www.clari.com', logo: 'https://www.clari.com/favicon.ico' },
  { id: 'peopleai', name: 'People.ai', description: 'Sales activity analytics', category: 'AI Business & Sales', link: 'https://www.people.ai', logo: 'https://www.people.ai/favicon.ico' },
  { id: 'chatfuel', name: 'Chatfuel AI', description: 'AI chatbots for business', category: 'AI Business & Sales', link: 'https://www.chatfuel.com', logo: 'https://www.chatfuel.com/favicon.ico' },
  { id: 'manychat', name: 'ManyChat', description: 'WhatsApp & Instagram bots', category: 'AI Business & Sales', link: 'https://manychat.com', logo: 'https://manychat.com/favicon.ico' },
  { id: 'openrouter', name: 'OpenRouter', description: 'Multi-model AI API hub', category: 'Bonus (Trending 2025)', link: 'https://openrouter.ai', logo: 'https://openrouter.ai/favicon.ico' },
  { id: 'huggingface', name: 'Hugging Face Spaces', description: 'AI demos & apps', category: 'Bonus (Trending 2025)', link: 'https://huggingface.co/spaces', logo: 'https://huggingface.co/favicon.ico' },
  { id: 'perchance', name: 'Perchance AI', description: 'Free AI generators', category: 'Bonus (Trending 2025)', link: 'https://perchance.org', logo: 'https://perchance.org/favicon.ico' },
  { id: 'autogpt', name: 'Auto-GPT', description: 'Autonomous AI agents', category: 'Bonus (Trending 2025)', link: 'https://autogpt.net', logo: 'https://autogpt.net/favicon.ico' },
  { id: 'crewai', name: 'CrewAI', description: 'Multi-agent AI workflows', category: 'Bonus (Trending 2025)', link: 'https://www.crewai.com', logo: 'https://www.crewai.com/favicon.ico' },
  { id: 'auphonic', name: 'Auphonic', description: 'Audio enhancement', category: 'AI Voice & Audio', link: 'https://auphonic.com', logo: 'https://auphonic.com/favicon.ico' },
];

let selectedAI = null;
let currentPage = 1;
const itemsPerPage = 12;
let filteredTools = aiTools;

document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  renderPagination();

  document.getElementById('search-input').addEventListener('input', handleSearch);
  document.getElementById('back-btn').addEventListener('click', showTools);
});

function renderTools() {
  const grid = document.getElementById('ai-grid');
  grid.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const toolsToShow = filteredTools.slice(startIndex, endIndex);

  toolsToShow.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'ai-card';
    card.onclick = () => selectAI(tool.id);
    card.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name} logo" class="ai-logo">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="category">${tool.category}</div>
      <div class="links">
        <a href="${tool.link}" target="_blank" onclick="event.stopPropagation()">Official Site</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = () => changePage(i);
    if (i === currentPage) button.classList.add('active');
    pagination.appendChild(button);
  }
}

function handleSearch() {
  const query = document.getElementById('search-input').value.toLowerCase();
  filteredTools = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderTools();
  renderPagination();
}

function changePage(page) {
  currentPage = page;
  renderTools();
  renderPagination();
}

function selectAI(ai) {
  selectedAI = ai;
  document.getElementById('ai-grid').style.display = 'none';
  document.getElementById('pagination').style.display = 'none';
  document.getElementById('chat-container').style.display = 'block';
  document.getElementById('chat-messages').innerHTML = '';
}

function showTools() {
  document.getElementById('ai-grid').style.display = 'grid';
  document.getElementById('pagination').style.display = 'flex';
  document.getElementById('chat-container').style.display = 'none';
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (!message) return;

  addMessage('user', message);
  input.value = '';

  fetch(`/api/${selectedAI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
  .then(response => response.json())
  .then(data => {
    addMessage('ai', data.response);
  })
  .catch(error => {
    console.error('Error:', error);
    addMessage('ai', 'Sorry, there was an error processing your request.');
  });
}

function addMessage(sender, text) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
