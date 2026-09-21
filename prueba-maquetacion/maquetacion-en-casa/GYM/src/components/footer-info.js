export default (() => {

  class FooterInfo extends HTMLElement {

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
/*       footer-info        */
/* ------------------------ */


.footer-info {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.footer-info .footer-logo {
	display: flex;
	align-items: center;
	gap: 10px;
}

.footer-info .footer-logo span {
	color: var(--color-primario);
	font-size: 1.5rem;
}

.footer-info .footer-logo svg {
	width: 40px;
	height: 40px;
	fill: var(--color-primario);
	color: var(--color-primario);
	border: 2px solid var(--color-primario);
}

.footer-info .footer-description {
	font-size: 1rem;
	font-weight: 400;
	color: var(--color-texto-principal);
}

  
      </style>
      <div class="footer-info">
        <div class="footer-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>hiking</title>
            <path
              d="M17.47 8.67H19V23H17.47V12.6C16.67 12.44 15.92 12.14 15.21 11.71S13.9 10.78 13.39 10.2L12.77 13.27L15 15.47V23H13V17L10.76 14.8L8.89 23H6.73C6.73 23 9.86 7.22 9.89 7.09C10 6.61 10.22 6.24 10.59 6C10.96 5.73 11.33 5.6 11.71 5.6C12.1 5.6 12.46 5.69 12.79 5.87C13.13 6.04 13.39 6.29 13.58 6.61L14.64 8.24C14.93 8.78 15.32 9.25 15.81 9.63S16.86 10.3 17.47 10.5V8.67M8.55 5.89L7.4 5.65C6.83 5.5 6.31 5.62 5.84 5.94C5.38 6.26 5.1 6.7 5 7.28L4.19 11.26C4.16 11.55 4.22 11.81 4.38 12.05C4.54 12.29 4.75 12.42 5 12.46L7.21 12.89L8.55 5.89M13 1C11.9 1 11 1.9 11 3S11.9 5 13 5 15 4.11 15 3 14.11 1 13 1Z" />
          </svg>
          <span>Fitova</span>
        </div>
        <div class="footer-description">
          <span>Elevate your fitness with expert virtual trainers—train anytime, anywhere.</span>
        </div>
        
      </div>
      
      `

    }

  }

  customElements.define('footer-info-component', FooterInfo);
})()