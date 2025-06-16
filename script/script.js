document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Анимация при прокрутке
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Пример: изменение прозрачности шапки при прокрутке
        if (scrollPosition > 100) {
            document.querySelector('header').style.background = 'rgba(255, 255, 255, 0.56)';
        } else {
            document.querySelector('header').style.background = '#fff';
        }
    });
    
    // Обработка формы (пример)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Карусель баннеров
    const carousel = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    let intervalId;
    
    // Функция для переключения слайдов
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        carousel.style.transform = `translateX(-${index * 100}%)`;
        
        // Обновляем индикаторы
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Автоматическая прокрутка
    function startAutoSlide() {
        intervalId = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Меняем слайд каждые 5 секунд
    }
    
    // Остановка автоматической прокрутки при наведении
    function pauseAutoSlide() {
        clearInterval(intervalId);
    }
    
    // Инициализация
    function initCarousel() {
        startAutoSlide();
        
        // Обработчики событий для кнопок
        prevBtn.addEventListener('click', () => {
            pauseAutoSlide();
            goToSlide(currentIndex - 1);
            startAutoSlide();
        });
        
        nextBtn.addEventListener('click', () => {
            pauseAutoSlide();
            goToSlide(currentIndex + 1);
            startAutoSlide();
        });
        
        // Обработчики для индикаторов
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                pauseAutoSlide();
                goToSlide(index);
                startAutoSlide();
            });
        });
        
        // Пауза при наведении
        document.querySelector('.hero-carousel').addEventListener('mouseenter', pauseAutoSlide);
        document.querySelector('.hero-carousel').addEventListener('mouseleave', startAutoSlide);
    }
    
    initCarousel();
});