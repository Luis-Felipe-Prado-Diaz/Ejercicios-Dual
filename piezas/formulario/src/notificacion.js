export default (() => {

  // Podemos escuchar un evento personalizado que se ha creado en form.js refiriéndonos a él por el nombre que le dimos,
  // en este caso "message". 
  document.addEventListener("message", (event => {

    let notification = document.getElementById("notification");
    let notificationText = document.getElementById("notification.error");

    // Podemos utilizar los parámetros que se han enviado en el evento, escribiendo event.detail y a continuación el nombre del parámetro.
    if (event.detail.type === "success") {
      notification.classList.add("success");
      notificationText.innerHTML = event.detail.text;
      setTimeout(() => {
        notification.classList.remove("success");
      }, 5000);
    } else {
      notification.classList.add("error");
      notificationText.innerHTML = event.detail.text;
      setTimeout(() => {
        notification.classList.remove("error");
      }, 5000);
    }

  }));
})();