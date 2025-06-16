// Переключение между категориями меню
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.menu-tab');
    const categories = document.querySelectorAll('.menu-category');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех табов и категорий
            tabs.forEach(t => t.classList.remove('active'));
            categories.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс к выбранному табу
            this.classList.add('active');
            
            // Показываем соответствующую категорию
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // Анимация элементов меню при прокрутке
    const menuItems = document.querySelectorAll('.menu-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    menuItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(item);
    });
});
        // Функция приближения (zoom)
        document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const zoomContainer = document.getElementById('zoomContainer');
    const zoomClose = document.getElementById('zoomClose');
    const zoomImage = document.getElementById('zoomImage');
    const zoomTitle = document.getElementById('zoomTitle');
    const zoomPrice = document.getElementById('zoomPrice');
    const zoomDesc = document.getElementById('zoomDesc');
    const zoomBadges = document.getElementById('zoomBadges');
    
    // Открытие zoom
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const title = this.querySelector('.menu-item-title').textContent;
            const price = this.querySelector('.menu-item-price').textContent;
            const desc = this.querySelector('.menu-item-desc').textContent;
            const badges = this.querySelectorAll('.menu-item-badge');
            
            zoomImage.src = imgSrc;
            zoomTitle.textContent = title;
            zoomPrice.textContent = price;
            zoomDesc.textContent = desc;
            
            // Очищаем предыдущие бейджи
            zoomBadges.innerHTML = '';
            
            // Добавляем бейджи
            badges.forEach(badge => {
                const clone = badge.cloneNode(true);
                zoomBadges.appendChild(clone);
            });
            
            // Добавляем класс для уменьшения карточки
            this.classList.add('zoomed');
            
            // Показываем zoom контейнер
            zoomContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие zoom
    zoomClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeZoom();
    });
    
    zoomContainer.addEventListener('click', function(e) {
        if (e.target === this) {
            closeZoom();
        }
    });
    
    function closeZoom() {
        zoomContainer.classList.remove('active');
        document.body.style.overflow = '';
        
        // Удаляем класс zoomed со всех карточек
        document.querySelectorAll('.menu-item.zoomed').forEach(item => {
            item.classList.remove('zoomed');
        });
    }
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeZoom();
        }
    });
});