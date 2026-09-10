export default (() => {
  const btnModal = document.querySelector('.abrir-modal');
  const modal = document.querySelector('.modal');
  const btnCerrarModal = document.querySelector('.cerrar-modal');

  btnModal.addEventListener('click', () => {
    modal.classList.add('active');
  })

  btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('active');
  })
})()