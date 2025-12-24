/**
 * OLHAR CRÍTICO - Main JavaScript
 * Scripts globais do site
 */

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // HERO VIDEO BACKGROUND - Random Selection
    // ==========================================

    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        // Determine path prefix based on current page location
        const isSubpage = window.location.pathname.includes('/pages/');
        const pathPrefix = isSubpage ? '../../' : '';

        const videos = [
            pathPrefix + 'assets/Videos/4646326-uhd_4096_2160_25fps.mp4',
            pathPrefix + 'assets/Videos/5473968-uhd_4096_2160_25fps.mp4',
            pathPrefix + 'assets/Videos/6968218-uhd_3840_2160_25fps.mp4',
            pathPrefix + 'assets/Videos/7290154-uhd_3840_2160_25fps.mp4',
            pathPrefix + 'assets/Videos/137868-767696342_medium.mp4',
            pathPrefix + 'assets/Videos/146644-789534309_medium.mp4',
            pathPrefix + 'assets/Videos/233037_medium.mp4'
        ];

        // Select random video
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        heroVideo.querySelector('source').src = randomVideo;
        heroVideo.load();
    }

    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================

    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    if (revealElements.length > 0) {
        window.addEventListener('scroll', checkReveal);
        checkReveal(); // Check on load
    }

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================

    const header = document.querySelector('.header');

    if (header) {
        let lastScroll = 0;
        const scrollThreshold = 5; // Minimum scroll amount to trigger hide/show

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 50) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }

            // Hide/show header based on scroll direction
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
            } else if (currentScroll < lastScroll - scrollThreshold || currentScroll < 100) {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);

                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

                    window.scrollTo({
                        top: targetPosition - headerHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // ANIMATED EYE (for Caça-Fakes pages)
    // ==========================================

    const eyePupil = document.getElementById('eyePupil');
    const eyeContainer = document.querySelector('.eye-container');

    if (eyePupil && eyeContainer) {
        document.addEventListener('mousemove', function (e) {
            const eyeRect = eyeContainer.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
            const distance = Math.min(15, Math.sqrt(Math.pow(mouseX - eyeCenterX, 2) + Math.pow(mouseY - eyeCenterY, 2)) / 10);

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            eyePupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });

        document.addEventListener('mouseout', function () {
            eyePupil.style.transform = 'translate(-50%, -50%)';
        });
    }

    // ==========================================
    // FLOATING EYES - Mouse Follow + Flee Effect
    // ==========================================

    const floatingEyes = document.querySelectorAll('.floating-eye[data-direction="follow"]');

    if (floatingEyes.length > 0) {
        // Store original positions for each eye
        const eyeData = new Map();

        floatingEyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            eyeData.set(eye, {
                originalX: rect.left + rect.width / 2,
                originalY: rect.top + rect.height / 2,
                currentOffset: { x: 0, y: 0 }
            });
        });

        // Global mouse tracking for floating eyes
        document.addEventListener('mousemove', function (e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            floatingEyes.forEach(eye => {
                const iris = eye.querySelector('.eye-iris');
                const eyeOuter = eye.querySelector('.eye-outer');

                if (!iris || !eyeOuter) return;

                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                // Distance from mouse to eye center
                const deltaX = mouseX - eyeCenterX;
                const deltaY = mouseY - eyeCenterY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                // Iris follows the mouse
                const maxIrisMove = 12;
                const irisNormalized = Math.min(distance / 200, 1);
                const irisMoveX = (deltaX / (distance || 1)) * maxIrisMove * irisNormalized;
                const irisMoveY = (deltaY / (distance || 1)) * maxIrisMove * irisNormalized;
                iris.style.transform = `translate(${irisMoveX}px, ${irisMoveY}px)`;

                // Eye flees when mouse gets close (within 200px)
                const fleeThreshold = 200;
                const maxFlee = 30;

                if (distance < fleeThreshold) {
                    const fleeStrength = 1 - (distance / fleeThreshold);
                    const fleeX = -(deltaX / (distance || 1)) * maxFlee * fleeStrength;
                    const fleeY = -(deltaY / (distance || 1)) * maxFlee * fleeStrength;
                    eye.style.transform = `translate(${fleeX}px, ${fleeY}px)`;
                } else {
                    eye.style.transform = 'translate(0, 0)';
                }
            });
        });
    }




    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================

    const scrollTopBtn = document.querySelector('.scroll-to-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ==========================================

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });

    // ==========================================
    // LAZY LOAD IMAGES
    // ==========================================

    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }

});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format numbers with thousand separators
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Get random item from array
 */
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
