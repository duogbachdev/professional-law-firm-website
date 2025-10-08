// Industries Component
class Industries {
    constructor() {
        this.industriesContainer = document.getElementById('industries-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.industriesContainer.innerHTML = `
            <section class="industries fade-in" id="industries">
                <div class="industries-content">
                    <div class="section-header">
                        <h2 class="section-title" style="color: white;">Ngành Nghề</h2>
                        <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">
                            Kinh nghiệm sâu rộng phục vụ các ngành công nghiệp hàng đầu
                        </p>
                    </div>
                    <div class="industries-grid">
                        <div class="industry-card">
                            <h4>Dịch Vụ Tài Chính</h4>
                            <p>Ngân hàng, bảo hiểm, quản lý tài sản và fintech với hiểu biết sâu về quy định và thị trường.</p>
                        </div>
                        <div class="industry-card">
                            <h4>Công Nghệ</h4>
                            <p>Startup công nghệ, doanh nghiệp phần mềm, AI và chuyển đổi số trong mọi lĩnh vực.</p>
                        </div>
                        <div class="industry-card">
                            <h4>Năng Lượng</h4>
                            <p>Dầu khí, năng lượng tái tạo, điện lực và các dự án cơ sở hạ tầng năng lượng lớn.</p>
                        </div>
                        <div class="industry-card">
                            <h4>Y Tế & Khoa Học Đời Sống</h4>
                            <p>Dược phẩm, thiết bị y tế, công nghệ sinh học và dịch vụ chăm sóc sức khỏe.</p>
                        </div>
                        <div class="industry-card">
                            <h4>Bất Động Sản</h4>
                            <p>Phát triển, đầu tư và quản lý bất động sản thương mại, dân dụng và công nghiệp.</p>
                        </div>
                        <div class="industry-card">
                            <h4>Vốn Tư Nhân</h4>
                            <p>Private equity, venture capital, family office và các quỹ đầu tư.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add hover effect to industry cards
        this.industriesContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.industry-card')) {
                e.target.closest('.industry-card').style.transition = 'all 0.4s';
            }
        }, true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Industries();
});
