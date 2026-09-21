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
  
      <div class="logo">
        <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cards-playing</title><path d="M14.7 2.2H16.2C17.3 2.2 18.2 3.1 18.2 4.2V10.6L14.7 2.2M20.1 3.8L21.4 4.4C22.4 4.8 22.9 6 22.5 7L20.1 12.9V3.8M18 15.5L13 3.5C12.7 2.7 12 2.3 11.2 2.3C10.9 2.3 10.7 2.4 10.4 2.5L3 5.5C2 5.9 1.5 7 2 8L7 20C7.3 20.8 8 21.2 8.8 21.2C9.1 21.2 9.3 21.2 9.6 21L17 18C17.8 17.7 18.2 17 18.2 16.2C18.1 16 18.1 15.7 18 15.5M11.4 15L8.2 12.6L8.6 8.6L11.8 11L11.4 15" /></svg></a>
      </div>
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
