document.addEventListener('DOMContentLoaded', () => {
    // Ensure body is visible in case it was hidden by inline CSS
    document.body.style.visibility = 'visible';

    // Smooth scroll for anchor links only
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
    
    // Add scroll animation
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .hero-content h2, .hero-content p, .hero-content button').forEach(element => {
        observer.observe(element);
    });

    // Single header scroll handler for all pages
    function handleHeaderScroll() {
        const header = document.querySelector('.header');
        const navbars = document.querySelectorAll('.header .navbar');
        const langDropdown = document.getElementById('langDropdown');
        const langDropdownMobile = document.getElementById('langDropdownMobile');

        if (window.scrollY > 30) {
            header.classList.add('scrolled');
            navbars.forEach(navbar => {
                navbar.classList.add('scrolled');
                navbar.classList.remove('navbar-dark');
                navbar.classList.add('navbar-light');
            });
            if (langDropdown) {
                langDropdown.classList.remove('btn-outline-light');
                langDropdown.classList.add('btn-outline-dark');
            }
            if (langDropdownMobile) {
                langDropdownMobile.classList.remove('btn-outline-light');
                langDropdownMobile.classList.add('btn-outline-dark');
            }
        } else {
            header.classList.remove('scrolled');
            navbars.forEach(navbar => {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('navbar-light');
                navbar.classList.add('navbar-dark');
            });
            if (langDropdown) {
                langDropdown.classList.remove('btn-outline-dark');
                langDropdown.classList.add('btn-outline-light');
            }
            if (langDropdownMobile) {
                langDropdownMobile.classList.remove('btn-outline-dark');
                langDropdownMobile.classList.add('btn-outline-light');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Initial check for header state
    handleHeaderScroll();
}); 