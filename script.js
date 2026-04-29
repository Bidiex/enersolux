document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link, .nav__cta-mobile');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav--open');
            const icon = navToggle.querySelector('span');
            icon.textContent = navMenu.classList.contains('nav--open') ? 'close' : 'menu';
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav--open')) {
                navMenu.classList.remove('nav--open');
                if (navToggle) {
                    navToggle.querySelector('span').textContent = 'menu';
                }
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const icon = item.querySelector('.material-symbols-outlined');

            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.material-symbols-outlined');
                    if (otherIcon) otherIcon.textContent = 'add_circle';
                }
            });

            // Toggle current
            item.classList.toggle('active');

            // Update icon
            if (item.classList.contains('active')) {
                icon.textContent = 'remove_circle';
            } else {
                icon.textContent = 'add_circle';
            }
        });
    });

    // WhatsApp Form Logic
   const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        description: document.getElementById("description").value
    };

    const whatsappNumber = "573123174919";

    const whatsappMessage = `Hola, mi nombre es ${data.name}

Teléfono: ${data.phone}
Correo: ${data.email}
Servicio de interés: ${data.service}

Requerimiento:
${data.description}`;

    try {
        await fetch("TU_URL_DE_APPS_SCRIPT_AQUI", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Ocurrió un error al enviar el formulario.");
    }
});

        // Services (Individual Triggers)
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.1,
                ease: 'back.out(1.2)'
            });
        });

        // Commitment
        gsap.from('.commitment__content', {
            scrollTrigger: { trigger: '.commitment', start: 'top 75%' },
            x: -50, opacity: 0, duration: 1
        });
        gsap.from('.commitment__media', {
            scrollTrigger: { trigger: '.commitment', start: 'top 75%' },
            x: 50, opacity: 0, duration: 1, delay: 0.2
        });

        // FAQ
        const faqItems = document.querySelectorAll('.faq__item');
        faqItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%'
                },
                y: 20,
                opacity: 0,
                duration: 0.5
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

function sendToWhatsapp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const description = document.getElementById('description').value;

    const phoneNumber = '573123174919';

    const message = `*Solicitud de Contacto*
    
*Nombre:* ${name}
*Teléfono:* ${phone}
*Email:* ${email}
*Servicio:* ${service}
*Mensaje:* ${description}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
}
