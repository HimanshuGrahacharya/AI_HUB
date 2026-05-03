// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (!themeToggle) return;

  // Load saved preference (default: light)
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') {
    body.classList.add('dark-mode');
    setIcon(themeToggle, true);
  } else {
    setIcon(themeToggle, false);
  }

  // Toggle on click
  themeToggle.addEventListener('click', function () {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setIcon(themeToggle, isDark);
  });

  function setIcon(btn: HTMLElement, isDark: boolean): void {
    // Find existing <i> or create one
    let icon = btn.querySelector('i') as HTMLElement | null;
    if (!icon) {
      icon = document.createElement('i');
      btn.appendChild(icon);
    }
    // Swap Phosphor icon class — no innerHTML so the library isn't confused
    icon.className = isDark ? 'ph ph-sun' : 'ph ph-moon';
  }
});
