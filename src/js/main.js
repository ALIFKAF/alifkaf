// Custom cursor
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        link.style.transform = 'scale(1)';
    });
});

// Parallax effect for slideshow
document.addEventListener('mousemove', (e) => {
    const slides = document.querySelectorAll('.slide');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    slides.forEach(slide => {
        slide.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Smooth reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-text, .social-icon').forEach(el => {
    observer.observe(el);
});