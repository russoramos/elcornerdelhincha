// Seleccionamos todas las tarjetas con la clase .card
document.querySelectorAll('.card').forEach(card => {
  // Añadimos un evento de 'click' a cada tarjeta
  card.addEventListener('click', () => {
    alert('¡Haz hecho clic en una tarjeta!');
  });
});
