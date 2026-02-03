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
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendToWhatsapp();
        });
    }

    // WhatsApp Floating Button
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', (e) => {
            e.preventDefault();
            // Use the number requested by user: 3156290330
            const phone = '573156290330';
            const text = encodeURIComponent('Hola Enersolux, estoy interesado en sus servicios.');
            window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        });
    }
    // GSAP Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero
        const tl = gsap.timeline();
        tl.from('.hero__content', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
            .from('.hero__bg', { scale: 1.1, duration: 1.5, ease: 'power2.out' }, '-=1');

        // Why Us Cards (Individual Triggers)
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.1,
                ease: 'power3.out'
            });
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

    const phoneNumber = '573156290330';

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
