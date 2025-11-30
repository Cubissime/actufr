document.addEventListener('DOMContentLoaded', () => {
    // Navigation active
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Composants dynamiques
    const composants = [
        { title: "Mélatonine", desc: "3 fois plus concentrée que les compléments", icon: "Moon" },
        { title: "Tryptophane", desc: "Précurseur de la sérotonine", icon: "DNA" },
        { title: "Prostaglandines", desc: "Relaxation musculaire", icon: "Muscle" },
        { title: "Cytokines", desc: "Réduction du stress", icon: "Calm" }
    ];

    const grid = document.getElementById('composantsGrid');
    composants.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'composant-card';
        card.innerHTML = `
            <div style="font-size:48px; margin-bottom:12px;">${c.icon}</div>
            <div class="composant-title">${c.title}</div>
            <div class="composant-desc">${c.desc}</div>
        `;
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        grid.appendChild(card);
        setTimeout(() => {
            card.style.transition = 'all 0.7s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 150);
    });

    // Animation des compteurs au scroll
    const animateValue = (el, target, suffix = '') => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(start) + suffix;
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.result-value').forEach(el => {
                if (el.textContent.includes('47')) animateValue(el, 47, ' minutes');
                if (el.textContent.includes('32')) animateValue(el, 32, ' %');
                if (el.textContent.includes('68')) animateValue(el, 68, ' %');
            });
            observer.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.results-list'));

    // Particules flottantes
    const createParticle = () => {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute; width:5px; height:5px; background:#fff; border-radius:50%; pointer-events:none; opacity:0.7;`;
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        document.querySelector('.article-image').appendChild(p);
        const anim = p.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
            { transform: 'translateY(-300px) rotate(360deg)', opacity: 0 }
        ], { duration: 4000 + Math.random() * 3000, easing: 'linear' });
        anim.onfinish = () => p.remove();
    };
    setInterval(createParticle, 800);
});
