// Mega Menu Component
class MegaMenu {
    constructor() {
        this.megaMenuContainer = document.getElementById('mega-menu-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.megaMenuContainer.innerHTML = `
            <div class="mega-menu-overlay" id="megaMenu">
                <div class="mega-menu-content">
                    <!-- Mobile Navigation Links -->
                    <div class="mobile-nav-links">
                        <a href="#home" class="mobile-nav-link">Trang Chủ</a>
                        <a href="#about" class="mobile-nav-link">About VNLC</a>
                        <div class="mobile-nav-dropdown">
                            <a href="#" class="mobile-nav-link mobile-dropdown-trigger">Dịch vụ pháp lý <span class="mobile-dropdown-arrow">▼</span></a>
                            <div class="mobile-dropdown-menu">
                                <a href="service-detail.html?id=tu-van-doanh-nghiep" class="mobile-nav-link">Tư vấn Doanh nghiệp</a>
                                <a href="service-detail.html?id=tu-van-so-huu-tri-tue" class="mobile-nav-link">Tư vấn Sở hữu trí tuệ</a>
                                <a href="service-detail.html?id=tu-van-phap-luat-dan-su" class="mobile-nav-link">Tư vấn pháp luật Dân sự</a>
                                <a href="service-detail.html?id=tu-van-phap-luat-hinh-su" class="mobile-nav-link">Tư vấn pháp luật Hình sự</a>
                            </div>
                        </div>
                        <a href="#people" class="mobile-nav-link">Our People</a>
                        <a href="achievements.html" class="mobile-nav-link">Thành tựu</a>
                        <a href="#contact" class="mobile-nav-link">Liên Hệ</a>
                    </div>

                </div>
            </div>
        `;
    }

    bindEvents() {
        // Mobile dropdown toggle
        setTimeout(() => {
            const dropdownTrigger = this.megaMenuContainer.querySelector('.mobile-dropdown-trigger');
            if (dropdownTrigger) {
                dropdownTrigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    const dropdown = dropdownTrigger.closest('.mobile-nav-dropdown');
                    if (dropdown) {
                        dropdown.classList.toggle('active');
                    }
                });
            }
        }, 100);

        // Close mega menu when clicking on a menu item or mobile nav link
        this.megaMenuContainer.addEventListener('click', (e) => {
            if (e.target.closest('.mega-menu-item')) {
                this.toggle();
            }
            // Don't close when clicking dropdown trigger
            if (e.target.closest('.mobile-nav-link') && !e.target.closest('.mobile-dropdown-trigger')) {
                if (!e.target.closest('.mobile-dropdown-menu')) {
                    this.toggle();
                }
            }
        });

        // Close mega menu when clicking on overlay
        this.megaMenuContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('mega-menu-overlay')) {
                this.toggle();
            }
        });
    }

    toggle() {
        const megaMenu = document.getElementById('megaMenu');
        const menuToggle = document.querySelector('.menu-toggle');
        megaMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = megaMenu.classList.contains('active') ? 'hidden' : 'auto';
    }
}

// Global function for menu toggle
function toggleMegaMenu() {
    window.megaMenuInstance.toggle();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.megaMenuInstance = new MegaMenu();
});
