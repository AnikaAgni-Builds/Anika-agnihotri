document.addEventListener("DOMContentLoaded", () => {
    // 1. CARD SPOTLIGHT
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // 2. FOOTER GRAPHIC PULSE
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "0.8";
                entry.target.style.transform = "scale(1.1)";
            } else {
                entry.target.style.opacity = "0.4";
                entry.target.style.transform = "scale(1)";
            }
        });
    }, { threshold: 0.5 });

    const footerGraphic = document.querySelector('.footer-graphic');
    if (footerGraphic) observer.observe(footerGraphic);
});