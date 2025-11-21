const menuBtn = document.getElementById('navbar__menu-btn');
const closeBtn = document.getElementById('navbar__close-btn');
const navBarContent = document.getElementById('navbar-content');
const navBarLinks = document.querySelectorAll('.navbar__link a');
const invioLogo = document.getElementById('invio-logo');
const invioLogoBlanco = document.getElementById('invio-logo--blanco');

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
  const isMobile = window.innerWidth < 768; // ajusta el breakpoint si es necesario

  if (window.scrollY > 10) {
    navbarWrapper.classList.add('scrolled');
    navbarToggle.classList.add('scrolled');
    navbarMenuBtn.classList.add('scrolled');
    closeBtn.classList.add('scrolled');

    if (isMobile) {
      invioLogo.classList.add('oculto');
      invioLogoBlanco.classList.remove('oculto');
    }
  } else {
    navbarWrapper.classList.remove('scrolled');
    navbarToggle.classList.remove('scrolled');
    navbarMenuBtn.classList.remove('scrolled');
    closeBtn.classList.remove('scrolled');

    if (isMobile) {
      invioLogo.classList.remove('oculto');
      invioLogoBlanco.classList.add('oculto');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".testimonial-container");
  const btnLeft = document.querySelector(".slider-arrow.left");
  const btnRight = document.querySelector(".slider-arrow.right");

  // Detectar el ancho de una tarjeta (incluyendo el gap)
  const getCardWidth = () => {
    const card = container.querySelector(".testimonial-item");
    const cardStyle = getComputedStyle(card);
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    return card.offsetWidth + gap;
  };

  btnRight.addEventListener("click", () => {
    container.scrollBy({
      left: getCardWidth(),
      behavior: "smooth"
    });
  });

  btnLeft.addEventListener("click", () => {
    container.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth"
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider-input');
  const prevBtn = document.querySelector('.arrow-prev');
  const nextBtn = document.querySelector('.arrow-next');
  const indicators = document.querySelectorAll('.indicator');
  const slideElements = document.querySelectorAll('.slide');

  let currentSlide = 3; // Empezamos en el slide 3 (índice 2, pero currentSlide usa 1-based)

  function updateSlider(slideNumber) {
    // Desmarcar todos los slides
    slides.forEach(slide => slide.checked = false);

    // Marcar el slide actual
    document.getElementById(`slide${slideNumber}`).checked = true;
    currentSlide = slideNumber;
  }

  // Navegación con flechas
  prevBtn.addEventListener('click', function () {
    const prevSlide = currentSlide > 1 ? currentSlide - 1 : 5;
    updateSlider(prevSlide);
  });

  nextBtn.addEventListener('click', function () {
    const nextSlide = currentSlide < 5 ? currentSlide + 1 : 1;
    updateSlider(nextSlide);
  });

  // Navegación con indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
      updateSlider(index + 1);
    });
  });

  // Navegación con slides clickeables
  slideElements.forEach((slide, index) => {
    slide.addEventListener('click', function () {
      updateSlider(index + 1);
    });
  });

  // Navegación con teclado
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
});

const cards = document.querySelectorAll(".card");

// Añadimos opacity en los extremos
const posiciones = [
  { x: -420, y: 150, z: -300, rotate: -35, zIndex: 1, opacity: 0 }, //160
  { x: -280, y: 70, z: -200, rotate: -22, zIndex: 2, opacity: 1 }, //80
  { x: -140, y: 30, z: -100, rotate: -12, zIndex: 3, opacity: 1 }, //40
  { x: 0, y: 10, z: 0, rotate: 0, zIndex: 4, opacity: 1 }, // centro //20
  { x: 140, y: 30, z: -100, rotate: 12, zIndex: 3, opacity: 1 }, //40
  { x: 280, y: 70, z: -200, rotate: 22, zIndex: 2, opacity: 1 }, //80
  { x: 420, y: 150, z: -300, rotate: 35, zIndex: 1, opacity: 0 } //160
];

let offset = 0;

function render() {
  cards.forEach((card, i) => {
    const pos = posiciones[(i + offset) % posiciones.length];
    card.style.transform = `
          translateX(${pos.x}px)
          translateY(${pos.y}px)
          translateZ(${pos.z}px)
          rotate(${pos.rotate}deg)
        `;
    card.style.zIndex = pos.zIndex;
    card.style.opacity = pos.opacity;
  });
}

function next() {
  offset = (offset + 1) % posiciones.length;
  render();
}

render();
setInterval(next, 2500);


//Lógica contacto por Whatsapp
document.getElementById("contact-btn").addEventListener("click", function(){
  let phoneNumber = "573180779665"
  let message = "¡Hola!, quisiera cotizar con ustedes"
  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url,"_blank");
});

document.getElementById("navbar__contact-btn").addEventListener("click", function(){
  let phoneNumber = "573180779665"
  let message = "¡Hola!, quisiera cotizar con ustedes"
  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url,"_blank");
});

document.getElementById("contact-btn-2").addEventListener("click", function(){
  let phoneNumber = "573180779665"
  let message = "¡Hola!, quisiera cotizar con ustedes"
  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url,"_blank");
});