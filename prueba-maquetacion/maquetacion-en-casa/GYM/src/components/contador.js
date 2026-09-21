export default (() => {

  class Contador extends HTMLElement {

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
.contador {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
	background-color: var(--color-secundario);
	padding: 1rem;
	margin: 0 10%;
	border-radius: 50px;
	box-shadow: 0px 0px 100px 20px #050505;
}


.box-contador {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-right: solid 2px var(--color-primario);
	padding: 1rem 0;
	gap: 1rem;
}

@media (max-width: 768px) {
	.box-contador {
		border-right: none;
	}
}

.box-contador:nth-child(4) {
	border-right: none;
}

.box-contador .numero-contador {
	font-size: 2.5rem;
	color: var(--color-primario);
}

.box-contador .titulo-contador {
	font-size: 1.1rem;

}

.box-contador .parrafo-contador {
	padding: 0 15%;
	text-align: center;
	color: var(--color-texto-principal);
}

  
      </style>
  <!-- Seccion contador -->
    <section class="contador">
      <div class="box-contador">
        <div class="numero-contador">
          <span>5K+</span>
        </div>
        <div class="titulo-contador">
          <h3>Current Members</h3>
        </div>
        <div class="parrafo-contador">
          <p>Showing up daily and achieving weekly goals</p>
        </div>
      </div>
      <div class="box-contador">
        <div class="numero-contador">
          <span>20+</span>
        </div>
        <div class="titulo-contador">
          <h3>weekly workouts</h3>
        </div>
        <div class="parrafo-contador">
          <p>Customized workouts for every stage of fitness</p>
        </div>
      </div>
      <div class="box-contador">
        <div class="numero-contador">
          <span>30+</span>
        </div>
        <div class="titulo-contador">
          <h3>Professional Coaches</h3>
        </div>
        <div class="parrafo-contador">
          <p>Qualified professionals focused on your growth</p>
        </div>
      </div>
      <div class="box-contador">
        <div class="numero-contador">
          <span>98%</span>
        </div>
        <div class="titulo-contador">
          <h3>Performance Rate</h3>
        </div>
        <div class="parrafo-contador">
          <p>Results that inspire confidence</p>
        </div>
      </div>
    </section>

      `

      this.menuToggle.addEventListener('click', () => {
        this.nav.classList.toggle('is-active');
      });
    }

  }

  customElements.define('contador-component', Contador);
})()