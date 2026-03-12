// Shared navigation logic for all pages
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu on nav link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Back to Top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.pageYOffset > 300);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
