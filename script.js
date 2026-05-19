document.addEventListener("DOMContentLoaded", () => {

    /*
    ========================================
    MOBILE MENU
    ========================================
    */
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav__link, .nav__cta-mobile");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav--open");

            const icon = navToggle.querySelector("span");
            if (icon) {
                icon.textContent = navMenu.classList.contains("nav--open")
                    ? "close"
                    : "menu";
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu && navMenu.classList.contains("nav--open")) {
                navMenu.classList.remove("nav--open");

                const icon = navToggle?.querySelector("span");
                if (icon) icon.textContent = "menu";
            }
        });
    });


    /*
    ========================================
    FAQ ACCORDION
    ========================================
    */
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const icon = item.querySelector(".material-symbols-outlined");

            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");

                    const otherIcon = other.querySelector(".material-symbols-outlined");
                    if (otherIcon) otherIcon.textContent = "add_circle";
                }
            });

            item.classList.toggle("active");

            if (icon) {
                icon.textContent = item.classList.contains("active")
                    ? "remove_circle"
                    : "add_circle";
            }
        });
    });


    /*
    ========================================
    LOADING MODAL
    ========================================
    */
    function showLoadingModal() {
    const old = document.querySelector(".custom-loading-modal");
    if (old) old.remove();

    const modal = document.createElement("div");
    modal.className = "custom-loading-modal";

    modal.innerHTML = `
        <div class="custom-loading-modal__overlay">
            <div class="custom-loading-modal__box">
                <div class="custom-loading-modal__spinner"></div>
                <h3>Formulario enviado correctamente</h3>
                <p>Te estamos redirigiendo a WhatsApp...</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    /*
    Forzar render real antes del redirect
    */
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            modal.classList.add("show");
        });
    });
}


    /*
    ========================================
    FORMULARIO + SHEETS + WHATSAPP
    ========================================
    */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector("button[type='submit']");

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Enviando...";
            }

            const data = {
                name: document.getElementById("name").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                email: document.getElementById("email").value.trim(),
                service: document.getElementById("service").value,
                description: document.getElementById("description").value.trim()
            };

            const scriptURL = "https://script.google.com/macros/s/AKfycbxfDbPXyjsJCk1e-wdNbhbA3ksHytGNEkEtLZQ_f1yEDjwHXeyLnELAdnOOb0lV6sO3/exec";

            const whatsappNumber = "573123174919";

            const whatsappMessage = `Hola, mi nombre es ${data.name}

Teléfono: ${data.phone}
Correo: ${data.email}
Servicio de interés: ${data.service}

Requerimiento:
${data.description}`;

            try {
                /*
                ========================================
                CAMBIO IMPORTANTE:
                NO usar FormData
                NO usar mode: "no-cors"
                usar URLSearchParams
                ========================================
                */

                const body = new URLSearchParams({
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    service: data.service,
                    description: data.description
                });

                const response = await fetch(scriptURL, {
                    method: "POST",
                    body: body,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });

                const result = await response.json();

                console.log("Respuesta Apps Script:", result);

                if (!result.success) {
                    throw new Error(result.error || "No se pudo guardar en Sheets");
                }

                form.reset();

                showLoadingModal();

setTimeout(() => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappURL;
}, 3000);

            } catch (error) {
                console.error("ERROR REAL:", error);
                alert("Error enviando formulario. Revisa consola.");

            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Enviar Mensaje";
                }
            }
        });
    }


    /*
    ========================================
    WHATSAPP FLOAT
    ========================================
    */
    const whatsappFloat = document.getElementById("whatsappFloat");

    if (whatsappFloat) {
        whatsappFloat.addEventListener("click", () => {
            window.open(
                "https://wa.me/573123174919?text=Hola",
                "_blank"
            );
        });
    }


    /*
    ========================================
    GSAP
    ========================================
    */
    if (typeof gsap !== "undefined") {

        document.querySelectorAll(".service-card").forEach(card => {
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

        gsap.from(".commitment__content", {
            scrollTrigger: {
                trigger: ".commitment",
                start: "top 75%"
            },
            x: -50,
            opacity: 0,
            duration: 1
        });

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
    }


    /*
    ========================================
    HEADER SCROLL
    ========================================
    */
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

});
