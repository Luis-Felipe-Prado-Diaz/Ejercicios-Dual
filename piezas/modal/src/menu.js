export default (() => {
  const btnModal = document.querySelector('.abrir-modal');
  const modal = document.querySelector('.modal');
  const btnCerrarModal = document.querySelector('.cerrar-modal');
  const enviar = document.querySelector('#enviar')
 
  btnModal.addEventListener('click', () => {
    modal.classList.add('active');
  })

  btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('active');
  })

  modal.addEventListener('click', (event) => {
    if (event.target.closest(enviar)) {
      modal.classList.remove('active');
    }
    if (event.target.closest(btnCerrarModal)) {
      modal.classList.remove('active');
    }
    
  })
})()