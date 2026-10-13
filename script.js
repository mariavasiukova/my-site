// Переключение темы (чёрный ↔ белый)
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '☾' : '☀';
});

// Счётчик
let count = 0;
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');

incrementBtn.addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
});