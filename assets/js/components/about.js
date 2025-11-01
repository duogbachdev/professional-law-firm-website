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
                    <div class="about-content">
                        <div class="about-text">
                            <div class="section-header">
                                <div class="decorative-icon">🏛️</div>
                                <h2 class="section-title">About VNLC</h2>
                                <div class="decorative-line"></div>
                                <p class="section-subtitle">Công ty TNHH Vietnam Legal Consulting - Giải pháp pháp lý toàn diện</p>
                            </div>

                            <div class="about-description">
                                <p class="lead-text">
                                    <strong>Vietnam Legal Consulting (VNLC)</strong> kế thừa nền tảng chuyên gia pháp lý từ QPVN, 
                                    hướng tới trở thành hãng luật độc lập cung cấp giải pháp toàn diện cho cá nhân và doanh nghiệp. 
                                    VNLC cam kết cung cấp giải pháp pháp lý toàn diện, minh bạch và hiệu quả.
                                </p>

                                <div class="about-features">
                                    <div class="feature-item">
                                        <div class="feature-icon">🎯</div>
                                        <div class="feature-content">
                                            <h4>Tầm Nhìn</h4>
                                            <p>Trở thành một trong những hãng luật uy tín hàng đầu tại Việt Nam và khu vực, được công nhận về chất lượng dịch vụ và đạo đức nghề nghiệp.</p>
                                        </div>
                                    </div>

                                    <div class="feature-item">
                                        <div class="feature-icon">⚡</div>
                                        <div class="feature-content">
                                            <h4>Sứ Mệnh</h4>
                                            <p>Đồng hành cùng doanh nghiệp và nhà đầu tư trong hành trình phát triển bền vững, cung cấp dịch vụ pháp lý chuyên nghiệp và hiệu quả.</p>
                                        </div>
                                    </div>

                                    <div class="feature-item">
                                        <div class="feature-icon">⭐</div>
                                        <div class="feature-content">
                                            <h4>Giá Trị Cốt Lõi</h4>
                                            <p><strong>Chính trực</strong> - <strong>Chuyên môn xuất sắc</strong> - <strong>Bảo mật tuyệt đối</strong> - <strong>Đồng hành tin cậy</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="company-info">
                                    <h4>Thông Tin Công Ty</h4>
                                    <ul>
                                        <li><strong>Tên công ty:</strong> Công ty TNHH Vietnam Legal Consulting (VNLC)</li>
                                        <li><strong>Ngày thành lập:</strong> 23/07/2024</li>
                                        <li><strong>Địa chỉ:</strong> Số 121, phố 8/3, C23, phường Bạch Mai, Hà Nội</li>
                                        <li><strong>Email:</strong> vietnamlegalconsulting@gmail.com</li>
                                        <li><strong>Hotline:</strong> 096.812.7877</li>
                                        <li><strong>Chủ sở hữu:</strong> Công ty TNHH MTV Tư vấn QP Việt Nam</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="about-visual">
                            <div class="about-icon">⚖️</div>
                            <h3>Vietnam Legal Consulting</h3>
                            <p>Đồng hành cùng doanh nghiệp và nhà đầu tư trong hành trình phát triển bền vững</p>
                            
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

                        <!-- Company Timeline -->
                    <div class="timeline-section">
                        <h3 class="subsection-title">Lịch Sử Phát Triển</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2024</div>
                                <div class="timeline-content">
                                    <h4>Thành lập VNLC</h4>
                                    <p><strong>Ngày 23/07/2024:</strong> Công ty TNHH Vietnam Legal Consulting (VNLC) được thành lập, kế thừa nền tảng chuyên gia pháp lý từ QPVN. VNLC hướng tới trở thành hãng luật độc lập cung cấp giải pháp toàn diện cho cá nhân và doanh nghiệp.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🏢 Văn phòng tại Bạch Mai, Hà Nội</span>
                                        <span class="detail-tag">👥 Đội ngũ chuyên gia hàng đầu</span>
                                        <span class="detail-tag">🎯 Sứ mệnh phục vụ khách hàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add scroll animations for timeline
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

        // Observe timeline items
        const timelineItems = this.aboutContainer.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => observer.observe(item));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutVNLC();
});
