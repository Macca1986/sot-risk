// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add hover effect to services
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.transform = 'scale(1.05)';
        service.style.transition = '0.3s ease-in-out';
    });
    service.addEventListener('mouseleave', () => {
        service.style.transform = 'scale(1)';
    });
});

// Change menu item color on hover
document.querySelectorAll('.nav-links li a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'rgb(0, 29, 75)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = ''; // Resets to default color
    });
});
