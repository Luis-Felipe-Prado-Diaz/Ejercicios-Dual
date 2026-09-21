export default (() => {

  class Menu extends HTMLElement {

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
/*         Header           */
/* ------------------------ */

.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10%;
  background-color: var(--color-fondo-header);
  padding: 1rem 2rem;
  border-radius: 50px;
  top: 2rem;
  left: 0;
  width: 80%;
  z-index: 20;
}

/* --- ADAPTACIÓN MÓVIL (Menor a 768px) --- */
@media (max-width: 1200px) {
  .header {
    width: 90%;
    margin: 0 5%;
    padding: 0.8rem 1.5rem;
    border-radius: 25px; /* Bordes ligeramente más rectos para ganar espacio */
    flex-wrap: wrap;     /* Permite que los elementos se organicen al abrir el menú */
  }
}
  
      </style>
  <div class="header">
  <slot name="logo"></slot>
  <slot name="toggle"></slot>
  <slot name="nav"></slot>
  <slot name="button"></slot> 
  </div>
      `

      this.menuToggle.addEventListener('click', () => {
        this.nav.classList.toggle('is-active');
      });
    }

  }

  customElements.define('menu-component', Menu);
})()