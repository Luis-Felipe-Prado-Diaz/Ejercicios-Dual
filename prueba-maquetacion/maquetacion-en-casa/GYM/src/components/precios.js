export default (() => {

  class Precios extends HTMLElement {

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
/*           Precios           */
/* ------------------------ */
.pricing {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
	grid-row-gap: 2rem;
	grid-column-gap: 1rem;
	margin: 0 10%;
	padding: 5rem 0;
}

.pricing-texto {
	grid-column: 1 / -1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.pricing-texto .pricing-subtitulo h3 {
	font-size: 1.5rem;
	color: var(--color-primario);
	font-style: italic;
	font-weight: 400;
}

.pricing-texto .pricing-titulo h2 {
	font-size: 2rem;
}

.pricing-texto .pricing-parrafo p {
	font-size: 1.3rem;
	font-weight: 400;
	color: var(--color-texto-principal);
}

.tarjeta-precio {
	margin: 0 5%;
	background-color: var(--color-secundario);
	border-radius: 6px;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	box-shadow:
		1px 17px 17px -14px var(--color-primario);
}

.tarjeta-precio .tarjeta-texto .tarjeta-titulo {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 600;
	color: var(--color-primario);
	padding-bottom: 2rem;
	border-bottom: solid 1px var(--color-primario);
}

.tarjeta-precio .tarjeta-texto .tarjeta-subtitulo {
	font-size: 1.2rem;
	padding-top: 0.5rem;
}

.tarjeta-precio .tarjeta-texto .tarjeta-subtitulo span {
	font-size: 1.7rem;
	color: var(--color-primario);
}

.tarjeta-precio .tarjeta-texto .tarjeta-parrafo p {
	font-size: 1rem;
	font-weight: 400;
	color: var(--color-texto-principal);
	padding-bottom: 0.8rem;
	padding-top: 0.5rem;
}

.tarjeta-anuncios {
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	border-top: solid 1px var(--color-primario);
	gap: 1rem;
}

.tarjeta-anuncio {
	display: flex;
	align-items: center;
	gap: 3rem 2rem;

}



.tarjeta-anuncio-icono svg {
	width: 30px;
	height: 30px;
	fill: var(--color-primario);
}

.tarjeta-precio .tarjeta-button {
	display: flex;
	flex-direction: column;
	height: 50%;
	justify-content: center;
}

.tarjeta-precio .tarjeta-button a {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;

}


.tarjeta-button a button {
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: var(--color-primario);
	width: 90%;
	padding: 0.7rem;
	border-radius: 30px;
	font-weight: 400;
	font-size: 1.4rem;
	cursor: pointer;
}


  
      </style>
  
  <!-- seccion de precios -->
    <section class="pricing" id="pricing">
      <div class="pricing-texto">
        <div class="pricing-subtitulo">
          <h3>Pricing</h3>
        </div>
        <div class="pricing-titulo">
          <h2>Select Your Workouts Program</h2>
        </div>
        <div class="pricing-parrafo">
          Browse our certified experts and choose the one that matches your goals, from strength training to yoga.
        </div>
      </div>
      <div class="tarjeta-precio">
        <div class="tarjeta-texto">
          <div class="tarjeta-titulo">
            <h3>Basic Plan</h3>
          </div>
          <div class="tarjeta-subtitulo">
            <h4><span>$32</span>per month</h4>
          </div>
          <div class="tarjeta-parrafo">
            <p>Perfect for beginners who want to explore guided workouts and track basic progress.</p>
          </div>
        </div>
        <div class="tarjeta-anuncios">
          <!-- Targeta anuncio 1 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Gym entry hours begin from</h4>
            </div>
          </div>
          <!--targeta anuncio 2  -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>The trainer on duty will show you around</h4>
            </div>
          </div>
          <!-- targeta anuncio 3 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized small-group coaching</h4>
            </div>
          </div>
          <!-- targeta anuncio 4 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized Training Program</h4>
            </div>
          </div>
          <!-- targeta anuncio 5 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Expert Trainer Guidance</h4>
            </div>
          </div>
        </div>
        <div class="tarjeta-button">
          <a href=""><button>See Plan</button></a>
        </div>
      </div>
      <div class="tarjeta-precio">
        <div class="tarjeta-texto">
          <div class="tarjeta-titulo">
            <h3>Standard Plan</h3>
          </div>
          <div class="tarjeta-subtitulo">
            <h4><span>$90</span>per month</h4>
          </div>
          <div class="tarjeta-parrafo">
            <p>Get matched with your personal trainer and track your results with detailed analytics.</p>
          </div>
        </div>

        <div class="tarjeta-anuncios">
          <!-- targeta anuncio 1 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Full access around the clock</h4>
            </div>
          </div>
          <!-- targeta anuncio 2 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Mini group sessions running until 5:00 PM</h4>
            </div>
          </div>
          <!-- targeta anuncio 3 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized small-group coaching (3 people)</h4>
            </div>
          </div>
          <!-- targeta anuncio 4 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Membership active without interruption</h4>
            </div>
          </div>
          <!-- targeta anuncio 5 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized Training Program</h4>
            </div>
          </div>
          <!-- targeta anuncio 6 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Expert Trainer Guidance</h4>
            </div>
          </div>
        </div>
        <div class="tarjeta-button">
          <a href=""><button>See Plan</button></a>
        </div>
      </div>
      <div class="tarjeta-precio">
        <div class="tarjeta-texto">
          <div class="tarjeta-titulo">
            <h3>Basic Plan</h3>
          </div>
          <div class="tarjeta-subtitulo">
            <h4><span>$120</span>per month</h4>
          </div>
          <div class="tarjeta-parrafo">
            <p>Designed for those who want full customization and real-time coaching support.</p>
          </div>
        </div>
        <div class="tarjeta-anuncios">
          <!-- targeta anuncio 1 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Full access around the clock</h4>
            </div>
          </div>
          <!-- targeta anuncio 2 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Mini group sessions running until 5:00 PM</h4>
            </div>
          </div>
          <!-- targeta anuncio 3 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized small-group coaching (3 people)</h4>
            </div>
          </div>
          <!-- targeta anuncio 4 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Membership active without interruption</h4>
            </div>
          </div>
          <!-- targeta anuncio 5 -->
          <div class="tarjeta-anuncio">
            <div class="tarjeta-anuncio-icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div class="tarjeta-anuncio-texto">
              <h4>Personalized Training Program</h4>
            </div>
          </div>
        </div>
        <div class="tarjeta-button">
          <a href=""><button>See Plan</button></a>
        </div>
      </div>
    </section>
      `
    }

  }

  customElements.define('precios-component', Precios);
})()