
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('is-active');
    });

    
});
