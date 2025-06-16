document.addEventListener('DOMContentLoaded', function() {
            // Обработка формы
            const requestForm = document.querySelector('.request-form');
            
            requestForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь код для отправки формы
                alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для уточнения деталей.');
                this.reset();
            });
            
            // Маска для телефона
            const phoneInput = document.getElementById('phone');
            
            phoneInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9+]/g, '');
            });
            
            // Минимальная дата - сегодня
            const dateInput = document.getElementById('date');
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        });