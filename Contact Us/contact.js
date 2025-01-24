// JavaScript to toggle mobile menu with animation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to toggle the mobile navigation menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the form data (you can add more checks as necessary)
    if (name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
        contactForm.reset(); // Reset the form after successful submission
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
