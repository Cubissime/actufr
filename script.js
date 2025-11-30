// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation active
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Données des composants actifs
    const composants = [
        { title: 'Mélatonine', desc: '3 fois plus concentrée que les compléments', icon: '🌙' },
        { title: 'Tryptophane', desc: 'Précurseur de la sérotonine', icon: '🧬' },
        { title: 'Prostaglandines', desc: 'Relaxation musculaire', icon: '💪' },
        { title: 'Cytokines', desc: 'Réduction du stress', icon: '🧘' }
    ];

    // Générer les cartes de composants
    const composantsGrid = document.getElementById('composantsGrid');
    composants.forEach((composant, index) => {
        const card = document.createElement('div');
        card.className = 'composant-card';
        card.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 12px;">${composant.icon}</div>
            <div class="composant-title">${composant.title}</div>
            <div class="composant-desc">${composant.desc}</div>
        `;
        
        // Animation d'apparition progressive
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        composantsGrid.appendChild(card);
        
        // Déclencher l'animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
        
        // Effet hover personnalisé
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #fff5f5, #ffebee)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'white';
        });
    });

    // Animation des résultats
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });

    // Animation du compteur des résultats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            if (element.classList.contains('result-value')) {
                if (element.textContent.includes('%')) {
                    element.textContent = Math.floor(start) + '%';
                } else if (element.textContent.includes('minutes')) {
                    element.textContent = Math.floor(start) + ' minutes';
                } else {
                    element.textContent = '-' + Math.floor(start) + '%';
                }
            }
        }, 16);
    }

    // Déclencher l'animation des compteurs au scroll
    const resultsList = document.querySelector('.results-list');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const values = entry.target.querySelectorAll('.result-value');
                values.forEach(value => {
                    if (value.textContent.includes('+47')) animateCounter(value, 47);
                    if (value.textContent.includes('+32')) animateCounter(value, 32);
                    if (value.textContent.includes('-68')) animateCounter(value, 68);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(resultsList);

    // Effet de particules sur l'image principale
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255,255,255,0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `;
        
        const articleImage = document.querySelector('.article-image');
        articleImage.appendChild(particle);
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        
        const duration = Math.random() * 3 + 2;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Créer des particules périodiquement
    setInterval(createParticle, 1500);

    // Ajouter les keyframes pour les particules
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll pour les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Effet de lecture automatique du titre
    const title = document.querySelector('.article-title');
    let titleScale = 1;
    setInterval(() => {
        titleScale = titleScale === 1 ? 1.02 : 1;
        title.style.transform = `scale(${titleScale})`;
    }, 2000);
});
