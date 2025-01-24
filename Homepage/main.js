// JavaScript to toggle mobile menu with animation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to toggle the mobile navigation menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Smooth Scroll for Navigation Links
const navItems = document.querySelectorAll('ul li a');
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = item.getAttribute('href').substring(1); // Remove '#' from href attribute
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optionally, you can add more interactivity here (e.g., form validation, animations on scroll, etc.)
