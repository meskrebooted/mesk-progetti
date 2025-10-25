const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? 'Tema Chiaro' : 'Tema Scuro';
});