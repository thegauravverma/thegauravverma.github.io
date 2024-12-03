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

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

next.addEventListener('click', () => {
  if (counter >= images.length -1) return; // Stop at the last image
  slides.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
  if (counter <= 0) return; // Stop at the first image
  slides.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});