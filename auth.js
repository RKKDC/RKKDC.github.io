// Authentication module: login, register, and toast notifications

/* ============= Toast Notification System ============= */
function showToast(message, type = 'success', duration = 3000) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'info') icon = 'fa-info-circle';
    
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/* ============= Navigation Menu Toggle ============= */
function initNavMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/* ============= Login Form Handler ============= */
function handleLoginSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email')?.value || '';
    const password = document.getElementById('password')?.value || '';
    const remember = document.getElementById('remember')?.checked || false;
    
    // Validation
    if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Simulate login (showcase only)
    showToast(`Welcome back! Logged in as ${email}`, 'success', 3000);
    
    // Save remember me preference
    if (remember) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    
    // Reset form
    event.target.reset();
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

/* ============= Register Form Handler ============= */
function handleRegisterSubmit(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname')?.value || '';
    const email = document.getElementById('regemail')?.value || '';
    const password = document.getElementById('regpassword')?.value || '';
    const confirmPassword = document.getElementById('confirmpassword')?.value || '';
    const terms = document.getElementById('terms')?.checked || false;
    
    // Validation
    if (!fullname || !email || !password || !confirmPassword) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Name validation
    if (fullname.trim().length < 2) {
        showToast('Please enter your full name', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Password match validation
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    // Terms validation
    if (!terms) {
        showToast('Please accept the Terms & Conditions', 'error');
        return;
    }
    
    // Simulate registration (showcase only)
    showToast(`Welcome ${fullname}! Your account has been created successfully.`, 'success', 3000);
    
    // Reset form
    event.target.reset();
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

/* ============= Initialize on Page Load ============= */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation menu
    initNavMenu();
    
    // Check for remembered email on login page
    const emailInput = document.getElementById('email');
    const rememberCheckbox = document.getElementById('remember');
    if (emailInput && rememberCheckbox) {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberCheckbox.checked = true;
        }
    }
    
    console.log('[auth] Authentication module initialized');
});
