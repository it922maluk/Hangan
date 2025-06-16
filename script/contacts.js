document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь код для отправки формы
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
});