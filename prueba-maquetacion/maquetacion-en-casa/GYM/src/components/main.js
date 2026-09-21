export default (() => {

  class Main extends HTMLElement {

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

    </style>
    <main>
      <slot name="hero"></slot>
      <slot name="contador"></slot>
      <slot name="banner-inicio"></slot>
      <slot name="services"></slot>
      <slot name="trainer"></slot>
      <slot name="precios"></slot>
      <slot name="galeria"></slot>
    </main>
      
      `

    }

  }

  customElements.define('main-component', Main);
})()