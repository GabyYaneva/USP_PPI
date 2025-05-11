const userIcon = document.getElementById('user-icon');
const popup = document.getElementById('registration-popup');
const closeBtn = document.getElementById('close-popup');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const switchToRegister = document.getElementById('register-link');
const switchToLogin = document.getElementById('login-link');


userIcon?.addEventListener('click', () => {
    popup.style.display = 'flex';
    showLoginForm();
});


closeBtn?.addEventListener('click', () => {
    popup.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});


switchToRegister?.addEventListener('click', (e) => {
    e.preventDefault();
    showRegisterForm();
});

switchToLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});

function showLoginForm() {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
}

function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
}

registerForm?.addEventListener('submit', function (e) {
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Паролите не съвпадат!');
    }
});
 
