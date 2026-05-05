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
      showToast('🚀 Demo login successful! Welcome to HSG AI HUB.', 'info');
    }
    window.history.replaceState({}, document.title, window.location.pathname);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
    return;
  }


  const token = localStorage.getItem('token');
  const publicPaths = ['/login.html', '/signup.html', '/landing.html', '/', '/forgot-password.html', '/reset-password.html'];
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
      showToast(data.error || 'Login failed', 'error');
    }
  } catch (error) {
    console.error('Login error:', error);
    showToast('Login failed', 'error');
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
      showToast('Signup successful! Redirecting to login...', 'info');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
    } else {
      showToast(data.error || 'Signup failed', 'error');
    }
  } catch (error) {
    console.error('Signup error:', error);
    showToast('Signup failed', 'error');
  }
}

// Forgot Password function
async function forgotPassword(email: string): Promise<void> {
  const btn = document.getElementById('forgot-btn') as HTMLButtonElement;
  if (btn) btn.disabled = true;
  try {
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (response.ok) {
      showToast('If an account exists, a reset link was sent to your email.', 'info');
    } else {
      showToast(data.error || 'Failed to process request', 'error');
    }
  } catch (error) {
    showToast('Network error occurred', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

// Reset Password function
async function resetPassword(email: string, token: string, newPassword: string): Promise<void> {
  const btn = document.getElementById('reset-btn') as HTMLButtonElement;
  if (btn) btn.disabled = true;
  try {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token, newPassword }),
    });
    const data = await response.json();
    if (response.ok) {
      showToast('Password reset successfully! Redirecting...', 'info');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    } else {
      showToast(data.error || 'Failed to reset password', 'error');
    }
  } catch (error) {
    showToast('Network error occurred', 'error');
  } finally {
    if (btn) btn.disabled = false;
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
      showToast(data.error || 'Google login failed', 'error');
    }
  } catch (error) {
    console.error('Google Auth error:', error);
    showToast('Google login failed', 'error');
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
        { 
          theme: "outline", 
          size: "large", 
          text: "continue_with", 
          shape: "rectangular",
          width: "380" // Match the form width
        }
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
        showToast('Passwords do not match', 'error');
        return;
      }
      signup(fullName, email, password);
    });
  }

  const forgotPasswordForm = document.getElementById('forgot-password-form') as HTMLFormElement;
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      forgotPassword(email);
    });
  }

  const resetPasswordForm = document.getElementById('reset-password-form') as HTMLFormElement;
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newPassword = (document.getElementById('password') as HTMLInputElement).value;
      const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
      if (newPassword !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
      }
      
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const email = urlParams.get('email');
      
      if (!token || !email) {
        showToast('Invalid password reset link. Please request a new one.', 'error');
        return;
      }
      
      resetPassword(email, token, newPassword);
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
