export default (() => {

  class IniciarSesion extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })

    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
      <style>
  .fill-btn{
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #D8BE22;
  padding: 16px 30px;
  background: transparent;
  border: 2px solid #D8BE22;
  transition: color 0.4s ease;
  font-weight: 700;
  border-radius: 6px;
}

.fill-btn::before{
  content: "";
  position: absolute;
  inset: 0;
  background-color: #D8BE22;
  z-index: -1;
  transform: scalex(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.fill-btn:hover{
  color: black;
  font-weight: 700;
}

.fill-btn:hover::before{
  transform: scalex(1);
  transform-origin: left; 
}
@media screen and (max-width: 768px){
  .iniciar-sesion{
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
/* activar */ 
  .iniciar-sesion.active{
    display: flex;
  }
}


       
      </style>
  
     <div class="iniciar-sesion">
      <a href="#"><button class="fill-btn">Iniciar</button></a>
      <a href="#"><button class= "fill-btn">Registrarse</button></a>
    </div>
      `

      this.shadow.querySelector('.title').addEventListener('click', () => {
        this.alertMessage()
      })
    }

    alertMessage() {
      alert(this.message)
    }
  }

  customElements.define('iniciarSesion-component', IniciarSesion);
})()