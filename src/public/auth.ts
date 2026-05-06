declare const google: any;

// Show a styled toast notification
function showToast(message: string, type: 'error' | 'info' | 'success' = 'error'): void {
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

let resetIdentifier = '';
let resetTempToken = '';

// Login function
async function login(identifier: string, password: string): Promise<void> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
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
async function signup(fullName: string, email: string, mobileNumber: string, password: string): Promise<void> {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, mobileNumber, password }),
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

// Forgot Password - Step 1: Send OTP
async function sendOtp(identifier: string): Promise<void> {
  const btn = document.getElementById('send-otp-btn') as HTMLButtonElement;
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
  try {
    const response = await fetch('/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier }),
    });
    const data = await response.json();
    if (response.ok) {
      resetIdentifier = identifier;
      showToast(data.demoOtp ? `Demo OTP: ${data.demoOtp}` : 'Verification code sent.', 'info');
      if (data.demoOtp) {
        const otpInput = document.getElementById('otp') as HTMLInputElement;
        if (otpInput) otpInput.value = data.demoOtp;
      }
      
      // UI Transitions
      document.getElementById('step-1')!.style.display = 'none';
      document.getElementById('step-2')!.style.display = 'block';
      document.getElementById('wizard-title')!.textContent = 'Verify Code';
      document.getElementById('wizard-desc')!.textContent = `We sent a 6-digit code to ${identifier}.`;
    } else {
      showToast(data.error || 'Failed to process request', 'error');
    }
  } catch (error) {
    showToast('Network error occurred', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Send Verification Code'; }
  }
}

// Forgot Password - Step 2: Verify OTP
async function verifyOtp(otp: string): Promise<void> {
  const btn = document.getElementById('verify-otp-btn') as HTMLButtonElement;
  if (btn) { btn.disabled = true; btn.textContent = 'Verifying...'; }
  try {
    const response = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: resetIdentifier, otp }),
    });
    const data = await response.json();
    if (response.ok) {
      resetTempToken = data.tempToken;
      showToast('Code verified! Create a new password.', 'info');
      
      // UI Transitions
      document.getElementById('step-2')!.style.display = 'none';
      document.getElementById('step-3')!.style.display = 'block';
      document.getElementById('wizard-title')!.textContent = 'New Password';
      document.getElementById('wizard-desc')!.textContent = 'Enter a strong password to secure your account.';
    } else {
      showToast(data.error || 'Invalid or expired code', 'error');
    }
  } catch (error) {
    showToast('Network error occurred', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Verify Code'; }
  }
}

// Forgot Password - Step 3: Update Password
async function resetPasswordOtp(newPassword: string): Promise<void> {
  const btn = document.getElementById('reset-pw-btn') as HTMLButtonElement;
  if (btn) { btn.disabled = true; btn.textContent = 'Updating...'; }
  try {
    const response = await fetch('/api/auth/reset-password-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: resetIdentifier, tempToken: resetTempToken, newPassword }),
    });
    const data = await response.json();
    if (response.ok) {
      showToast('Password updated successfully! Redirecting...', 'info');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
    } else {
      showToast(data.error || 'Failed to update password', 'error');
    }
  } catch (error) {
    showToast('Network error occurred', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Update Password'; }
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
      const identifier = (document.getElementById('identifier') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      login(identifier, password);
    });
  }

  const signupForm = document.getElementById('signup-form') as HTMLFormElement;
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const mobileNumber = (document.getElementById('mobileNumber') as HTMLInputElement)?.value || '';
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
      if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
      }
      signup(fullName, email, mobileNumber, password);
    });
  }

  const forgotPasswordForm = document.getElementById('forgot-password-form') as HTMLFormElement;
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Only triggers on step 1 due to type="button" on other steps
      const identifier = (document.getElementById('identifier') as HTMLInputElement).value;
      if (identifier) sendOtp(identifier);
    });

    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    if (verifyOtpBtn) {
      verifyOtpBtn.addEventListener('click', () => {
        const otp = (document.getElementById('otp') as HTMLInputElement).value;
        if (otp && otp.length === 6) verifyOtp(otp);
        else showToast('Please enter a 6-digit code', 'error');
      });
    }

    const resetPwBtn = document.getElementById('reset-pw-btn');
    if (resetPwBtn) {
      resetPwBtn.addEventListener('click', () => {
        const newPassword = (document.getElementById('newPassword') as HTMLInputElement).value;
        if (newPassword && newPassword.length >= 8) resetPasswordOtp(newPassword);
        else showToast('Password must be at least 8 characters', 'error');
      });
    }

    const resendOtpLink = document.getElementById('resend-otp-link');
    if (resendOtpLink) {
      resendOtpLink.addEventListener('click', () => {
        if (resetIdentifier) sendOtp(resetIdentifier);
      });
    }
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
