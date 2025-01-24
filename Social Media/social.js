// JavaScript to handle the navigation menu toggle for mobile responsiveness
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Add active class to social media links when hovered for smooth animation effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});
