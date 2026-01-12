const aiTools = [
  { id: 'chatgpt', name: 'ChatGPT (OpenAI)', description: 'Versatile AI assistant for writing, coding, and more', category: 'AI Assistants & Chatbots', link: 'https://chat.openai.com' },
  { id: 'claude', name: 'Claude (Anthropic)', description: 'AI assistant for text, reasoning, and creative tasks', category: 'AI Assistants & Chatbots', link: 'https://claude.ai' },
  { id: 'blackbox', name: 'Blackbox AI', description: 'AI chatbot with personality and reasoning', category: 'AI Assistants & Chatbots', link: 'https://www.blackbox.ai' },
  { id: 'gemini', name: 'Google Gemini', description: 'Google\'s AI conversational model with search integration', category: 'AI Assistants & Chatbots', link: 'https://gemini.google.com' },
  { id: 'perplexity', name: 'Perplexity AI', description: 'AI-powered search and answers', category: 'AI Assistants & Chatbots', link: 'https://www.perplexity.ai' },
  { id: 'grok', name: 'Grok', description: 'AI chatbot with personality and reasoning', category: 'AI Assistants & Chatbots', link: 'https://grok.x.ai' },
  { id: 'poe', name: 'Poe', description: 'AI chat aggregation platform', category: 'AI Assistants & Chatbots', link: 'https://poe.com' },
  { id: 'copilot', name: 'Microsoft Copilot', description: 'AI assistant integrated in Microsoft tools', category: 'AI Assistants & Chatbots', link: 'https://copilot.microsoft.com' },
  { id: 'deepseek', name: 'DeepSeek', description: 'General AI tool gaining popularity', category: 'AI Assistants & Chatbots', link: 'https://chat.deepseek.com' },
  { id: 'midjourney', name: 'Midjourney', description: 'Popular text-to-image AI art tool', category: 'AI Image & Art Generation', link: 'https://www.midjourney.com' },
  { id: 'dalle', name: 'DALL·E (OpenAI)', description: 'Powerful image generation from prompts', category: 'AI Image & Art Generation', link: 'https://openai.com/dall-e-3' },
  { id: 'stablediffusion', name: 'Stable Diffusion', description: 'Open-source image generation', category: 'AI Image & Art Generation', link: 'https://stability.ai' },
  { id: 'firefly', name: 'Adobe Firefly', description: 'AI for images, design, and more', category: 'AI Image & Art Generation', link: 'https://www.adobe.com/products/firefly.html' },
  { id: 'recraft', name: 'Recraft', description: 'AI image generation with edit workspace', category: 'AI Image & Art Generation', link: 'https://www.recraft.ai' },
  { id: 'designer', name: 'Microsoft Designer', description: 'AI design and graphics generation', category: 'AI Image & Art Generation', link: 'https://designer.microsoft.com' },
  { id: 'canva', name: 'Canva AI / Magic Studio', description: 'AI design tools integrated into Canva', category: 'AI Image & Art Generation', link: 'https://www.canva.com' },
  { id: 'removebg', name: 'Remove.bg', description: 'Automatic background removal', category: 'AI Image & Art Generation', link: 'https://www.remove.bg' },
  { id: 'githubcopilot', name: 'GitHub Copilot', description: 'AI coding assistant for IDEs', category: 'AI Coding & Developer Tools', link: 'https://github.com/features/copilot' },
  { id: 'qodo', name: 'Qodo', description: 'AI tool for code generation and review', category: 'AI Coding & Developer Tools', link: 'https://www.qodo.ai' },
  { id: 'cursor', name: 'Cursor', description: 'Coding assistant with workspace integration', category: 'AI Coding & Developer Tools', link: 'https://cursor.sh' },
  { id: 'replit', name: 'Replit AI', description: 'Coding with AI help in the browser', category: 'AI Coding & Developer Tools', link: 'https://replit.com' },
  { id: 'tabnine', name: 'Tabnine', description: 'AI code completion assistant', category: 'AI Coding & Developer Tools', link: 'https://www.tabnine.com' },
  { id: 'askcodi', name: 'AskCodi / Codiga', description: 'AI helpers for coding tasks', category: 'AI Coding & Developer Tools', link: 'https://www.askcodi.com' },
  { id: 'jasper', name: 'Jasper AI', description: 'Content and copywriting AI', category: 'AI Writing & Content Creation', link: 'https://www.jasper.ai' },
  { id: 'copyai', name: 'Copy.ai', description: 'Automated writing prompts and ads', category: 'AI Writing & Content Creation', link: 'https://www.copy.ai' },
  { id: 'writesonic', name: 'Writesonic', description: 'AI writing for blogs and SEO content', category: 'AI Writing & Content Creation', link: 'https://writesonic.com' },
  { id: 'grammarly', name: 'Grammarly', description: 'AI grammar, tone, and writing suggestions', category: 'AI Writing & Content Creation', link: 'https://www.grammarly.com' },
  { id: 'quillbot', name: 'QuillBot', description: 'Paraphrasing and content enhancement', category: 'AI Writing & Content Creation', link: 'https://www.quillbot.com' },
  { id: 'rytr', name: 'Rytr / Sudowrite', description: 'Creative writing tools', category: 'AI Writing & Content Creation', link: 'https://rytr.me' },
  { id: 'notion', name: 'Notion AI', description: 'Embeds AI into notes and planning', category: 'Productivity & Workflow Tools', link: 'https://www.notion.so' },
  { id: 'zapier', name: 'Zapier AI', description: 'Automated AI workflows', category: 'Productivity & Workflow Tools', link: 'https://zapier.com' },
  { id: 'bardeen', name: 'Bardeen AI', description: 'Browser automation with AI', category: 'Productivity & Workflow Tools', link: 'https://www.bardeen.ai' },
  { id: 'airtable', name: 'Airtable AI', description: 'Smart database automation', category: 'Productivity & Workflow Tools', link: 'https://www.airtable.com' },
  { id: 'fireflies', name: 'Fireflies.ai', description: 'AI meeting notes and transcripts', category: 'Productivity & Workflow Tools', link: 'https://fireflies.ai' },
  { id: 'mem', name: 'Mem AI', description: 'AI-assisted personal knowledge base', category: 'Productivity & Workflow Tools', link: 'https://get.mem.ai' },
  { id: 'runway', name: 'Runway ML', description: 'AI video editing and generation', category: 'AI Video & Audio Tools', link: 'https://runwayml.com' },
  { id: 'capcut', name: 'CapCut (AI features)', description: 'AI video tools', category: 'AI Video & Audio Tools', link: 'https://www.capcut.com' },
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'AI voice synthesis', category: 'AI Video & Audio Tools', link: 'https://elevenlabs.io' },
  { id: 'suno', name: 'Suno / Udio', description: 'AI music and sound generation', category: 'AI Video & Audio Tools', link: 'https://www.suno.ai' },
  { id: 'deepl', name: 'DeepL Translator', description: 'AI translation tool', category: 'Other Helpful AI Tools', link: 'https://www.deepl.com' },
  { id: 'googletranslate', name: 'Google Translate (AI enhanced)', description: 'Translation and language AI', category: 'Other Helpful AI Tools', link: 'https://translate.google.com' },
  { id: 'interiorai', name: 'InteriorAI, RoomGPT', description: 'AI interior design tools', category: 'Other Helpful AI Tools', link: 'https://interiorai.com' },
  { id: 'recipecook', name: 'AI Recipe Generators', description: 'AI recipe generators like myaichef, DishGen, etc.', category: 'Other Helpful AI Tools', link: 'https://myaichef.com' }
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
