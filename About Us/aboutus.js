// JavaScript to toggle mobile menu with animation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to toggle the mobile navigation menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Optionally, you can add more interactivity for this page (e.g., animations on scroll)
