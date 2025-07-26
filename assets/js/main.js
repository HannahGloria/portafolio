document.addEventListener('DOMContentLoaded', function() {
  const htmlEl = document.documentElement;
  const modeIcon = document.getElementById('modeIcon');
  const toggleBtn = document.getElementById('toggleMode');

  // Inicializa el modo oscuro por defecto
  htmlEl.setAttribute('data-bs-theme', 'dark');

  // Actualiza el icono según el modo
  function updateIcon() {
    if (htmlEl.getAttribute('data-bs-theme') === 'dark') {
      modeIcon.textContent = '🌙';
    } else {
      modeIcon.textContent = '☀️';
    }
  }

  updateIcon();

  toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-bs-theme');
    htmlEl.setAttribute('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark');
    updateIcon();
  });
});