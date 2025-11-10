// About VNLC Component
class AboutVNLC {
    constructor() {
        this.aboutContainer = document.getElementById('about-container');
        console.log('AboutVNLC constructor - container found:', this.aboutContainer);
        if (!this.aboutContainer) {
            console.error('About container not found!');
            return;
        }
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        console.log('AboutVNLC render method called');
        this.aboutContainer.innerHTML = `
            <section class="about-vnlc fade-in" id="about">
                <div class="container">
                    <!-- Lời Cảm Ơn -->
                    <div class="thank-you-section">
                            <div class="section-header">
                            <div class="decorative-icon">🙏</div>
                            <h2 class="section-title">Lời Cảm Ơn</h2>
                                <div class="decorative-line"></div>
                        </div>
                        <div class="thank-you-content">
                            <p class="thank-you-greeting">Kính gửi Quý khách hàng và Quý đối tác của VNLC!</p>
                            <div class="thank-you-text">
                                <p>VNLC xin gửi lời cảm ơn chân thành và sâu sắc nhất tới Quý khách hàng và Quý đối tác đã luôn dành sự tin tưởng và đồng hành cùng VNLC trong suốt quãng thời gian qua.</p>
                                <p>Cùng với đội ngũ Luật sư và Chuyên gia pháp lý với nhiều năm kinh nghiệm thực tiễn, VNLC đã và đang xác định có thể mang đến những giải pháp pháp lý toàn diện cho khách hàng trong các lĩnh vực về Dân sự, Hình sự và Doanh nghiệp. Sự tin tưởng và yêu cầu của Quý vị chính là nguồn động lực lớn nhất giúp chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ, chuyển mình pháp lý, đồng hành cùng khách hàng và cung cấp cho Quý vị những giải pháp pháp lý tối ưu nhất.</p>
                                <p>VNLC cam kết sẽ luôn là đối tác tin cậy, luôn bên cạnh và đồng hành cùng Quý vị trong những hướng tới sự phát triển bền vững và lâu dài.</p>
                                <p class="thank-you-closing">Xin trân trọng cảm ơn!</p>
                            </div>
                            <div class="thank-you-signature">
                                <p class="signature-name">PHẠM THANH TUẤN</p>
                                <p class="signature-title">Giám đốc Công ty Vietnam Legal Consulting</p>
                            </div>
                        </div>
                            </div>

                    <!-- Giới Thiệu -->
                    <div class="intro-section">
                        <div class="section-header">
                            <div class="decorative-icon">🏢</div>
                            <h2 class="section-title">Giới Thiệu</h2>
                            <div class="decorative-line"></div>
                        </div>
                        <div class="intro-content-grid">
                            <div class="intro-main">
                                <h3 class="intro-subtitle">KHÁI QUÁT</h3>
                                <p class="lead-text">
                                    <strong>Vietnam Legal Consulting (VNLC)</strong> được thành lập ngày 23/07/2024 với chủ sở hữu là Công ty TNHH MTV Tư vấn QP Việt Nam. 
                                    VNLC kế thừa nền tảng chuyên gia pháp lý từ QPVN, hướng tới trở thành hãng luật độc lập cung cấp giải pháp toàn diện cho cá nhân và doanh nghiệp. 
                                    VNLC cam kết cung cấp giải pháp pháp lý toàn diện, minh bạch và hiệu quả.
                                </p>
                                <div class="intro-highlight">
                                    <h4>TRỤ SỞ</h4>
                                    <p><strong>Số 121, phố 8/3, C23, Phường Bạch Mai, Thành phố Hà Nội, Việt Nam</strong></p>
                                </div>
                            </div>
                            <div class="intro-visual">
                            <div class="about-stats">
                                <div class="stat-item">
                                    <div class="stat-number">2024</div>
                                    <div class="stat-label">Năm thành lập</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">100%</div>
                                    <div class="stat-label">Cam kết chất lượng</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">9+</div>
                                    <div class="stat-label">Dự án nổi bật</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lịch Sử Hình Thành -->
                    <div class="history-section">
                        <div class="section-header">
                            <div class="decorative-icon">📜</div>
                            <h2 class="section-title">Lịch Sử Hình Thành</h2>
                            <div class="decorative-line"></div>
                        </div>
                        <div class="history-content">
                            <p>VNLC chính thức vận hành độc lập vào ngày 23/7/2024, trong bối cảnh Việt Nam hội nhập sâu rộng vào kinh tế toàn cầu, đối với hệ sinh thái tự do toàn diện, trong đó pháp lý giữ vai trò then chốt đảm bảo minh bạch và bền vững.</p>
                            <p>VNLC kết hợp đội ngũ chuyên gia, luật sư giàu kinh nghiệm từ Công ty TNHH MTV Tư vấn QP Việt Nam (QPVN) – đơn vị uy tín trong lĩnh vực tư vấn tài chính và tố tụng sự kiện liên quan cho các doanh nghiệp lớn. Dưới sự dẫn dắt của Nguyễn Thị Quỳ Phương, chúng tôi có cơ sở tính hiệu quả và nhiều kinh nghiệm ở cấp độ cao.</p>
                            <p>Bà Phương cùng những chuyên gia chủ chốt đã phụ trách các công ty và doanh nghiệp lớn của Việt Nam, đặc biệt là Vingroup: Ủy viên Ban Điều hành của Cộng đồng tác FIA, Phó Chủ tịch Thương trực Hiệp hội Tổ Thế thao Việt Nam, Trưởng ban Bảo vệ Môi trường của Tập đoàn Vingroup, Thư ký Chuyên tập đoàn Vingroup ông Phạm Nhật Vượng….</p>
                            <p>Từ những nền tảng trên, VNLC đã trở thành một đơn vị tư vấn pháp lý có uy tín, chuyên gia giải pháp toàn diện cho khách hàng, tổ chức các doanh nghiệp trong và ngoài nước.</p>
                            <p>VNLC đã nhanh chóng khẳng định năng lực của mình. Đồng thời, công ty cũng xây dựng định hướng phát triển lâu dài, với giá trị cốt lõi làm nền tảng phát triển bền vững. Với giá trị cốt lõi là niềm tin - hướng về hiệu quả, VNLC cam kết tiếp tục phát triển công ty tư vấn và đồng hành cùng các doanh nghiệp trong và ngoài nước, và hiện đang được mở rộng vào khu vực quốc tế.</p>
                                    </div>
                                </div>

                    <!-- Thông Tin Công Ty & Giá Trị -->
                    <div class="company-values-section">
                        <div class="values-cards">
                            <div class="value-card">
                                <div class="value-icon">🎯</div>
                                <h4>Tầm Nhìn</h4>
                                <p>Trở thành một trong những hãng luật uy tín hàng đầu tại Việt Nam và khu vực, được công nhận về chất lượng dịch vụ và đạo đức nghề nghiệp.</p>
                            </div>
                            <div class="value-card">
                                <div class="value-icon">⚡</div>
                                <h4>Sứ Mệnh</h4>
                                <p>Đồng hành cùng doanh nghiệp và nhà đầu tư trong hành trình phát triển bền vững, cung cấp dịch vụ pháp lý chuyên nghiệp và hiệu quả.</p>
                            </div>
                            <div class="value-card">
                                <div class="value-icon">⭐</div>
                                <h4>Giá Trị Cốt Lõi</h4>
                                <p><strong>Chính trực</strong> - <strong>Chuyên môn xuất sắc</strong> - <strong>Bảo mật tuyệt đối</strong> - <strong>Đồng hành tin cậy</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add scroll animations for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        setTimeout(() => {
            const sections = this.aboutContainer.querySelectorAll('.thank-you-section, .intro-section, .history-section, .company-values-section');
            sections.forEach(section => observer.observe(section));
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutVNLC();
});
