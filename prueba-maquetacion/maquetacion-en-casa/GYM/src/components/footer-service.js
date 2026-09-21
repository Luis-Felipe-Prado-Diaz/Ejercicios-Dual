export default (() => {

  class FooterService extends HTMLElement {

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

:host {
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
/*    footer-service        */
/* ------------------------ */
 .footer-service {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

 .footer-service ul {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

  .footer-service ul li a {
	font-size: 1rem;
	color: var(--color-primario)
}

  .footer-service ul li a:hover {
	color: var(--color-terciario);
}

  
      </style>
      <div class="footer-service">
        <h4>Service</h4>
        <div class="footer-service-enlaces">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Trainer</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Pricing</a></li>
          </ul>
        </div>
      </div>
      `

    }

  }

  customElements.define('footer-service-component', FooterService);
})()