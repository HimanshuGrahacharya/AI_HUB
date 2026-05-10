// Theme Management (3-State Cycle: Light -> Dark -> Cyber)
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (!themeToggle) return;

  // Themes: 'light', 'dark', 'cyber'
  const themes = ['light', 'dark', 'cyber'];
  
  // Load saved preference (default: light)
  let currentTheme = localStorage.getItem('active-theme') || 'light';
  
  // Initial Apply
  applyTheme(currentTheme);

  // Toggle on click
  themeToggle.addEventListener('click', function () {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    currentTheme = themes[nextIndex] as string;
    
    localStorage.setItem('active-theme', currentTheme);
    applyTheme(currentTheme);
    
    // Dispatch event for particles to update
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: currentTheme } }));
  });

  function applyTheme(theme: string): void {
    // Remove all theme classes
    body.classList.remove('dark-mode', 'cyber-mode');
    
    if (theme === 'dark') body.classList.add('dark-mode');
    if (theme === 'cyber') body.classList.add('cyber-mode');
    
    updateIcon(theme);
  }

  function updateIcon(theme: string): void {
    let icon = themeToggle!.querySelector('i');
    if (!icon) return;
    
    if (theme === 'light') icon.className = 'ph ph-sun';
    else if (theme === 'dark') icon.className = 'ph ph-moon';
    else icon.className = 'ph ph-lightning'; // Cyber icon
  }
});
