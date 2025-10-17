// --- Mobile Hamburger Menu Logic ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- AOS (Animate on Scroll) Initialization ---
AOS.init({
    duration: 1000,
    once: true,
});

// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Back to Top Button Logic ---
let backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show the button after scrolling down 300px
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }
});

// --- Live Typing Effect Logic ---
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing-subtitle", {
        strings: "Bachelor of Computer Applications",
        speed: 75,
        loop: false,
    }).go();
});