document.addEventListener('DOMContentLoaded', () => {
  console.log('Sitio cargado por Codex');
  const form = document.querySelector('.contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensaje enviado (demostración)');
    });
  }
});
