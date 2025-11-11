// Main JavaScript file
class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupScrollProgress();
        this.setupHeaderEffects();
        this.setupSmoothScrolling();
        this.setupKeyboardNavigation();
        this.setupActiveNavigation();
    }

    // Scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // Scroll progress bar
    setupScrollProgress() {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = scrolled + '%';
            }
        });
    }

    // Header scroll effects
    setupHeaderEffects() {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
            }

            lastScroll = currentScroll;
        });
    }

    // Smooth scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    // Close mega menu if open
                    const megaMenu = document.getElementById('megaMenu');
                    if (megaMenu && megaMenu.classList.contains('active')) {
                        if (window.megaMenuInstance) {
                            window.megaMenuInstance.toggle();
                        }
                    }
                }
            });
        });
        
        // Handle hash on page load
        if (window.location.hash) {
            // Wait for page to fully load and dynamic content to render
            const scrollToHash = () => {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    return true;
                }
                return false;
            };
            
            // Try immediately, then after a delay for dynamic content
            if (!scrollToHash()) {
                setTimeout(() => {
                    scrollToHash();
                }, 500);
            }
        }
    }

    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const megaMenu = document.getElementById('megaMenu');
                if (megaMenu && megaMenu.classList.contains('active')) {
                    if (window.megaMenuInstance) {
                        window.megaMenuInstance.toggle();
                    }
                }
            }
        });
    }

    // Active navigation based on scroll position
    setupActiveNavigation() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.style.color = 'var(--navy)';
                    });
                    if (navLink) {
                        navLink.style.color = 'var(--gold)';
                    }
                }
            });
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
