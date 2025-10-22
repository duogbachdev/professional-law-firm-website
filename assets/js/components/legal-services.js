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

                    <!-- Specialized Legal Areas -->
                    <div class="services-section">
                        <h3 class="subsection-title">Chuyên Môn Chi Tiết</h3>
                        <div class="specialized-grid">
                            <div class="specialized-card">
                                <div class="category-icon">⚖️</div>
                                <h4>Luật Dân Sự</h4>
                                <ul class="category-services">
                                    <li>Tranh chấp hợp đồng</li>
                                    <li>Bồi thường thiệt hại</li>
                                    <li>Quyền sở hữu và tài sản</li>
                                    <li>Thừa kế và di chúc</li>
                                    <li>Quan hệ gia đình</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">🏢</div>
                                <h4>Luật Doanh Nghiệp</h4>
                                <ul class="category-services">
                                    <li>Thành lập doanh nghiệp</li>
                                    <li>Quản trị công ty</li>
                                    <li>Hợp đồng thương mại</li>
                                    <li>Tuân thủ doanh nghiệp</li>
                                    <li>Giải thể và thanh lý</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">👨‍⚖️</div>
                                <h4>Luật Hình Sự</h4>
                                <ul class="category-services">
                                    <li>Bảo vệ quyền bị can/bị cáo</li>
                                    <li>Đại diện bị hại</li>
                                    <li>Tội phạm kinh tế</li>
                                    <li>Tội phạm công nghệ</li>
                                    <li>Kháng cáo và tái thẩm</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">💡</div>
                                <h4>Sở Hữu Trí Tuệ</h4>
                                <ul class="category-services">
                                    <li>Đăng ký thương hiệu</li>
                                    <li>Bảo hộ sáng chế</li>
                                    <li>Bản quyền tác giả</li>
                                    <li>Bí mật thương mại</li>
                                    <li>Tranh chấp IP</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">🏠</div>
                                <h4>Luật Bất Động Sản</h4>
                                <ul class="category-services">
                                    <li>Mua bán BĐS</li>
                                    <li>Cho thuê và chuyển nhượng</li>
                                    <li>Phát triển dự án</li>
                                    <li>Quyền sử dụng đất</li>
                                    <li>Tranh chấp BĐS</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">👥</div>
                                <h4>Luật Lao Động</h4>
                                <ul class="category-services">
                                    <li>Hợp đồng lao động</li>
                                    <li>Tranh chấp lao động</li>
                                    <li>Chính sách nhân sự</li>
                                    <li>Bảo hiểm xã hội</li>
                                    <li>Thôi việc và sa thải</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">🌐</div>
                                <h4>Luật Công Nghệ</h4>
                                <ul class="category-services">
                                    <li>Hợp đồng phần mềm</li>
                                    <li>E-commerce</li>
                                    <li>Fintech và Blockchain</li>
                                    <li>Trí tuệ nhân tạo</li>
                                    <li>Bảo mật dữ liệu</li>
                                </ul>
                            </div>

                            <div class="specialized-card">
                                <div class="category-icon">💰</div>
                                <h4>Luật Thuế</h4>
                                <ul class="category-services">
                                    <li>Kế hoạch thuế</li>
                                    <li>Tuân thủ thuế</li>
                                    <li>Tranh chấp thuế</li>
                                    <li>Thuế doanh nghiệp</li>
                                    <li>Chuyển giá</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Industry Experience -->
                    <div class="services-section">
                        <h3 class="subsection-title">Kinh Nghiệm Ngành Nghề</h3>
                        <div class="industries-showcase">
                            <div class="industry-highlight">
                                <div class="industry-icon">🏦</div>
                                <h4>Dịch Vụ Tài Chính</h4>
                                <p>Ngân hàng, bảo hiểm, quản lý tài sản và fintech với hiểu biết sâu về quy định và thị trường.</p>
                            </div>
                            <div class="industry-highlight">
                                <div class="industry-icon">💻</div>
                                <h4>Công Nghệ</h4>
                                <p>Startup công nghệ, doanh nghiệp phần mềm, AI và chuyển đổi số trong mọi lĩnh vực.</p>
                            </div>
                            <div class="industry-highlight">
                                <div class="industry-icon">⚡</div>
                                <h4>Năng Lượng</h4>
                                <p>Dầu khí, năng lượng tái tạo, điện lực và các dự án cơ sở hạ tầng năng lượng lớn.</p>
                            </div>
                            <div class="industry-highlight">
                                <div class="industry-icon">🏥</div>
                                <h4>Y Tế & Khoa Học Đời Sống</h4>
                                <p>Dược phẩm, thiết bị y tế, công nghệ sinh học và dịch vụ chăm sóc sức khỏe.</p>
                            </div>
                            <div class="industry-highlight">
                                <div class="industry-icon">🏢</div>
                                <h4>Bất Động Sản</h4>
                                <p>Phát triển, đầu tư và quản lý bất động sản thương mại, dân dụng và công nghiệp.</p>
                            </div>
                            <div class="industry-highlight">
                                <div class="industry-icon">💼</div>
                                <h4>Vốn Tư Nhân</h4>
                                <p>Private equity, venture capital, family office và các quỹ đầu tư.</p>
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

