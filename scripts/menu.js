// === ЛОГИКА МОБИЛЬНОГО МЕНЮ ===

// Получаем основные элементы управления [cite: 322]
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Динамически создаем оверлей (затемнение фона) [cite: 323-324]
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay); [cite: 325-326]

// Функция переключения состояний меню [cite: 328]
function toggleMenu() {
    // Проверяем текущее состояние доступности (aria-expanded) [cite: 329]
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Переключаем CSS-классы для анимации кнопки и появления меню [cite: 331, 333]
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active'); [cite: 334]
    
    // Обновляем атрибут для экранных дикторов [cite: 332]
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Блокируем прокрутку страницы, когда меню открыто [cite: 335-337]
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

// Обработчики кликов на гамбургер и оверлей [cite: 340-341]
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрытие меню при выборе любого пункта навигации [cite: 342-344]
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { [cite: 346]
            toggleMenu(); [cite: 347]
        }
    });
});

// Дополнительно: закрытие меню при нажатии клавиши Escape [cite: 353-356]
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});

// Дополнительно: закрытие меню при расширении окна до десктопа [cite: 357-360]
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});


// === ЛОГИКА КНОПКИ "НАВЕРХ" ===

// Получаем кнопку [cite: 426]
const scrollTopButton = document.getElementById('scrollTop');

// Показываем кнопку только после прокрутки вниз на 300px [cite: 427]
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Плавная прокрутка к началу страницы при клике [cite: 428]
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});