document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});
//Aqui la barra de navegacion la escondemos
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-notices', {delay: 500});
ScrollReveal().reveal('.card-banner-uno', {delay: 500});
ScrollReveal().reveal('.card-banner-dos', {delay: 500});