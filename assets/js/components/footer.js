// Footer Component
class Footer {
    constructor() {
        this.footerContainer = document.getElementById('footer-container');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.footerContainer.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Về Chúng Tôi</h4>
                        <p style="color: rgba(255,255,255,0.8); line-height: 1.7;">
                            Công ty luật hàng đầu với hơn 15 năm kinh nghiệm cung cấp dịch vụ pháp lý chuyên nghiệp.
                        </p>
                    </div>
                    <div class="footer-section">
                        <h4>Dịch Vụ</h4>
                        <ul>
                            <li><a href="#">Tư vấn & Quy định</a></li>
                            <li><a href="#">Thị trường Vốn</a></li>
                            <li><a href="#">Doanh nghiệp & M&A</a></li>
                            <li><a href="#">Tranh tụng</a></li>
                            <li><a href="#">Tài chính</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Chuyên Môn</h4>
                        <ul>
                            <li><a href="#">Luật Dân sự</a></li>
                            <li><a href="#">Luật Doanh nghiệp</a></li>
                            <li><a href="#">Luật Hình sự</a></li>
                            <li><a href="#">Sở hữu Trí tuệ</a></li>
                            <li><a href="#">Luật Bất động sản</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Liên Hệ</h4>
                        <ul>
                            <li><a href="tel:+84123456789">+84 123 456 789</a></li>
                            <li><a href="mailto:info@lawfirm.vn">info@lawfirm.vn</a></li>
                            <li><a href="#">Hà Nội, Việt Nam</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Law Firm. Tất cả quyền được bảo lưu.</p>
                </div>
            </footer>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});
