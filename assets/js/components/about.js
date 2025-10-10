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
                                <p class="section-subtitle">Công ty luật hàng đầu với hơn 15 năm kinh nghiệm</p>
                            </div>

                            <div class="about-description">
                                <p class="lead-text">
                                    VNLC (Vietnam Legal Consulting) là một trong những công ty luật hàng đầu tại Việt Nam, 
                                    được thành lập với sứ mệnh cung cấp dịch vụ pháp lý chuyên nghiệp, toàn diện và đáng tin cậy 
                                    cho khách hàng trong nước và quốc tế.
                                </p>

                                <div class="about-features">
                                    <div class="feature-item">
                                        <div class="feature-icon">🎯</div>
                                        <div class="feature-content">
                                            <h4>Tầm Nhìn</h4>
                                            <p>Trở thành công ty luật hàng đầu khu vực Đông Nam Á, được công nhận về chất lượng dịch vụ và đạo đức nghề nghiệp.</p>
                                        </div>
                                    </div>

                                    <div class="feature-item">
                                        <div class="feature-icon">⚡</div>
                                        <div class="feature-content">
                                            <h4>Sứ Mệnh</h4>
                                            <p>Bảo vệ quyền lợi hợp pháp của khách hàng thông qua việc cung cấp dịch vụ pháp lý chuyên nghiệp, sáng tạo và hiệu quả.</p>
                                        </div>
                                    </div>

                                    <div class="feature-item">
                                        <div class="feature-icon">⭐</div>
                                        <div class="feature-content">
                                            <h4>Giá Trị Cốt Lõi</h4>
                                            <p>Chuyên nghiệp - Chính trực - Sáng tạo - Hợp tác - Tận tâm phục vụ khách hàng.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="about-visual">
                            <div class="about-icon">⚖️</div>
                            <h3>15+ Năm Kinh Nghiệm</h3>
                            <p>Phục vụ hàng nghìn khách hàng với tỷ lệ thành công cao</p>
                            
                            <div class="about-stats">
                                <div class="stat-item">
                                    <div class="stat-number">500+</div>
                                    <div class="stat-label">Dự án thành công</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">98%</div>
                                    <div class="stat-label">Tỷ lệ hài lòng</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">50+</div>
                                    <div class="stat-label">Luật sư chuyên gia</div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <!-- Company Timeline -->
                    <div class="timeline-section">
                        <h3 class="subsection-title">Lịch Sử Phát Triển</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2008</div>
                                <div class="timeline-content">
                                    <h4>Thành lập VNLC</h4>
                                    <p><strong>Tháng 3/2008:</strong> VNLC được thành lập bởi 3 luật sư giàu kinh nghiệm từ các công ty luật hàng đầu Việt Nam. Khởi đầu với 5 luật sư và văn phòng 200m² tại 15 Lê Thánh Tông, Hà Nội.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🏢 Văn phòng đầu tiên</span>
                                        <span class="detail-tag">👥 5 luật sư</span>
                                        <span class="detail-tag">💰 Vốn điều lệ: 5 tỷ VNĐ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2010</div>
                                <div class="timeline-content">
                                    <h4>Dự án đầu tiên quy mô lớn</h4>
                                    <p><strong>Tháng 6/2010:</strong> Thực hiện giao dịch M&A đầu tiên trị giá 10 triệu USD giữa TechBank và một ngân hàng nhỏ. Thành công này đặt nền móng cho sự phát triển trong lĩnh vực M&A.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">💼 Giao dịch M&A đầu tiên</span>
                                        <span class="detail-tag">🏆 Giải thưởng "Deal of the Year"</span>
                                        <span class="detail-tag">📈 Tăng trưởng 150%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2012</div>
                                <div class="timeline-content">
                                    <h4>Mở rộng dịch vụ & Nhân sự</h4>
                                    <p><strong>Năm 2012:</strong> Mở rộng mạnh mẽ dịch vụ M&A và đầu tư nước ngoài. Đội ngũ tăng lên 25 luật sư, diện tích văn phòng mở rộng lên 800m². Thành lập phòng chuyên môn về sở hữu trí tuệ.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">👥 25 luật sư</span>
                                        <span class="detail-tag">🏢 Văn phòng 800m²</span>
                                        <span class="detail-tag">💡 Phòng Sở hữu trí tuệ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2015</div>
                                <div class="timeline-content">
                                    <h4>Đạt mốc 100 dự án</h4>
                                    <p><strong>Tháng 12/2015:</strong> VNLC đạt mốc 100 dự án thành công với tổng giá trị giao dịch 500 triệu USD. Được Asian Legal Business vinh danh là "Rising Law Firm of the Year".</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🎯 100 dự án thành công</span>
                                        <span class="detail-tag">💰 $500M tổng giá trị</span>
                                        <span class="detail-tag">🏆 Rising Law Firm 2015</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2016</div>
                                <div class="timeline-content">
                                    <h4>Văn phòng TP.HCM & Quốc tế</h4>
                                    <p><strong>Tháng 9/2016:</strong> Thành lập chi nhánh tại TP.HCM với 15 luật sư. Thiết lập quan hệ đối tác với các công ty luật tại Singapore, Thái Lan và Malaysia.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🏢 Văn phòng TP.HCM</span>
                                        <span class="detail-tag">🌍 Đối tác quốc tế</span>
                                        <span class="detail-tag">👥 40+ luật sư tổng cộng</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2018</div>
                                <div class="timeline-content">
                                    <h4>IPO thành công đầu tiên</h4>
                                    <p><strong>Tháng 4/2018:</strong> Tư vấn thành công IPO cho TechBank trên sàn HOSE với giá trị 200 triệu USD. Đây là IPO lớn nhất năm 2018 và đưa VNLC vào top 5 công ty luật hàng đầu Việt Nam.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">📈 IPO TechBank $200M</span>
                                        <span class="detail-tag">🏆 Top 5 Law Firm VN</span>
                                        <span class="detail-tag">📊 IPO lớn nhất 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2020</div>
                                <div class="timeline-content">
                                    <h4>Chuyển đổi số & COVID-19</h4>
                                    <p><strong>Năm 2020:</strong> Ứng dụng công nghệ AI, blockchain trong dịch vụ pháp lý. Phát triển nền tảng tư vấn trực tuyến. Duy trì 100% hoạt động trong đại dịch COVID-19.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🤖 AI & Blockchain</span>
                                        <span class="detail-tag">💻 Nền tảng trực tuyến</span>
                                        <span class="detail-tag">🛡️ 100% hoạt động COVID</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2022</div>
                                <div class="timeline-content">
                                    <h4>Đạt mốc $2B giao dịch</h4>
                                    <p><strong>Tháng 11/2022:</strong> VNLC đạt mốc 2 tỷ USD tổng giá trị giao dịch thông qua 300+ dự án thành công. Được Legal 500 vinh danh là "Firm of the Year" tại Việt Nam.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">💰 $2B tổng giá trị</span>
                                        <span class="detail-tag">🎯 300+ dự án</span>
                                        <span class="detail-tag">🏆 Legal 500 Firm of the Year</span>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2023</div>
                                <div class="timeline-content">
                                    <h4>Quốc tế hóa & Mở rộng</h4>
                                    <p><strong>Năm 2023:</strong> Mở rộng dịch vụ ra thị trường Đông Nam Á. Thành lập văn phòng đại diện tại Singapore. Đạt top 5 công ty luật Việt Nam theo Asian Legal Business.</p>
                                    <div class="timeline-details">
                                        <span class="detail-tag">🌏 Văn phòng Singapore</span>
                                        <span class="detail-tag">🏆 Top 5 Vietnam 2023</span>
                                        <span class="detail-tag">👥 60+ luật sư</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Awards and Recognition -->
                    <div class="awards-section">
                        <h3 class="subsection-title">Giải Thưởng & Công Nhận</h3>
                        <div class="awards-grid">
                            <div class="award-item animate-in">
                                <div class="award-icon">🏆</div>
                                <h4>Top 5 Công Ty Luật Việt Nam</h4>
                                <p class="award-organization">Asian Legal Business 2023</p>
                                <p class="award-description">Được công nhận là một trong 5 công ty luật hàng đầu Việt Nam về chất lượng dịch vụ và quy mô hoạt động</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Dịch vụ M&A</span>
                                    <span class="criteria-tag">Tranh tụng</span>
                                    <span class="criteria-tag">Thị trường vốn</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">⭐</div>
                                <h4>Luật Sư Xuất Sắc của Năm</h4>
                                <p class="award-organization">Vietnam Bar Association 2022</p>
                                <p class="award-description">Managing Partner Nguyễn Văn Hùng được vinh danh là Luật sư xuất sắc nhất Việt Nam năm 2022</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Đóng góp xã hội</span>
                                    <span class="criteria-tag">Chuyên môn cao</span>
                                    <span class="criteria-tag">Đạo đức nghề nghiệp</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">🎖️</div>
                                <h4>Dịch Vụ Khách Hàng Tốt Nhất</h4>
                                <p class="award-organization">Legal 500 Asia Pacific 2023</p>
                                <p class="award-description">Được đánh giá cao về chất lượng dịch vụ khách hàng với tỷ lệ hài lòng 98%</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Phản hồi nhanh</span>
                                    <span class="criteria-tag">Chuyên nghiệp</span>
                                    <span class="criteria-tag">Tận tâm</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">🥇</div>
                                <h4>Deal of the Year - M&A</h4>
                                <p class="award-organization">Vietnam M&A Awards 2022</p>
                                <p class="award-description">Giao dịch M&A VinGroup - TechBank trị giá 800 triệu USD được công nhận là giao dịch của năm</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Quy mô lớn</span>
                                    <span class="criteria-tag">Phức tạp cao</span>
                                    <span class="criteria-tag">Tác động tích cực</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">💡</div>
                                <h4>Innovation in Legal Services</h4>
                                <p class="award-organization">Vietnam Legal Tech Awards 2023</p>
                                <p class="award-description">Ghi nhận đóng góp trong việc ứng dụng công nghệ AI và blockchain vào dịch vụ pháp lý</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Công nghệ AI</span>
                                    <span class="criteria-tag">Blockchain</span>
                                    <span class="criteria-tag">Tự động hóa</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">🌍</div>
                                <h4>Best Cross-border Practice</h4>
                                <p class="award-organization">Chambers Asia Pacific 2023</p>
                                <p class="award-description">Được đánh giá cao về khả năng xử lý các giao dịch xuyên biên giới và đầu tư nước ngoài</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Đa quốc gia</span>
                                    <span class="criteria-tag">FDI</span>
                                    <span class="criteria-tag">Hợp đồng quốc tế</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">🏛️</div>
                                <h4>Best Litigation Practice</h4>
                                <p class="award-organization">IFLR Asia Awards 2022</p>
                                <p class="award-description">Công nhận là công ty luật có thực hành tranh tụng tốt nhất Việt Nam với tỷ lệ thắng kiện 95%</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Tranh tụng</span>
                                    <span class="criteria-tag">Trọng tài</span>
                                    <span class="criteria-tag">Tỷ lệ thắng cao</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">📚</div>
                                <h4>Best Training Program</h4>
                                <p class="award-organization">Vietnam Legal Education Awards 2023</p>
                                <p class="award-description">Chương trình đào tạo luật sư trẻ và thực tập sinh được đánh giá là tốt nhất ngành</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">Đào tạo</span>
                                    <span class="criteria-tag">Mentoring</span>
                                    <span class="criteria-tag">Phát triển tài năng</span>
                                </div>
                            </div>
                            
                            <div class="award-item animate-in">
                                <div class="award-icon">🤝</div>
                                <h4>Corporate Social Responsibility</h4>
                                <p class="award-organization">Vietnam CSR Awards 2022</p>
                                <p class="award-description">Ghi nhận đóng góp tích cực cho cộng đồng thông qua các chương trình tư vấn pháp lý miễn phí</p>
                                <div class="award-criteria">
                                    <span class="criteria-tag">CSR</span>
                                    <span class="criteria-tag">Cộng đồng</span>
                                    <span class="criteria-tag">Tư vấn miễn phí</span>
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
