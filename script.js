/* ============================================
   ❤️ MORE THAN MY BEST FRIEND - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================================
       🌸 OPENING SCREEN - HEART CLICK
       ============================================ */
    const openingScreen = document.getElementById('openingScreen');
    const openingHeart = document.getElementById('openingHeart');
    const heartWrapper = document.querySelector('.heart-wrapper');
    const mainWebsite = document.getElementById('mainWebsite');
    const musicBtn = document.getElementById('musicBtn');

    function openWebsite() {
        if (heartWrapper.classList.contains('heart-opening')) return;

        heartWrapper.classList.add('heart-opening');

        // After heart expands, hide opening screen & show main site
        setTimeout(() => {
            openingScreen.classList.add('opening-hidden');
            mainWebsite.classList.add('visible');
            musicBtn.classList.add('visible');

            // Initialize things that need the site visible
            initScrollReveal();
            initParticles();
            initStars();

            // Trigger first batch of reveals at top
            triggerTopReveals();

            // Scroll to top after opening
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }, 900);

        // Remove opening screen completely after transition
        setTimeout(() => {
            if (openingScreen.parentNode) {
                openingScreen.style.display = 'none';
            }
        }, 2000);
    }

    if (heartWrapper) {
        heartWrapper.addEventListener('click', openWebsite);
    }

    // Also allow pressing Enter / Space to open
    document.addEventListener('keydown', function (e) {
        if (!mainWebsite.classList.contains('visible') &&
            (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            openWebsite();
        }
    });

    /* ============================================
       💖 SCROLL REVEAL ANIMATIONS
       ============================================ */
    let revealObserver;

    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');

        // Fallback: show all if IntersectionObserver unsupported
        if (!('IntersectionObserver' in window)) {
            reveals.forEach(el => el.classList.add('visible'));
            return;
        }

        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });

        reveals.forEach(el => revealObserver.observe(el));
    }

    function triggerTopReveals() {
        // Immediately reveal things already in the viewport
        const reveals = document.querySelectorAll('.reveal');
        const vh = window.innerHeight;
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < vh - 60) {
                el.classList.add('visible');
            }
        });
    }

    /* ============================================
       ✨ FLOATING PARTICLES BACKGROUND
       ============================================ */
    function initParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = window.innerWidth < 640 ? 18 : 32;
        const symbols = ['❤', '•', '·', '❤', '✦'];

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('span');
            const useHeart = Math.random() < 0.35;

            if (useHeart) {
                p.className = 'particle heart-p';
                p.textContent = '❤';
                p.style.fontSize = (Math.random() * 10 + 9) + 'px';
            } else {
                p.className = 'particle';
                p.style.background = Math.random() < 0.5
                    ? 'rgba(255, 126, 185, 0.7)'
                    : 'rgba(233, 30, 99, 0.5)';
                p.style.borderRadius = '50%';
                p.style.width = p.style.height
                    = (Math.random() * 5 + 3) + 'px';
            }

            p.style.left = (Math.random() * 100) + '%';
            const duration = Math.random() * 18 + 14; // 14 - 32s
            p.style.animationDuration = duration + 's';
            p.style.animationDelay = -(Math.random() * duration) + 's';
            p.style.animationName = 'floatParticle';

            container.appendChild(p);
        }
    }

    /* ============================================
       🌙 STARS IN FINAL SECTION
       ============================================ */
    function initStars() {
        const container = document.querySelector('.final-stars');
        if (!container) return;

        const count = window.innerWidth < 640 ? 50 : 90;

        for (let i = 0; i < count; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.style.left = (Math.random() * 100) + '%';
            star.style.top = (Math.random() * 100) + '%';
            const size = Math.random() * 2.5 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.animationDelay = (Math.random() * 3) + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(star);
        }
    }

    /* ============================================
       🎵 BACKGROUND MUSIC CONTROL
       ============================================ */
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    let musicPlaying = false;

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', toggleMusic);
    }

    function toggleMusic() {
        if (!bgMusic) return;

        if (musicPlaying) {
            bgMusic.pause();
            musicPlaying = false;
            musicBtn.classList.remove('playing');
            musicIcon.textContent = '🎵';
            musicText.textContent = 'Music';
        } else {
            // Try play & handle autoplay restrictions gracefully
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicPlaying = true;
                    musicBtn.classList.add('playing');
                    musicIcon.textContent = '🎶';
                    musicText.textContent = 'Playing';
                }).catch(err => {
                    // Usually happens because no user gesture yet.
                    // Just fail silently; user can try again.
                    console.warn('Music play blocked:', err);
                    musicText.textContent = 'Tap again';
                    setTimeout(() => {
                        if (!musicPlaying) musicText.textContent = 'Music';
                    }, 2000);
                });
            }
        }
    }

    /* ============================================
       🖼️  MEMORY CARD LIGHTBOX
       ============================================ */
    const lightbox = document.getElementById('lightbox');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const memoryCards = document.querySelectorAll('.memory-card');

    memoryCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });

    function openLightbox(card) {
        const type = card.getAttribute('data-type');
        const src = card.getAttribute('data-src');
        const caption = card.getAttribute('data-caption') || '';

        lightboxMedia.innerHTML = '';

        if (type === 'video') {
            const v = document.createElement('video');
            v.src = src;
            v.controls = true;
            v.autoplay = true;
            v.playsInline = true;
            // Show placeholder on error
            v.onerror = () => {
                lightboxMedia.innerHTML = '<div style="padding:60px 40px;background:linear-gradient(135deg,#fde7ef,#ffc2d6);border-radius:12px;color:#d81b60;font-family:\'Caveat\',cursive;font-size:22px;text-align:center;">🎥<br>Add <b>videos/memory1.mp4</b> to see your video here</div>';
            };
            lightboxMedia.appendChild(v);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = caption;
            img.onerror = () => {
                lightboxMedia.innerHTML = '<div style="padding:60px 40px;background:linear-gradient(135deg,#fde7ef,#ffc2d6);border-radius:12px;color:#d81b60;font-family:\'Caveat\',cursive;font-size:22px;text-align:center;">📷<br>Add your photo to the <b>images/</b> folder</div>';
            };
            lightboxMedia.appendChild(img);
        }

        lightboxCaption.textContent = caption;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightboxMedia.innerHTML = '';
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Click outside media to close
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });

    /* ============================================
       💌 PARALLAX SOFT EFFECT ON HERO
       ============================================ */
    (function heroParallax() {
        const hero = document.querySelector('.hero-section');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.15}px)`;
                hero.style.opacity = 1 - (scrolled / (window.innerHeight * 0.9));
            }
        }, { passive: true });
    })();

    /* ============================================
       📍 ANIMATE BOND LINE ON SCROLL
       ============================================ */
    (function bondLineOnScroll() {
        const bondLine = document.getElementById('bondLine');
        const distanceSection = document.querySelector('.distance-section');
        if (!bondLine || !distanceSection || !('IntersectionObserver' in window)) return;

        const ob = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    bondLine.style.animation = 'dashDraw 3s ease forwards 0.2s';
                    ob.disconnect();
                }
            });
        }, { threshold: 0.3 });

        ob.observe(distanceSection);
    })();

});
