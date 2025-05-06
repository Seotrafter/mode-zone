// Открытие и закрытие popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Открытие меню
function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}

// Скрипт для открытия ответов на вопросы (FAQ)
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.querySelector('.faq-answer').classList.toggle('active');
        });
    });
});

// Перехват отправки всех форм на странице
document.addEventListener("DOMContentLoaded", function() {
    // Найти все формы на странице
    const forms = document.querySelectorAll('form');

    // Перебрать все формы и добавить обработчик события 'submit'
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Останавливаем стандартную отправку формы
            window.location.href = 'thanks.html'; // Перенаправляем на страницу "Спасибо"
        });
    });
});