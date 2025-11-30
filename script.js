document.addEventListener('DOMContentLoaded', function () {

    // =======================
    // NAVIGATION ACTIVE
    // =======================
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // =======================
    // COMPOSANTS – VERSION PRO & SOBRE
    // =======================
    const composants = [
        {
            title: "Mélatonine naturelle",
            desc: "Concentration 3 fois supérieure aux compléments du commerce"
        },
        {
            title: "Tryptophane",
            desc: "Précurseur direct de la sérotonine et de la mélatonine endogène"
        },
        {
            title: "Prostaglandines",
            desc: "Favorisent une relaxation musculaire profonde pendant le sommeil"
        },
        {
            title: "Cytokines anti-inflammatoires",
            desc: "Réduisent le cortisol circulant de 37 % en moyenne"
        }
    ];

    const grid = document.getElementById('composantsGrid');

    composants.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'composant-card';

        card.innerHTML = `
            <div class="composant-icon">
                <svg viewBox="0 0 48 48" width="42" height="42">
                    <circle cx="24" cy="24" r="19" fill="none" stroke="#d32f2f" stroke-width="2.8"/>
                    <circle cx="24" cy="24" r="10" fill="#d32f2f" opacity="0.15"/>
                    <path d="M24 10 L24 38" stroke="#d32f2f" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="composant-title">${item.title}</div>
            <div class="composant-desc">${item.desc}</div>
        `;

        // Animation d’apparition progressive
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        grid.appendChild(card);

        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 180);
    });

    // =======================
    // COMPTEURS ANIMÉS AU SCROLL
    // =======================
    const animateValue = (el, target, suffix = '') => {
        let start = 0;
        const duration = 2200;
        const step = target / (duration / 16);

        const timer = setInterval(() => {
            start += step;
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
    }, { threshold: 0.6 });

    if (document.querySelector('.results-list')) {
        observer.observe(document.querySelector('.results-list'));
    }

    // =======================
    // PARTICULES DISCRETES SUR L’IMAGE HERO
    // =======================
    const createParticle = () => {
        const p = document.createElement('div');
        p.style.cssText = `
            position:absolute;
            width:4px;height:4px;
            background:#fff;
            border-radius:50%;
            pointer-events:none;
            opacity:0.7;
            box-shadow:0 0 8px #fff;
        `;
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';

        document.querySelector('.article-image').appendChild(p);

        const anim = p.animate([
            { transform: 'translateY(0)', opacity: 0.7 },
            { transform: 'translateY(-320px)', opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'cubic-bezier(0,0.6,0.4,1)'
        });

        anim.onfinish = () => p.remove();
    };

    setInterval(createParticle, 1200);

    // Petit pulse discret sur le titre
    const title = document.querySelector('.article-title');
    let scale = 1;
    setInterval(() => {
        scale = scale === 1 ? 1.015 : 1;
        title.style.transform = `scale(${scale})`;
    }, 3000);
});
