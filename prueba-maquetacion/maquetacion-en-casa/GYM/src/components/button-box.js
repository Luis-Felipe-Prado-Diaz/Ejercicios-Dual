export default (() => {

  class ButtonBox extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.menuToggle = this.shadow.querySelector('.menu-toggle');
      this.nav = this.shadow.querySelector('header nav');
    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
      <style>
 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--color-primario: hsl(83, 83%, 52%);
	--color-secundario: hsl(0, 7%, 12%);
	--color-terciario: hsl(0, 0%, 25%);
	--color-blanco: hsl(5, 5%, 93%);
	--color-negro: hsl(0, 0%, 0%);
	--color-fondo: hsl(0, 0%, 4%);
	--color-fondo-header: hsl(0, 0%, 10%, 0.7);
	--color-texto-principal: hsl(0, 0%, 50%);
}

html {
	background-color: var(--color-fondo);
	font-size: 16px;
}

body {
	font-family: "Roboto", sans-serif;
	font-optical-sizing: auto;
	font-weight: 400;
	font-style: normal;
	font-variation-settings: "wdth" 200;
	color: var(--color-blanco);
	height: 100vh;
}

a {
	text-decoration: none;
}

ul li {
	list-style: none;
}

svg {
	width: 40px;
	height: 40px;
	cursor: pointer;
}

button {
	cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Roboto", sans-serif;
	font-optical-sizing: auto;
	font-weight: 700;
	font-style: normal;
	font-variation-settings: "wdth" 100;
}

/* ------------------------ */
/*         button-box           */
/* ------------------------ */


 .button-box a {
  text-decoration: none;
}

 .button-box a button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 35px;
  background-color: var(--color-blanco);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

 .button-box a button span svg {
  width: 15px;
  height: 15px;
}

/* --- ADAPTACIÓN MÓVIL (Menor a 768px) --- */
@media (max-width: 1200px) {

  /* Ocultar opcionalmente el botón de contacto en móvil si quitas espacio, o dejarlo visible */
  .button-box { 
		display: flex; 
	}  

   .button-box a button {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}
  
      </style>
    <div class="button-box">
      <a href="#"><button>Contact Us <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-top-right</title>
              <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
            </svg></span></button></a>
    </div>
      `

    }
  }

  customElements.define('button-box-component', ButtonBox);
})()