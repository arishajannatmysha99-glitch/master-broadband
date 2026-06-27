/* ==========================================
   MASTER BROADBAND
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Smooth active navigation
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Package buttons
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const packageName =
                button.parentElement.querySelector("h3").innerText;

            const phone = "88017XXXXXXXX";

            const message =
                `আসসালামু আলাইকুম,\nআমি ${packageName} ইন্টারনেট প্যাকেজটি নিতে আগ্রহী।`;

            const url =
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        });
    });

    // Reveal animation
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".card, .service").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
