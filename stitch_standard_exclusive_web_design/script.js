document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll para enlaces internos
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Considerar la altura del header (80px) al hacer scroll
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Intersection Observer para animaciones al hacer scroll
    const animationObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Gatillar cuando el 15% del elemento es visible
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: Dejar de observar el elemento una vez que ya se animó
                // observer.unobserve(entry.target);
            }
        });
    }, animationObserverOptions);

    // Seleccionar todos los elementos que deben animarse
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-down');
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Animar el header inmediatamente al cargar
    setTimeout(() => {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.add('is-visible');
        }
    }, 100);
});
