// Theme Management (3-State Cycle: Light -> Dark -> Cyber)
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (!themeToggle) return;

  // Themes: 'light', 'dark'
  const themes = ['light', 'dark'];
  
  // Load saved preference (default: dark)
  let currentTheme = localStorage.getItem('active-theme') || 'dark';
  
  // Initial Apply
  applyTheme(currentTheme);

  // Toggle on click
  themeToggle.addEventListener('click', function () {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('active-theme', currentTheme);
    applyTheme(currentTheme);
    
    // Dispatch event for particles to update
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: currentTheme } }));
  });

  function applyTheme(theme: string): void {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    updateIcon(theme);
  }

  function updateIcon(theme: string): void {
    let icon = themeToggle!.querySelector('i');
    if (!icon) return;
    
    if (theme === 'light') icon.className = 'ph ph-sun';
    else icon.className = 'ph ph-moon';
  }
});
