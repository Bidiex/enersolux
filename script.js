document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav__link, .nav__cta-mobile");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav--open");

            const icon = navToggle.querySelector("span");
            icon.textContent = navMenu.classList.contains("nav--open")
                ? "close"
                : "menu";
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("nav--open")) {
                navMenu.classList.remove("nav--open");

                if (navToggle) {
                    navToggle.querySelector("span").textContent = "menu";
                }
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const icon = item.querySelector(".material-symbols-outlined");

            // cerrar otros
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");

                    const otherIcon = otherItem.querySelector(".material-symbols-outlined");
                    if (otherIcon) {
                        otherIcon.textContent = "add_circle";
                    }
                }
            });

            // toggle actual
            item.classList.toggle("active");

            if (icon) {
                icon.textContent = item.classList.contains("active")
                    ? "remove_circle"
                    : "add_circle";
            }
        });
    });

    // Formulario + Google Sheets + WhatsApp
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const data = {
                name: document.getElementById("name").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                email: document.getElementById("email").value.trim(),
                service: document.getElementById("service").value,
                description: document.getElementById("description").value.trim()
            };

            const whatsappNumber = "573123174919";

            const whatsappMessage = `Hola, mi nombre es ${data.name}

Teléfono: ${data.phone}
Correo: ${data.email}
Servicio de interés: ${data.service}

Requerimiento:
${data.description}`;

            try {
                await fetch(
                    "https://script.google.com/macros/s/AKfycbz09DK2DOCmMuzY9d1R-8U5RLBs3xsYd2u-TnoLvJxII1TyIoeq3l-6xFvkS1CTKRS8iQ/exec",
                    {
                        method: "POST",
                        mode: "no-cors",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );

                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(whatsappURL, "_blank");

                form.reset();

            } catch (error) {
                console.error("Error enviando formulario:", error);
                alert("Ocurrió un error al enviar el formulario.");
            }
        });
    }

    const whatsappFloat = document.getElementById("whatsappFloat");

whatsappFloat.addEventListener("click", function(){
  window.open("https://wa.me/573123174919?text=Hola", "_blank")
});

    // GSAP Animations - Services
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.2)"
        });
    });

    // Commitment
    gsap.from(".commitment__content", {
        scrollTrigger: {
            trigger: ".commitment",
            start: "top 75%"
        },
        x: -50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".commitment__media", {
        scrollTrigger: {
            trigger: ".commitment",
            start: "top 75%"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });

    // FAQ Animation (sin redeclarar faqItems)
    faqItems.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%"
            },
            y: 20,
            opacity: 0,
            duration: 0.5
        });
    });

    // Header Scroll Effect
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

});
