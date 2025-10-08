// Capabilities Component
class Capabilities {
    constructor() {
        this.capabilitiesContainer = document.getElementById('capabilities-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.capabilitiesContainer.innerHTML = `
            <section class="capabilities fade-in" id="capabilities">
                <div class="section-header">
                    <h2 class="section-title">Năng Lực Chuyên Môn</h2>
                    <p class="section-subtitle">Chúng tôi cung cấp dịch vụ pháp lý toàn diện trong năm lĩnh vực chính</p>
                </div>
                <div class="capabilities-grid">
                    <div class="capability-card">
                        <div class="capability-number">01</div>
                        <h3>Tư Vấn & Quy Định</h3>
                        <ul class="capability-list">
                            <li>Luật hành chính và công</li>
                            <li>Cạnh tranh và chống độc quyền</li>
                            <li>An ninh mạng và bảo mật</li>
                            <li>Bảo vệ dữ liệu cá nhân</li>
                            <li>Tư vấn dịch vụ tài chính</li>
                            <li>Thuế và kế hoạch thuế</li>
                        </ul>
                        <a href="#" class="view-all-link">Xem tất cả →</a>
                    </div>

                    <div class="capability-card">
                        <div class="capability-number">02</div>
                        <h3>Thị Trường Vốn</h3>
                        <ul class="capability-list">
                            <li>Tài chính tài sản</li>
                            <li>Thị trường nợ</li>
                            <li>Công cụ phái sinh</li>
                            <li>Thị trường vốn cổ phần</li>
                            <li>Tài chính bền vững</li>
                            <li>Tài chính có cấu trúc</li>
                        </ul>
                        <a href="#" class="view-all-link">Xem tất cả →</a>
                    </div>

                    <div class="capability-card">
                        <div class="capability-number">03</div>
                        <h3>Doanh Nghiệp & M&A</h3>
                        <ul class="capability-list">
                            <li>Sáp nhập và mua bán</li>
                            <li>Liên doanh</li>
                            <li>Tái cơ cấu doanh nghiệp</li>
                            <li>Quản trị công ty đại chúng</li>
                            <li>Đầu tư nước ngoài</li>
                            <li>Giao dịch công nghệ</li>
                        </ul>
                        <a href="#" class="view-all-link">Xem tất cả →</a>
                    </div>

                    <div class="capability-card">
                        <div class="capability-number">04</div>
                        <h3>Tranh Tụng</h3>
                        <ul class="capability-list">
                            <li>Trọng tài quốc tế</li>
                            <li>Tranh tụng thương mại</li>
                            <li>Tranh chấp M&A</li>
                            <li>Tranh tụng dịch vụ tài chính</li>
                            <li>Tranh tụng chứng khoán</li>
                            <li>Phòng chống tội phạm kinh tế</li>
                        </ul>
                        <a href="#" class="view-all-link">Xem tất cả →</a>
                    </div>

                    <div class="capability-card">
                        <div class="capability-number">05</div>
                        <h3>Tài Chính</h3>
                        <ul class="capability-list">
                            <li>Cho vay có cấu trúc</li>
                            <li>Tài chính đòn bẩy</li>
                            <li>Tài chính dự án</li>
                            <li>Bất động sản</li>
                            <li>Tái cấu trúc và phá sản</li>
                            <li>Tài chính thương mại</li>
                        </ul>
                        <a href="#" class="view-all-link">Xem tất cả →</a>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add hover effect to capability cards
        this.capabilitiesContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.capability-card')) {
                e.target.closest('.capability-card').style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        }, true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Capabilities();
});
