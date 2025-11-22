const menuBtn = document.getElementById('navbar__menu-btn');
const closeBtn = document.getElementById('navbar__close-btn');
const navBarContent = document.getElementById('navbar-content');
const navBarLinks = document.querySelectorAll('.navbar__link a');
const enersoluxLogo = document.getElementById('enersolux-logo');
const enersoluxLogoBlanco = document.getElementById('enersolux-logo--blanco');

navBarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navBarContent.classList.add('oculto');
        closeBtn.classList.add('oculto');
        menuBtn.classList.remove('oculto');
    })
});

menuBtn.addEventListener("click", () => {

    navBarContent.classList.remove('oculto');
    closeBtn.classList.remove('oculto');
    menuBtn.classList.add('oculto');
});

closeBtn.addEventListener("click", () => {

    navBarContent.classList.add('oculto');
    closeBtn.classList.add('oculto');
    menuBtn.classList.remove('oculto');
});


const navbarWrapper = document.querySelector('.wrapper-navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenuBtn = document.querySelector('#navbar__menu-btn');

window.addEventListener('scroll', () => {

    if (window.scrollY > 10) {

        navBarLinks.forEach(link => {
            link.classList.add('scrolled');
        });

        navbarWrapper.classList.add('scrolled');
        navbarToggle.classList.add('scrolled');
        navbarMenuBtn.classList.add('scrolled');
        closeBtn.classList.add('scrolled');

        enersoluxLogo.classList.add('oculto');
        enersoluxLogoBlanco.classList.remove('oculto');

    } else {
        navBarLinks.forEach(link => {
            link.classList.remove('scrolled');
        });

        navbarWrapper.classList.remove('scrolled');
        navbarToggle.classList.remove('scrolled');
        navbarMenuBtn.classList.remove('scrolled');
        closeBtn.classList.remove('scrolled');

        enersoluxLogo.classList.remove('oculto');
        enersoluxLogoBlanco.classList.add('oculto');

    }
});

//Lógica contacto por Whatsapp
document.getElementById("contact-btn").addEventListener("click", function () {
    let phoneNumber = "573180779665"
    let message = "¡Hola!, quisiera cotizar con ustedes"
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});

document.getElementById("navbar__contact-btn").addEventListener("click", function () {
    let phoneNumber = "573180779665"
    let message = "¡Hola!, quisiera cotizar con ustedes"
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});

document.getElementById("contact-btn-2").addEventListener("click", function () {
    let phoneNumber = "573180779665"
    let message = "¡Hola!, quisiera cotizar con ustedes"
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});