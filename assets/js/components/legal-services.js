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

                    <!-- Pricing Table -->
                    <div class="services-section">
                        <h3 class="subsection-title">Bảng Giá Dịch Vụ</h3>
                        <div class="pricing-table-container">
                            <table class="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Nhóm Dịch Vụ</th>
                                        <th>Dịch Vụ Cụ Thể</th>
                                        <th>Công Tác Phí</th>
                                        <th>Thù Lao</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowspan="6"><strong>Thu hồi công nợ</strong></td>
                                        <td>1. Tư vấn, soạn thảo hồ sơ đối chiếu công nợ</td>
                                        <td>3.000.000 – 5.000.000 VNĐ<br>(Dưới 200tr: 3tr; Từ 200-500tr: 4tr; Trên 500tr: 5tr)</td>
                                        <td>Không</td>
                                    </tr>
                                    <tr>
                                        <td>2. Đại diện Quý khách hàng làm việc, trao đổi, thương lượng, đàm phán, hòa giải (không quá 03 buổi làm việc)</td>
                                        <td>6.000.000 – 10.000.000 VNĐ<br>(Thêm 3.000.000/lượt phát sinh)<br>(Dưới 200tr: 6tr; Từ 200-500tr: 8tr; Trên 500tr: 10tr)</td>
                                        <td>10-35% giá trị tài sản thu hồi<br>(tùy theo tính chất vụ việc và thỏa thuận)</td>
                                    </tr>
                                    <tr>
                                        <td>3. Soạn thảo văn bản, hồ sơ khởi kiện tại Tòa án nhân dân có thẩm quyền</td>
                                        <td>3.000.000 – 5.000.000 VNĐ<br>(Dưới 200tr: 3tr; Từ 200-500tr: 4tr; Trên 500tr: 5tr)</td>
                                        <td>10-35% giá trị tài sản thu hồi</td>
                                    </tr>
                                    <tr>
                                        <td>4. Đại diện Quý khách hàng tham gia giải quyết tranh chấp tại Tòa án nhân dân có thẩm quyền</td>
                                        <td>20.000.000 - 50.000.000 VNĐ<br>(Dưới 200tr: 20tr; Từ 200-500tr: 35tr; Trên 500tr: 50tr)</td>
                                        <td>10-35% giá trị tài sản thu hồi</td>
                                    </tr>
                                    <tr>
                                        <td>5. Hỗ trợ Quý khách hàng trong quá trình thi hành án ngay sau khi có bản án</td>
                                        <td>10.000.000 - 20.000.000 VNĐ<br>(Dưới 200tr: 10tr; Từ 200-500tr: 15tr; Trên 500tr: 20tr)</td>
                                        <td>10-35% giá trị tài sản thu hồi</td>
                                    </tr>
                                    <tr class="highlight-row">
                                        <td><strong>Ưu đãi: Sử dụng toàn bộ hạng mục công việc từ 1 đến 5</strong></td>
                                        <td>35.000.000 - 70.000.000 VNĐ<br>(Dưới 200tr: 35tr; Từ 200-500tr: 50tr; Trên 500tr: 70tr)</td>
                                        <td>10-35% giá trị tài sản thu hồi</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="5"><strong>Tư vấn Hợp đồng thương mại<br>(không có yếu tố nước ngoài)</strong></td>
                                        <td>1. Đàm phán trước khi giao kết hợp đồng</td>
                                        <td>2.000.000 - 16.000.000 VNĐ<br>(Tùy theo giá trị hợp đồng)</td>
                                        <td>2.000.000 - 16.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Soạn thảo các hợp đồng/phụ lục giữa doanh nghiệp với khách hàng/đối tác</td>
                                        <td>2.000.000 - 16.000.000 VNĐ<br>(Tùy theo giá trị hợp đồng)</td>
                                        <td>2.000.000 - 16.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>3. Kiểm tra/rà soát, sửa đổi, bổ sung, giải thích hợp đồng</td>
                                        <td>2.000.000 - 16.000.000 VNĐ<br>(Tùy theo giá trị hợp đồng)</td>
                                        <td>2.000.000 - 16.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>4. Hướng dẫn, khuyến cáo các bên thực hiện đúng quy định của hợp đồng</td>
                                        <td>2.000.000 - 16.000.000 VNĐ<br>(Tùy theo giá trị hợp đồng)</td>
                                        <td>2.000.000 - 16.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>5. Chấm dứt/hủy bỏ/thanh lý/tạm đình chỉ/đình chỉ hợp đồng</td>
                                        <td>2.000.000 - 16.000.000 VNĐ<br>(Tùy theo giá trị hợp đồng)</td>
                                        <td>2.000.000 - 16.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="5"><strong>Tư vấn pháp lý về bất động sản<br>(nhà ở thổ cư giá trị dưới 20 tỷ)</strong></td>
                                        <td>1. Đánh giá pháp lý của bất động sản, kiểm tra quy hoạch, tranh chấp, thế chấp ngân hàng, kê biên, phong tỏa</td>
                                        <td>1.000.000 - 3.000.000 VNĐ<br>(Tùy thuộc vào tính chất của BĐS)</td>
                                        <td>1.000.000 - 3.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Hỗ trợ Quý khách hàng thương lượng, đàm phán trước khi tiến hành chuyển nhượng/nhận chuyển nhượng quyền sử dụng đất</td>
                                        <td>2.000.000 - 3.000.000 VNĐ</td>
                                        <td>2.000.000 - 3.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>3. Soạn thảo các văn bản pháp lý cơ bản, ghi nhận quyền và nghĩa vụ giữa các bên</td>
                                        <td>3.000.000 - 5.000.000 VNĐ<br>(Không bao gồm phí công chứng, chứng thực)</td>
                                        <td>3.000.000 - 5.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>4. Hướng dẫn các bên thực hiện đúng hợp đồng, đảm bảo quyền và lợi ích hợp pháp</td>
                                        <td>500.000 - 1.000.000 VNĐ/1 buổi làm việc<br>(mỗi buổi không quá 2 tiếng)</td>
                                        <td>500.000 - 1.000.000 VNĐ/1 buổi</td>
                                    </tr>
                                    <tr class="highlight-row">
                                        <td><strong>Ưu đãi: Thực hiện các công việc từ mục 1 đến mục 4</strong></td>
                                        <td>5.000.000 - 10.000.000 VNĐ</td>
                                        <td>5.000.000 - 10.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="5"><strong>Sở hữu trí tuệ</strong></td>
                                        <td>1. Thiết lập quy trình và giải pháp bảo vệ bí mật kinh doanh</td>
                                        <td>20.000.000 – 40.000.000 VNĐ<br>(Có thể cao hơn tùy vào cấp độ bảo mật)</td>
                                        <td>20.000.000 – 40.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Đăng ký quyền tác giả/đăng ký nhãn hiệu</td>
                                        <td>2.500.000 VNĐ/hồ sơ<br>(Chưa bao gồm phí, lệ phí nộp cho cơ quan Nhà nước)</td>
                                        <td>2.500.000 VNĐ/hồ sơ</td>
                                    </tr>
                                    <tr>
                                        <td>3. Thực hiện các biện pháp theo quy định của pháp luật để ngăn chặn xâm phạm quyền sở hữu trí tuệ (cảnh báo, khiếu nại)</td>
                                        <td>10.000.000 – 20.000.000 VNĐ<br>(Có thể tăng giảm tùy thuộc vào tính chất của vụ việc)</td>
                                        <td>10.000.000 – 20.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>4. Tư vấn, tham gia bảo vệ quyền lợi cho Quý khách trong vụ án tranh chấp về sở hữu trí tuệ tại Tòa án nhân dân có thẩm quyền</td>
                                        <td>20.000.000 – 40.000.000 VNĐ<br>(Có thể tăng giảm tùy thuộc vào tính chất của vụ việc)</td>
                                        <td>20.000.000 – 40.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>5. Hợp đồng chuyển nhượng nhãn hiệu/sáng chế/kiểu dáng công nghiệp/quyền tác giả/quyền liên quan/quyền đối với giống cây trồng</td>
                                        <td>10.000.000 – 20.000.000 VNĐ<br>(Có thể cao hơn tùy vào tính chất của đối tượng chuyển nhượng)</td>
                                        <td>10.000.000 – 20.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4"><strong>Thừa kế</strong></td>
                                        <td>1. Tư vấn di chúc, di sản thừa kế, quyền thừa kế</td>
                                        <td>3.000.000 - 10.000.000 VNĐ<br>(Mức giá có thể thay đổi tùy thuộc vào số lượng và tính chất tài sản)</td>
                                        <td>3.000.000 - 10.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Tư vấn lập di chúc theo đúng quy định pháp luật</td>
                                        <td>3.000.000 - 10.000.000 VNĐ</td>
                                        <td>3.000.000 - 10.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>3. Xác định hiệu lực di chúc; Đại diện khai nhận di sản thừa kế theo di chúc</td>
                                        <td>10.000.000 - 15.000.000 VNĐ/hồ sơ<br>(Chưa bao gồm phí công chứng, chứng thực)</td>
                                        <td>10.000.000 - 15.000.000 VNĐ/hồ sơ</td>
                                    </tr>
                                    <tr>
                                        <td>4. Thừa kế theo pháp luật: Xác định di sản, những người trong hàng thừa kế</td>
                                        <td>10.000.000 - 20.000.000 VNĐ/hồ sơ<br>(Chưa bao gồm phí công chứng, chứng thực)</td>
                                        <td>10.000.000 - 20.000.000 VNĐ/hồ sơ</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2"><strong>Hôn nhân - Gia đình</strong></td>
                                        <td>1. Thuận tình ly hôn</td>
                                        <td>8.000.000 - 15.000.000 VNĐ</td>
                                        <td>8.000.000 - 15.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Ly hôn tranh chấp</td>
                                        <td>20.000.000 - 40.000.000 VNĐ</td>
                                        <td>10-20% giá trị tài sản</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4"><strong>Doanh nghiệp</strong></td>
                                        <td>1. Thành lập doanh nghiệp</td>
                                        <td>3.000.000 VNĐ<br>(Bao gồm lệ phí, con dấu, tài khoản, chữ ký số)</td>
                                        <td>3.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>2. Biểu mẫu doanh nghiệp</td>
                                        <td>1.000.000 - 2.000.000 VNĐ</td>
                                        <td>1.000.000 - 2.000.000 VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>3. Tư vấn cơ cấu, quy trình, quy chế</td>
                                        <td>2.000.000 - 5.000.000 VNĐ/buổi<br>(Mỗi buổi không quá 2 tiếng)</td>
                                        <td>2.000.000 - 5.000.000 VNĐ/buổi</td>
                                    </tr>
                                    <tr>
                                        <td>4. Tư vấn thường xuyên (Gói doanh nghiệp)</td>
                                        <td>6.000.000 - 20.000.000 VNĐ/tháng<br>(Giảm 10-20% nếu ký theo quý/năm)</td>
                                        <td>6.000.000 - 20.000.000 VNĐ/tháng</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2"><strong>Đất đai & Giấy phép</strong></td>
                                        <td>1. Cấp sổ đỏ lần đầu</td>
                                        <td>3.000.000 - 5.000.000 VNĐ<br>+ Thương lượng theo BĐS</td>
                                        <td>3.000.000 - 5.000.000 VNĐ + thương lượng</td>
                                    </tr>
                                    <tr>
                                        <td>2. Giấy phép an toàn thực phẩm</td>
                                        <td>9.000.000 - 12.000.000 VNĐ/hồ sơ<br>(Đã bao gồm lệ phí)</td>
                                        <td>9.000.000 - 12.000.000 VNĐ/hồ sơ</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pricing-note">
                                <p><strong>Lưu ý:</strong> Giá trên có thể thay đổi tùy thuộc vào tính chất cụ thể của từng vụ việc và thỏa thuận giữa các bên. Vui lòng liên hệ trực tiếp để nhận báo giá chi tiết.</p>
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

