// Expertise Component
class Expertise {
    constructor() {
        this.expertiseContainer = document.getElementById('expertise-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.expertiseContainer.innerHTML = `
            <section class="expertise-detail fade-in" id="expertise">
                <div class="section-header">
                    <h2 class="section-title">Chuyên Môn Chi Tiết</h2>
                    <p class="section-subtitle">Đội ngũ luật sư với kinh nghiệm sâu rộng trong các lĩnh vực chuyên biệt</p>
                </div>
                <div class="expertise-categories">
                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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

                    <div class="category-card">
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
            </section>
        `;
    }

    bindEvents() {
        // Add hover effect to category cards
        this.expertiseContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.category-card')) {
                e.target.closest('.category-card').style.transition = 'all 0.3s';
            }
        }, true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Expertise();
});
