const fs = require('fs');
const content = fs.readFileSync('./src/public/script.ts', 'utf8');

const routerCode = `

// ============================================================
// PROFESSIONAL SPA HASH ROUTER
// Enables refresh persistence and browser back/forward support
// ============================================================
function handleRouting() {
  const hash = window.location.hash;
  switch (hash) {
    case '#arena':
      (window as any).openArena();
      break;
    case '#warroom':
      (window as any).openWarRoom();
      break;
    case '#studio':
      (window as any).openCreativeStudio();
      break;
    case '#feed':
      (window as any).showFeed();
      break;
    default:
      switchView('dashboard');
      break;
  }
}

// Listen for hash changes triggered by browser back/forward
window.addEventListener('hashchange', handleRouting);

// Restore the correct view on page load/refresh
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash && window.location.hash !== '') {
    setTimeout(handleRouting, 150);
  }
});
`;

const newContent = content + routerCode;
fs.writeFileSync('./src/public/script.ts', newContent, 'utf8');
console.log('Hash router appended successfully. Total bytes:', newContent.length);
