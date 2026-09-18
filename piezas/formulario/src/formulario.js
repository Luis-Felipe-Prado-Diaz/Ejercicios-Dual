export default (() => {
  const enviar = document.querySelector(".btn-enviar")
  const email = document.querySelector("#email")
  const nombre = document.querySelector("#nombre")
  const apellido = document.querySelector("#apellido")
  const telefono = document.querySelector("#telefono")
  const mensaje = document.querySelector("#mensaje")

  enviar.addEventListener("click", () => {

    let name = (!nombre.value || !apellido.value || !email.value || !telefono.value || !mensaje.value);

    if (name == true) {
      // Podemos crear un evento personalizado con dispatchEvent y new CustomEvent que podrá ser escuchado 
      // por otros archivos js y utilizarlo para enviarles datos. 
      // En este caso, el evento se llamará "message" y enviará dos parámetros: "text" y "type".
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Formulario enviado correctamente',
          type: 'success'
        }
      }));
    } else {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Por favor, rellene el formulario',
          type: 'error'
        }
      }));
    }
  }
);
})()