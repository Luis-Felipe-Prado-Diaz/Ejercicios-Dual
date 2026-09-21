export default (() => {

  class Services extends HTMLElement {

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
/*       Services           */
/* ------------------------ */
.services {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
	gap: 2rem;
	margin: 0 10%;
	padding: 2rem 0;
}

@media (max-width: 768px) {
	.services {
		gap: 1rem;
		padding-top: 0;
	}
}

.service-texto {
	grid-row: 1/3;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 10rem;
}

.service-texto .service-subtitulo h3 {
	font-size: 1.2rem;
	color: var(--color-primario);
	font-style: italic;
	font-weight: 400;
}

.service-texto .service-titulo h2 {
	font-size: 2rem;
}

.service-texto .service-parrafo p {
	font-size: 1.3rem;
	font-weight: 400;
	color: var(--color-texto-principal);
}

.service-cards {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding: 2rem;
	background-color: var(--color-secundario);
	border-radius: 20px;
}


.service-cards .service-cards-button a button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	border: none;
	background-color: var(--color-primario);
	border-radius: 30px;
	width: 10rem;
}

.service-cards .service-cards-icon {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	cursor: pointer;
}

.service-cards .service-cards-icon svg {
	border-radius: 50%;
	width: 30px;
	height: 30px;
	padding: 30px;
	background-color: var(--color-terciario);
	fill: var(--color-primario);
}

.service-cards .service-cards-texto {
	grid-column: 1 / -1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

  
      </style>

<!-- Seccion services -->
    <section class="services" id="programs">
      <div class="service-texto">
        <div class="service-subtitulo">
          <h3>Programs</h3>
        </div>
        <div class="service-titulo">
          <h2>Extreme Fitness Sessions for Fast Progress</h2>
        </div>
        <div class="service-parrafo">
          <p>Our certified experts are here to match your goals from strength training to mindful yoga. Choose the one
            that fits you best.</p>
        </div>
      </div>
      <div class="service-cards">
        <div class="service-cards-button">
          <a href=""><button>Core workouts</button></a>
        </div>
        <div class="service-cards-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-top-right</title>
            <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </div>
        <div class="service-cards-texto">
          <div class="service-cards-texto-titulo">
            <h3>Balance and Flexibility</h3>
          </div>
          <div class="service-cards-texto-parrafo">
            <p>Functional fitness workouts target everyday movements, enhancing your ability to perform daily tasks. By
              using tools like kettlebells,</p>
          </div>
        </div>
      </div>
      <div class="service-cards">
        <div class="service-cards-button">
          <a href=""><button>core workouts</button></a>
        </div>
        <div class="service-cards-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-top-right</title>
            <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </div>
        <div class="service-cards-texto">
          <div class="service-cards-texto-titulo">
            <h3>Extreme Fitness Sessions for</h3>
          </div>
          <div class="service-cards-texto-parrafo">
            <p>Up for the challenge? Our HIT sessions are crafted to torch calories and boost cardiovascular fitness
              quickly. Through a mix of intense exercises and brief recov</p>
          </div>
        </div>
      </div>
      <div class="service-cards">
        <div class="service-cards-button">
          <a href=""><button>HIT</button></a>
        </div>
        <div class="service-cards-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-top-right</title>
            <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </div>
        <div class="service-cards-texto">
          <div class="service-cards-texto-titulo">
            <h3>Extreme Fitness Sessions for </h3>
          </div>
          <div class="service-cards-texto-parrafo">
            <p>Up for the challenge? Our HIT sessions are crafted to torch calories and boost cardiovascular fitness
              quickly. Through a mix of intense exercises and brief recov</p>
          </div>
        </div>
      </div>
      <div class="service-cards">
        <div class="service-cards-button">
          <a href=""><button>Applied Fitness</button></a>
        </div>
        <div class="service-cards-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-top-right</title>
            <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </div>
        <div class="service-cards-texto">
          <div class="service-cards-texto-titulo">
            <h3>Hard-wearing</h3>
          </div>
          <div class="service-cards-texto-parrafo">
            <p>Functional fitness workouts target everyday movements, enhancing your ability to perform daily tasks. By
              using tools like kettlebells,</p>
          </div>
        </div>
      </div>
    </section>
      `
    }

  }

  customElements.define('services-component', Services);
})()