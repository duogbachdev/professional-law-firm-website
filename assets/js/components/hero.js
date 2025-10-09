// Hero Component
class Hero {
    constructor() {
        this.heroContainer = document.getElementById('hero-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.heroContainer.innerHTML = `
            <section class="hero hero-with-bg" id="home">
                <div class="hero-content">
                    <div class="hero-badge">
                        <span>🏆 Top 5 Công Ty Luật Việt Nam 2023</span>
                    </div>
                    <h1>VNLC - Đối Tác Pháp Lý Tin Cậy</h1>
                    <p class="hero-subtitle">Với hơn 15 năm kinh nghiệm, chúng tôi cung cấp dịch vụ pháp lý chuyên nghiệp cho hơn 1,000 khách hàng từ startup đến các tập đoàn lớn. Tỷ lệ thành công 98% trong các vụ tranh tụng.</p>
                    
                    <div class="hero-stats">
                        <div class="stat-item">
                            <div class="stat-number">500+</div>
                            <div class="stat-label">Dự án thành công</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">$2.5B</div>
                            <div class="stat-label">Tổng giá trị giao dịch</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">Tỷ lệ thành công</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Luật sư chuyên gia</div>
                        </div>
                    </div>
                    
                    <div class="hero-buttons">
                        <a href="#contact" class="btn-primary">Liên Hệ Tư Vấn Miễn Phí</a>
                        <a href="#services" class="btn-secondary">Khám Phá Dịch Vụ</a>
                    </div>
                    
                    <div class="hero-clients">
                        <p class="clients-label">Được tin tưởng bởi:</p>
                        <div class="clients-logos">
                            <span class="client-logo">🏦 TechBank</span>
                            <span class="client-logo">🏭 VinGroup</span>
                            <span class="client-logo">⚡ FPT</span>
                            <span class="client-logo">🏠 Vinhomes</span>
                            <span class="client-logo">💻 Viettel</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Hero();
});
