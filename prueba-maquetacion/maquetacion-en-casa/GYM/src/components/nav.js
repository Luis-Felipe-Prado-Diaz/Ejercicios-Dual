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



/* Navegación normal (Escritorio) */
nav ul {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: var(--color-blanco);
  font-weight: 400;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: var(--color-primario);
}


/* --- ADAPTACIÓN MÓVIL (Menor a 768px) --- */
@media (max-width: 1200px) {
  
  /* El <nav> pasa a comportarse como un panel desplegable absoluto */
   nav {
    position: absolute;
    top: calc(100% + 10px); /* Se sitúa justo debajo del header flotante */
    left: 0;
    width: 100%;
    background-color: var(--color-fondo-header);
    border-radius: 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, padding 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0; /* Se ajusta con la clase activa */
  }

  nav ul li a {
    font-size: 1.1rem;
  }

  /* Clase que activa JavaScript para abrir el menú */
  nav.is-active {
    max-height: 280px; /* Altura máxima estimada para que quepan tus enlaces */
    padding: 1.5rem 0;
		background-color: var(--color-secundario);
  }

  nav.is-active ul {
		align-items: normal;
		padding-left: 20px;
	}
}
  
      </style>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#trainer">Trainer</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
    
      `

    }

  }

  customElements.define('nav-component', Nav);
})()