// JavaScript Enhancements

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Scroll-to-Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const sidebar = document.querySelector('.sidebar');

    navToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when link is clicked (mobile view)
    const navLinks = document.querySelectorAll('.sidebar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});