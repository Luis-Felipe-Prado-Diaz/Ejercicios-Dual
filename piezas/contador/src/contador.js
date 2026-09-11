export default (() => {
  const botonSuma = document.querySelector(".boton1 button")
  const botonResta = document.querySelector(".boton2 button")
  const input = document.querySelector(".contador input")

  botonSuma.addEventListener("click", (event) => {
    input.value++
  })

  botonResta.addEventListener("click", (event) => {
    if (input.value < 1) return;
    input.value--
  })

})()