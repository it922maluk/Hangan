document.addEventListener('DOMContentLoaded', function() {
    // Показать/скрыть пароль
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // Валидация формы
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверка паролей
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        
        // Здесь код для отправки формы
        alert('Регистрация успешна! Проверьте вашу почту для подтверждения.');
        registerForm.reset();
    });
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9+]/g, '');
    });
});