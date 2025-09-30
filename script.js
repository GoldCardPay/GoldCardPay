// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
        `;
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 这里可以添加登录逻辑
    console.log('Login attempt:', { username, password });
    
    // 示例：显示登录成功消息
    alert('登录功能演示 - 用户名: ' + username);
}

// Add smooth animations on page load
document.addEventListener('DOMContentLoaded', function() {
    const loginCard = document.querySelector('.login-card');
    const brandSection = document.querySelector('.brand-section');
    
    // Add entrance animations
    setTimeout(() => {
        brandSection.style.opacity = '1';
        brandSection.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        loginCard.style.opacity = '1';
        loginCard.style.transform = 'translateY(0)';
    }, 300);
});

// Initialize page animations
document.addEventListener('DOMContentLoaded', function() {
    const brandSection = document.querySelector('.brand-section');
    const loginCard = document.querySelector('.login-card');
    
    // Set initial states
    brandSection.style.opacity = '0';
    brandSection.style.transform = 'translateY(20px)';
    brandSection.style.transition = 'all 0.6s ease';
    
    loginCard.style.opacity = '0';
    loginCard.style.transform = 'translateY(20px)';
    loginCard.style.transition = 'all 0.6s ease';
});