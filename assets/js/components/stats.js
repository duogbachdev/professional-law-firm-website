// Stats Component
class Stats {
    constructor() {
        this.statsContainer = document.getElementById('stats-container');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.statsContainer.innerHTML = `
            <section class="stats-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">Thành Tựu Nổi Bật</h2>
                    <p class="section-subtitle">Những con số chứng minh cam kết của chúng tôi với khách hàng</p>
                </div>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">2,500+</div>
                        <div class="stat-label">Vụ Việc Thành Công</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">Tỷ Lệ Hài Lòng</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Luật Sư Chuyên Nghiệp</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">Năm Kinh Nghiệm</div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Stats();
});
