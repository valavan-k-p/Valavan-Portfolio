/* =========================================
   1. CUSTOM CURSOR LOGIC (PRIORITY #1)
   ========================================= */
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

// Only run if the cursor elements exist in HTML
if (cursor && cursor2) {
    document.addEventListener("mousemove", function(e){
        // Small dot follows instantly
        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";
        
        // Large ring follows smoothly (CSS handles transition)
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

/* =========================================
   2. MOBILE HAMBURGER MENU
   ========================================= */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

/* =========================================
   3. SMOOTH SCROLLING
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =========================================
   4. BACK TO TOP BUTTON
   ========================================= */
let backToTopBtn = document.querySelector("#back-to-top");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { 
            backToTopBtn.classList.add("active");
        } else {
            backToTopBtn.classList.remove("active");
        }
    });
}

/* =========================================
   5. LIBRARY INITIALIZATIONS
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // Initialize TypeIt (Typing Effect)
    // Checks if the element #typing-subtitle exists first
    if (document.querySelector("#typing-subtitle") && typeof TypeIt !== 'undefined') {
        new TypeIt("#typing-subtitle", {
            strings: "Bachelor of Computer Applications",
            speed: 75,
            loop: false,
        }).go();
    }

    // Initialize VanillaTilt (3D Cards)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card, .cert-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
});