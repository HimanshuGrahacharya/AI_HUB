declare const google: any;

// Show a styled toast notification
function showToast(message: string, type: 'error' | 'info' = 'error'): void {
  const existing = document.getElementById('auth-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'auth-toast';
  toast.style.cssText = `
    position: fixed; top: 24px; left: 50%; transform: translateX(-50%);
    background: ${type === 'error' ? '#ef4444' : '#6366f1'};
    color: white; padding: 14px 24px; border-radius: 12px;
    font-family: Inter, sans-serif; font-size: 0.9rem; font-weight: 600;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3); z-index: 9999;
    max-width: 90vw; text-align: center;
    animation: slideDown 0.3s ease;
  `;
  toast.textContent = message;

  const style = document.createElement('style');
  style.textContent = '@keyframes slideDown { from { opacity:0; transform:translateX(-50%) translateY(-20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }';
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 5000);
}

// Check if user is logged in
function checkAuth(): void {
  // Capture token from URL query param (OAuth callback)
  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromUrl = urlParams.get('token');
  if (tokenFromUrl) {
    localStorage.setItem('token', tokenFromUrl);
    const isDemo = urlParams.get('demo');
    if (isDemo) {
      showToast('🚀 Demo login successful! Welcome to AI Hubs.', 'info');
    }
    window.history.replaceState({}, document.title, window.location.pathname);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
    return;
  }


  const token = localStorage.getItem('token');
  const publicPaths = ['/login.html', '/signup.html', '/landing.html', '/'];
  const currentPath = window.location.pathname;
  if (!token && !publicPaths.some(p => currentPath.endsWith(p) || currentPath === p)) {
    window.location.href = 'landing.html';
  }
}

// Login function
async function login(email: string, password: string): Promise<void> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'index.html';
    } else {
      alert(data.error || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed');
  }
}

// Signup function
async function signup(fullName: string, email: string, password: string): Promise<void> {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Signup successful! Please login.');
      window.location.href = 'login.html';
    } else {
      alert(data.error || 'Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('Signup failed');
  }
}

// Logout function
function logout(): void {
  localStorage.removeItem('token');
  window.location.href = 'landing.html';
}

// Google Sign-In callback
async function handleGoogleSignIn(response: any): Promise<void> {
  try {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential: response.credential }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'index.html';
    } else {
      alert(data.error || 'Google login failed');
    }
  } catch (error) {
    console.error('Google Auth error:', error);
    alert('Google login failed');
  }
}

// Initialize Google Sign-In
function initGoogleAuth() {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.initialize({
      client_id: "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com",
      callback: handleGoogleSignIn
    });
    const googleBtn = document.getElementById('google-signin-btn');
    if (googleBtn) {
      google.accounts.id.renderButton(
        googleBtn,
        { theme: "outline", size: "large", text: "continue_with", shape: "pill" }
      );
    }
  } else {
    // Retry after 100ms if script hasn't loaded
    setTimeout(initGoogleAuth, 100);
  }
}

window.onload = function () {
  initGoogleAuth();
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();

  const loginForm = document.getElementById('login-form') as HTMLFormElement;
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      login(email, password);
    });
  }

  const signupForm = document.getElementById('signup-form') as HTMLFormElement;
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      signup(fullName, email, password);
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
