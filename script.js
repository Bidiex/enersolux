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

//Logica faq acordeon
const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(faq => {
    const btn = faq.querySelector('button');
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector('i');

    btn.addEventListener('click', () => {

        faqItems.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.querySelector(".faq-answer").classList.add("oculto");
                otherFaq.querySelector("i").classList.remove("open");
            }
        });

        answer.classList.toggle("oculto");
        icon.classList.toggle("open");
    });
});

//Logica tipos de servicios
const servicesTitle = document.getElementById("services-title");

servicesTitle.innerText = "Soluciones comerciales";

const industryServicesBtn = document.getElementById("industry-services__btn");
const homeServicesBtn = document.getElementById("home-services__btn");

const industryServicesContainer = document.getElementById("industry-services-container");
const homeServicesContainer = document.getElementById("home-services-container");

industryServicesBtn.addEventListener('click', () => {
    servicesTitle.innerText = "Soluciones comerciales";

    industryServicesBtn.classList.add("selected");
    industryServicesContainer.classList.remove("oculto");

    homeServicesBtn.classList.remove("selected");
    homeServicesContainer.classList.add("oculto");
});

homeServicesBtn.addEventListener('click', () => {
    servicesTitle.innerText = "Soluciones residenciales";

    homeServicesBtn.classList.add("selected");
    homeServicesContainer.classList.remove("oculto");

    industryServicesBtn.classList.remove("selected");
    industryServicesContainer.classList.add("oculto");
});

//Logica card details
const seeMoreLinks = document.querySelectorAll('.servicie__seemore');
const seeLessLinks = document.querySelectorAll('.servicie__seeless');

seeMoreLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const card = link.closest('.service__card');
    const details = card.querySelector('.service-details-container');

    details.classList.remove('hide');
    details.classList.add('show');
  });
});

seeLessLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const card = link.closest('.service__card');
    const details = card.querySelector('.service-details-container');

    details.classList.remove('show');
    details.classList.add('hide');
  });
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