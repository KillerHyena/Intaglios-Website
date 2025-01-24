// JavaScript to toggle mobile menu with animation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to toggle the mobile navigation menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Adding animations on scroll
window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.style.animation = "fadeInUp 1.5s ease-out forwards";
    }
});
