// Legal Services Component (Combined from Capabilities, Expertise, Industries)
class LegalServices {
    constructor() {
        this.servicesContainer = document.getElementById('services-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.servicesContainer.innerHTML = `
            <section class="legal-services section-with-pattern" id="services">
                <div class="container">
                    <div class="section-header">
                        <div class="decorative-icon">⚖️</div>
                        <h2 class="section-title">Dịch Vụ Pháp Lý</h2>
                        <div class="decorative-line"></div>
                        <p class="section-subtitle">Cung cấp dịch vụ pháp lý toàn diện với đội ngũ chuyên gia hàng đầu</p>
                    </div>

                    <!-- Core Legal Services -->
                    <div class="services-section">
                        <h3 class="subsection-title">Dịch Vụ Chính</h3>
                        <div class="services-grid">
                            <div class="enhanced-card">
                                <div class="capability-number">01</div>
                                <h4>Tư Vấn</h4>
                                <ul class="service-list">
                                    <li>Luật hành chính và công</li>
                                    <li>Cạnh tranh và chống độc quyền</li>
                                    <li>An ninh mạng và bảo mật</li>
                                    <li>Bảo vệ dữ liệu cá nhân</li>
                                    <li>Tư vấn dịch vụ tài chính</li>
                                    <li>Thuế và kế hoạch thuế</li>
                                </ul>
                            </div>

                            <div class="enhanced-card">
                                <div class="capability-number">02</div>
                                <h4>Tranh Tụng</h4>
                                <ul class="service-list">
                                    <li>Dân sự</li>
                                    <li>Hình sự</li>
                                    <li>Kinh doanh thương mại</li>
                                    <li>Đất đai</li>
                                    <li>Hôn nhân</li>
                                    <li>Trọng tài quốc tế</li>
                                </ul>
                            </div>

                            <div class="enhanced-card">
                                <div class="capability-number">03</div>
                                <h4>Doanh Nghiệp M&A</h4>
                                <ul class="service-list">
                                    <li>Sáp nhập và mua bán</li>
                                    <li>Liên doanh</li>
                                    <li>Tái cơ cấu doanh nghiệp</li>
                                    <li>Quản trị công ty đại chúng</li>
                                    <li>Đầu tư nước ngoài</li>
                                    <li>Giao dịch công nghệ</li>
                                </ul>
                            </div>

                            <div class="enhanced-card">
                                <div class="capability-number">04</div>
                                <h4>Thu Hồi Công Nợ</h4>
                                <ul class="service-list">
                                    <li>Đòi nợ dân sự</li>
                                    <li>Đòi nợ thương mại</li>
                                    <li>Phá sản và thanh lý</li>
                                    <li>Thi hành án dân sự</li>
                                    <li>Đàm phán và hòa giải</li>
                                    <li>Khởi kiện và tố tụng</li>
                                </ul>
                            </div>

                            <div class="enhanced-card">
                                <div class="capability-number">05</div>
                                <h4>Sở Hữu Trí Tuệ</h4>
                                <ul class="service-list">
                                    <li>Đăng ký thương hiệu</li>
                                    <li>Bảo hộ sáng chế</li>
                                    <li>Bản quyền tác giả</li>
                                    <li>Bí mật thương mại</li>
                                    <li>Tranh chấp IP</li>
                                    <li>Chuyển giao công nghệ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add hover effects and animations
        this.servicesContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.enhanced-card, .specialized-card, .industry-highlight')) {
                const card = e.target.closest('.enhanced-card, .specialized-card, .industry-highlight');
                card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        }, true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LegalServices();
});

