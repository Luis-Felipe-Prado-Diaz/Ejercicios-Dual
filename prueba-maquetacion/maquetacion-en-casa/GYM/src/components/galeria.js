export default (() => {

  class Gallery extends HTMLElement {

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
/*           Gallery           */
/* ------------------------ */
.galery{
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
	gap: 1rem;
	margin: 0 10%;

}

.galery .galery-texto{
	grid-column: 1 / -1;
	display: flex;
	flex-direction: column;
}

.galery .galery-subtitulo h3{
	font-size: 1.5rem;
	color: var(--color-primario);
	font-style: italic;
	font-weight: 400;
}

.galery .galery-titulo h2{
	font-size: 2rem;
}

.galery .galery-parrafo p{
	font-size: 1.3rem;
	font-weight: 400;
	color: var(--color-texto-principal);
}

.galery .galery-imagenes picture img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 6px;
	border: 1px var(--color-primario) solid;
	box-shadow: 0 0 10px var(--color-primario);
}

.galery .galery-imagenes{
	padding-bottom: 3rem;
	max-height: 60vh;
	max-width: auto;
}
@media (max-width: 768px) {
.galery .galery-imagenes{
	padding-bottom: 0.5rem;
	max-height: 60vh;
	max-width: auto;
	display: flex;
	flex-direction: column;
	align-items: center; 
	
}
}

.galery .galery-imagenes:nth-child(2){
	grid-column: 1 / 3;
}
@media (max-width: 768px) {
	
.galery .galery-imagenes:nth-child(2){
	grid-column: 1 / -1;
}
}

.galery .galery-imagenes:nth-child(3){
grid-column: 3 / 4;
}
@media (max-width: 768px) {
	
.galery .galery-imagenes:nth-child(3){
grid-column: 1 / -1;
}
}

.galery .galery-imagenes:nth-child(4){
grid-column: 1 / 2;
}
@media (max-width: 768px) {

.galery .galery-imagenes:nth-child(4){
	grid-column: 1 / -1;
}
}

.galery .galery-imagenes:nth-child(5){
grid-column: 2 / 4;
}
@media (max-width: 768px) {

.galery .galery-imagenes:nth-child(5){
	grid-column: -3 /-1 ;
}
}

</style>

<section class="galery">
      <div class="galery-texto">
        <div class="galery-subtitulo">
          <h3>Gallery </h3>
        </div>
        <div class="galery-titulo">
          <h2>Our Event and Photo Gallery</h2>
        </div>
        <div class="galery-parrafo">
          <p>Browse our certified experts and choose the one that matches your goals, from strength training to yoga.</p>
        </div>
      </div>
      <div class="galery-imagenes">
        <picture>
          <source srcset="">
          <img src="./imagenes/foto-gym-1.webp" alt="">
        </picture>
      </div>
      <div class="galery-imagenes">
        <picture>
          <source srcset="">
          <img src="./imagenes/foto-gym-2.webp" alt="">
        </picture>
      </div>
      <div class="galery-imagenes">
        <picture>
          <source srcset="">
          <img src="./imagenes/foto-gym-3.webp" alt="">
        </picture>
      </div>
      <div class="galery-imagenes">
        <picture>
          <source srcset="">
          <img src="./imagenes/foto-gym-4.webp" alt="">
        </picture>
      </div>
    </section>

      `

    }

  }

  customElements.define('gallery-component', Gallery);
})()