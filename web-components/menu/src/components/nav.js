export default (() => {

  class Nav extends HTMLElement {
  
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
        .logo svg{
          width: 80px;
          cursor: pointer;
          fill: white;
        }
  
        @media screen and (max-width: 768px){
          .logo.active{
            display: none;
          }
  
          .logo{
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .logo svg{
            fill: white;
          width: 50px;
          height: 50px;
        }
      }
      nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  
}

nav ul li a{
  text-decoration: none;
  padding: 10px 0px;
}

.menu-item {
  position: relative;
  display: inline-block;
  margin: 0px 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;
  color: white;
  text-decoration: none;
  padding-bottom: 5px;
  cursor: pointer;
}

.menu-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 100%;
  width: 0;
  height: 7px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='16' height='7' %3E%3Cpath d='M0 3.5 Q4 0 8 3.5 T16 3.5' fill='none' stroke='%23f5d623' stroke-width='1.6'   /%3E%3C/svg%3E" );
  background-repeat: repeat-x;
  transition: width 0.3s ease;
}

.menu-item:hover::after {
  width: 100%;
}



      </style>
      <nav>
        <ul>
          <li><a href="#" class="menu-item">Inicio</a></li>
          <li><a href="#" class="menu-item">Sobre Mi</a></li>
          <li><a href="#" class="menu-item">Habilidades</a></li>
          <li><a href="#" class="menu-item">Proyectos</a></li>
          <li><a href="#" class="menu-item">Contacto</a></li>
        </ul>
    </nav>
      `
  
      this.shadow.querySelector('.title').addEventListener('click', () => {
        this.alertMessage()
      })
    }
  
    alertMessage() {
      alert(this.message)
    }
  }
  
  customElements.define('nav-component', Nav);
})()