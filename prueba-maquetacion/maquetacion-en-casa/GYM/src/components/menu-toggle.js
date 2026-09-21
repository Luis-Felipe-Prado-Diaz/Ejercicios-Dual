export default (() => {

  class MenuToggle extends HTMLElement {

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
/*       menu-toggle        */
/* ------------------------ */


/* Botón de hamburguesa oculto en escritorio */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-blanco);
  cursor: pointer;
}



/* --- ADAPTACIÓN MÓVIL (Menor a 768px) --- */
@media (max-width: 1200px) {
 

  /* Mostrar el botón de hamburguesa */
  .menu-toggle {
    display: block;
  }


 
}
  
      </style>

    <button class="menu-toggle" aria-label="Abrir menú">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </button>
      `

      this.shadow.querySelector('.menu-toggle').addEventListener('click', () => {
        this.shadow.querySelector('header nav').classList.toggle('is-active');
      });
    }

  }

  customElements.define('menu-toggle-component', MenuToggle);
})()