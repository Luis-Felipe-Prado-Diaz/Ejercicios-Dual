export default (() => {

  class Hero extends HTMLElement {

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
/*           Hero           */
/* ------------------------ */
.hero {
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
}

@media (max-width: 768px) {
	.hero {
		height: 80vh;
	}
}

.hero-background {
	position: absolute;
	width: max-content;
	left: 55vw;
	bottom: 0%;
	overflow: hidden;
	z-index: -1;
}

.hero-background img {
	width: 60vh;
	object-fit: cover;

}

@media (max-width: 768px) {
	.hero-background img {
		object-position: top;
		width: max-content;
		height: 50vh;
	}
}

.hero .call-to-action {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	margin: 0 10%;
	padding: 15% 0;
}

@media (max-width: 768px) {
	.hero .call-to-action {
		margin: 0 5%;
		padding-top: 10rem;
		padding-bottom: 10rem;
	}
}


.hero .call-to-action .call-to-action-titulo h1 {
	font-size: 5.8rem;
	line-height: 1.2;
	padding-right: 30%;
}

@media (max-width: 768px) {
	.hero .call-to-action .call-to-action-titulo h1 {
		font-size: 2.5rem;
		line-height: 1;
	}
}



.hero .call-to-action .call-to-action-parrafo p {
	font-size: 1.5rem;
	font-weight: 400;
	padding-right: 50%;
	padding-bottom: 20px;
	color: var(--color-texto-principal);
}

@media (max-width: 768px) {
	.hero .call-to-action .call-to-action-parrafo p {
		font-size: 1.2rem;
		padding-right: 20%;
		padding-bottom: 20px;
		color: var(--color-texto-principal);
	}
}

/* botones del Hero */

.hero .call-to-action .call-to-action-botones {
	display: flex;
	gap: 10px;
}

.hero .call-to-action .call-to-action-botones a button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 18px 35px;
	border: none;
	background-color: var(--color-primario);
	border-radius: 30px;
	font-size: 1rem;
	font-weight: 600;
	font-family: "Roboto", sans-serif;
}


.hero .call-to-action .call-to-action-botones a {
	text-decoration: none;
}
  
      </style>
  
  <section class="hero">
      <div class="hero-background">
        <img src="./imagenes/chica-fondo-hero.webp" alt="">
      </div>
      <div class="call-to-action">
        <div class="call-to-action-titulo">
          <h1>TRANSFORMATION STARTS N0W</h1>
        </div>
        <div class="call-to-action-parrafo">
          <p>We provide state-of-the-art facilities, top-notch trainers, and fun classes that will keep you energized
            every day. Start your fitness journey with us now!</p>
        </div>
        <div class="call-to-action-botones">
          <a href=""><button>Join Now</button></a>
          <a href=""><button>Learn More</button></a>
        </div>
      </div>
    </section>
      `

      this.menuToggle.addEventListener('click', () => {
        this.nav.classList.toggle('is-active');
      });
    }

  }

  customElements.define('hero-component', Hero);
})()