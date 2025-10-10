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
                        <a href="#services" class="mobile-nav-link">Dịch Vụ Pháp Lý</a>
                        <a href="#about" class="mobile-nav-link">About VNLC</a>
                        <a href="#people" class="mobile-nav-link">Our People</a>
                        <a href="#achievements" class="mobile-nav-link">Thành Tựu</a>
                        <a href="#contact" class="mobile-nav-link">Liên Hệ</a>
                    </div>

                    <!-- Desktop Mega Menu Content -->
                    <div class="mega-menu-desktop-content">
                        <div class="mega-menu-section">
                            <h3 class="mega-menu-title">Dịch Vụ Pháp Lý</h3>
                            <div class="mega-menu-grid">
                                <div class="mega-menu-item">
                                    <h4>Tư Vấn & Quy Định</h4>
                                    <p>Tuân thủ pháp luật, tư vấn chiến lược và đánh giá rủi ro</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Thị Trường Vốn</h4>
                                    <p>Phát hành chứng khoán, nợ, và các công cụ tài chính</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Doanh Nghiệp & M&A</h4>
                                    <p>Sáp nhập, mua bán và tái cơ cấu doanh nghiệp</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Tranh Tụng</h4>
                                    <p>Đại diện tại tòa án và trọng tài quốc tế</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Tài Chính</h4>
                                    <p>Cho vay, tài chính dự án và tái cấu trúc nợ</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Sở Hữu Trí Tuệ</h4>
                                    <p>Bảo hộ thương hiệu, sáng chế và bản quyền</p>
                                </div>
                            </div>
                        </div>

                        <div class="mega-menu-section">
                            <h3 class="mega-menu-title">Chuyên Môn Cụ Thể</h3>
                            <div class="mega-menu-grid">
                                <div class="mega-menu-item">
                                    <h4>Luật Hành Chính</h4>
                                    <p>Tư vấn về quyền hành chính và quy định công</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Cạnh Tranh</h4>
                                    <p>Luật chống độc quyền và cạnh tranh không lành mạnh</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Trí Tuệ Nhân Tạo</h4>
                                    <p>Tư vấn về AI, dữ liệu và công nghệ mới</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>An Ninh Mạng</h4>
                                    <p>Bảo mật dữ liệu và ứng phó sự cố mạng</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Bảo Vệ Dữ Liệu</h4>
                                    <p>GDPR, quyền riêng tư và quản lý dữ liệu</p>
                                </div>
                                <div class="mega-menu-item">
                                    <h4>Môi Trường</h4>
                                    <p>Luật môi trường và phát triển bền vững</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Close mega menu when clicking on a menu item or mobile nav link
        this.megaMenuContainer.addEventListener('click', (e) => {
            if (e.target.closest('.mega-menu-item') || e.target.closest('.mobile-nav-link')) {
                this.toggle();
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
