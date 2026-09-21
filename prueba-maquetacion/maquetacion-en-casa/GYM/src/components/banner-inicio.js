export default (() => {

  class BanerInicio extends HTMLElement {

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
/*           Hero           */
/* ------------------------ */

.banner-inicio {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));
	gap: 10rem;
	margin: 0 10%;
	padding: 5rem 0;
}

@media (max-width: 768px) {
	.banner-inicio {
		gap: 3rem;
		padding-bottom: 0;
	}
}

.banner-texto {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
}


.banner-texto .banner-subtitulo h3 {
	font-size: 1.2rem;
	color: var(--color-primario);
	font-style: italic;
	font-weight: 400;

}

@media (max-width: 768px) {
	.banner-texto .banner-subtitulo h3 {
		font-size: 1rem;
	}
}

.banner-texto .banner-titulo h2 {
	font-size: 3.4rem;

}

@media (max-width: 768px) {
	.banner-texto .banner-titulo h2 {
		font-size: 1.5rem;

	}
}

.banner-texto .banner-parrafo {
	font-size: 1.3rem;
	font-weight: 400;
	color: var(--color-texto-principal);
}



.banner-imagen img {
	border-radius: 10px;
	border: solid 1px var(--color-primario);
	object-fit: cover;
	width: 100%;
}

  
      </style>
<!-- Seccion banner inicio -->

    <section class="banner-inicio" id="about">
      <div class="banner-texto">
        <div class="banner-subtitulo">
          <h3>About us</h3>
        </div>
        <div class="banner-titulo">
          <h2>Supporting Your Journey to Better Movement</h2>
        </div>
        <div class="banner-parrafo">
          <p>
            We are a team of certified fitness trainers, nutritionists, and wellness professionals committed to guiding
            your journey with evidence-based, personalized coaching.
          </p>
        </div>
      </div>
      <div class="banner-imagen">
        <img src="./imagenes/banner-inicio.webp" alt="">
      </div>
    </section>
      `

      this.menuToggle.addEventListener('click', () => {
        this.nav.classList.toggle('is-active');
      });
    }

  }

  customElements.define('banner-inicio-component', BanerInicio);
})()