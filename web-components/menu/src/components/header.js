export default (() => {

  class Logo extends HTMLElement {
  
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
        
        header .logo svg{
          width: 80px;
          cursor: pointer;
          fill: white;
        }
  
        @media screen and (max-width: 768px){
          .logo.active{
            display: none;
          }
  
          .logo{
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .logo svg{
            fill: white;
          width: 50px;
          height: 50px;
        }
      }
      </style>
  
      `
  
      this.shadow.querySelector('.title').addEventListener('click', () => {
        this.alertMessage()
      })
    }
  
    alertMessage() {
      alert(this.message)
    }
  }
  
  customElements.define('logo-component', Logo);
})()