document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация галереи
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
   filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active'); 
            
            const filter = this.dataset.filter;

            // Фильтруем элементы галереи
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

     // Модальное окно
     const modal = document.getElementById('imageModal');
     const modalImg = document.getElementById('modalImage');
     const modalClose = document.getElementById('modalClose');
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');
     
     let currentImageIndex = 0;
     const images = Array.from(document.querySelectorAll('.gallery-img'));

     // Открытие модального окна
     galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            modalImg.src = images[currentImageIndex].src;
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    modalClose.addEventListener('click', function() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    });

      // Навигация по изображениям
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

       // Закрытие по клику вне изображения
       modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

     // Анимация появления элементов
     const animateOnScroll = function() {
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});