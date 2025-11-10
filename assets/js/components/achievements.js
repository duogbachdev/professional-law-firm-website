// Achievements Component
class Achievements {
    constructor() {
        this.achievementsContainer = document.getElementById('achievements-container');
        console.log('Achievements constructor - container found:', this.achievementsContainer);
        if (!this.achievementsContainer) {
            console.error('Achievements container not found!');
            return;
        }
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        console.log('Achievements render method called');
        this.achievementsContainer.innerHTML = `
            <section class="achievements stats-enhanced" id="achievements">
                <div class="container">
                    <!-- Lời cảm ơn -->
                    <div class="achievement-section thank-you-section animate-in">
                    <div class="section-header">
                            <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">🙏</div>
                            <h2 class="section-title" style="color: white;">Lời Cảm Ơn</h2>
                        <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
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

                    <!-- Giới thiệu -->
                    <div class="achievement-section intro-section animate-in">
                        <div class="section-header">
                            <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">🏢</div>
                            <h2 class="section-title" style="color: white;">Giới Thiệu</h2>
                            <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
                                    </div>
                        <div class="intro-content">
                            <div class="intro-item">
                                <h3 class="intro-subtitle">KHÁI QUÁT</h3>
                                <p>VNLC được thành lập ngày 23/07/2024 với chủ sở hữu là Công ty TNHH MTV Tư vấn QP Việt Nam.</p>
                                </div>
                            <div class="intro-item">
                                <h3 class="intro-subtitle">TRỤ SỞ</h3>
                                <p>VNLC có trụ sở tại: <strong>Số 121, phố 8/3, C23, Phường Bạch Mai, Thành phố Hà Nội, Việt Nam</strong></p>
                            </div>
                        </div>
                                </div>

                    <!-- Lịch sử hình thành -->
                    <div class="achievement-section history-section animate-in">
                        <div class="section-header">
                            <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">📜</div>
                            <h2 class="section-title" style="color: white;">Lịch Sử Hình Thành</h2>
                            <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
                        </div>
                        <div class="history-content">
                            <p>VNLC chính thức vận hành độc lập vào ngày 23/7/2024, trong bối cảnh Việt Nam hội nhập sâu rộng vào kinh tế toàn cầu, đối với hệ sinh thái tự do toàn diện, trong đó pháp lý giữ vai trò then chốt đảm bảo minh bạch và bền vững.</p>
                            <p>VNLC kết hợp đội ngũ chuyên gia, luật sư giàu kinh nghiệm từ Công ty TNHH MTV Tư vấn QP Việt Nam (QPVN) – đơn vị uy tín trong lĩnh vực tư vấn tài chính và tố tụng sự kiện liên quan cho các doanh nghiệp lớn. Dưới sự dẫn dắt của Nguyễn Thị Quỳ Phương, chúng tôi lập cơ sở tính hiệu quả và nhiều kinh nghiệm vô cùng cấp cao.</p>
                            <p>Bà Phương cùng những chuyên gia chủ chốt phụ trách các công ty doanh nghiệp lớn của Việt Nam là Vingroup chủ: Ủy viên Ban Điều hành của Cộng đồng tác FIA, Phó Chủ tịch Thương trực Hiệp hội Tổ Thế thao Việt Nam, Trưởng ban Bảo vệ Môi trường của Tập đoàn Vingroup, Thư ký Chuyên tập đoàn Vingroup ông Phạm Nhật Vượng….</p>
                            <p>Từ những điều trên, VNLC đã trở thành một nhân tư vấn pháp lý có uy tín, chuyên gia giải pháp toàn diện cho khách hàng, tổ chức các doanh nghiệp trong và ngoài nước.</p>
                            <p>VNLC đã nhanh chóng khẳng định năng lực của mình. Đồng thời, công ty cũng xây dựng định hướng phát triển lâu dài, với giá trị mức lượng làm hướng phát triển lâu dài. Với giá trị tiềm tin - hướng về hiệu quả, VNLC cam kết tiếp tục phát triển công ty tư khách và đồng hành công doanh nghiệp tự hương sửa, và hiên được mở rộng vào khổ hội quốc tế.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe achievement sections for animation
        setTimeout(() => {
            const sections = this.achievementsContainer.querySelectorAll('.achievement-section');
            sections.forEach(section => observer.observe(section));
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Achievements();
});
