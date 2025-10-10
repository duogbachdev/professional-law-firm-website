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
                    <div class="section-header">
                        <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">🏆</div>
                        <h2 class="section-title" style="color: white;">Thành Tựu Công Ty</h2>
                        <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
                        <p class="section-subtitle" style="color: rgba(255,255,255,0.9);">Những dấu mốc quan trọng trong hành trình phát triển của VNLC</p>
                    </div>

                    <!-- Key Achievements -->
                    <div class="achievements-showcase">
                        <div class="achievement-category animate-in">
                            <h3 class="category-title">Giải Thưởng & Công Nhận</h3>
                            <div class="achievements-grid">
                                <div class="achievement-card">
                                    <div class="achievement-badge">
                                        <div class="achievement-icon">🥇</div>
                                        <span>Top 5 Công Ty Luật Việt Nam</span>
                                    </div>
                                    <p class="achievement-detail">Asian Legal Business 2023</p>
                                    <p class="achievement-description">Được công nhận là một trong những công ty luật hàng đầu Việt Nam</p>
                                </div>

                                <div class="achievement-card">
                                    <div class="achievement-badge">
                                        <div class="achievement-icon">⭐</div>
                                        <span>Luật Sư Xuất Sắc</span>
                                    </div>
                                    <p class="achievement-detail">Vietnam Bar Association 2022</p>
                                    <p class="achievement-description">Managing Partner được vinh danh là Luật sư xuất sắc của năm</p>
                                </div>

                                <div class="achievement-card">
                                    <div class="achievement-badge">
                                        <div class="achievement-icon">🏆</div>
                                        <span>Dịch Vụ M&A Tốt Nhất</span>
                                    </div>
                                    <p class="achievement-detail">Legal 500 Asia Pacific 2023</p>
                                    <p class="achievement-description">Được đánh giá cao trong lĩnh vực M&A và đầu tư</p>
                                </div>

                                <div class="achievement-card">
                                    <div class="achievement-badge">
                                        <div class="achievement-icon">🎖️</div>
                                        <span>Innovation Award</span>
                                    </div>
                                    <p class="achievement-detail">Vietnam Legal Tech Awards 2023</p>
                                    <p class="achievement-description">Ghi nhận đóng góp trong việc ứng dụng công nghệ vào pháp lý</p>
                                </div>
                            </div>
                        </div>

                        <div class="achievement-category animate-in">
                            <h3 class="category-title">Thành Tích Kinh Doanh</h3>
                            <div class="business-metrics">
                                <div class="metric-card">
                                    <div class="metric-number">500+</div>
                                    <div class="metric-label">Dự án thành công</div>
                                    <div class="metric-description">Từ các giao dịch M&A đến tranh tụng phức tạp</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">$2.5B</div>
                                    <div class="metric-label">Tổng giá trị giao dịch</div>
                                    <div class="metric-description">Các giao dịch M&A và đầu tư đã tư vấn</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">98%</div>
                                    <div class="metric-label">Tỷ lệ thành công</div>
                                    <div class="metric-description">Trong các vụ tranh tụng và trọng tài</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">1000+</div>
                                    <div class="metric-label">Khách hàng hài lòng</div>
                                    <div class="metric-description">Từ startup đến các tập đoàn lớn</div>
                                </div>
                            </div>
                        </div>

                        <div class="achievement-category animate-in">
                            <h3 class="category-title">Dự Án Tiêu Biểu</h3>
                            <div class="featured-projects">
                                <div class="project-card">
                                    <div class="project-icon">🏦</div>
                                    <h4>IPO Ngân hàng ABC</h4>
                                    <p class="project-value">$500M</p>
                                    <p class="project-description">Tư vấn pháp lý cho đợt IPO lớn nhất năm 2023</p>
                                    <div class="project-tags">
                                        <span class="tag">Capital Markets</span>
                                        <span class="tag">IPO</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🏭</div>
                                    <h4>M&A Tập đoàn XYZ</h4>
                                    <p class="project-value">$800M</p>
                                    <p class="project-description">Thực hiện giao dịch M&A xuyên quốc gia lớn nhất</p>
                                    <div class="project-tags">
                                        <span class="tag">M&A</span>
                                        <span class="tag">Cross-border</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">⚡</div>
                                    <h4>Dự án Năng lượng Sạch</h4>
                                    <p class="project-value">$300M</p>
                                    <p class="project-description">Tư vấn pháp lý cho dự án năng lượng tái tạo</p>
                                    <div class="project-tags">
                                        <span class="tag">Energy</span>
                                        <span class="tag">Green Finance</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">💻</div>
                                    <h4>Fintech Startup</h4>
                                    <p class="project-value">$50M</p>
                                    <p class="project-description">Tư vấn pháp lý cho vòng gọi vốn Series B</p>
                                    <div class="project-tags">
                                        <span class="tag">Fintech</span>
                                        <span class="tag">Venture Capital</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="achievement-category animate-in">
                            <h3 class="category-title">Đóng Góp Xã Hội</h3>
                            <div class="social-contributions">
                                <div class="contribution-item">
                                    <div class="contribution-icon">📚</div>
                                    <h4>Chương Trình Đào Tạo</h4>
                                    <p>Đào tạo miễn phí cho 500+ sinh viên luật mỗi năm</p>
                                </div>

                                <div class="contribution-item">
                                    <div class="contribution-icon">⚖️</div>
                                    <h4>Tư Vấn Pháp Lý Miễn Phí</h4>
                                    <p>Hỗ trợ pháp lý miễn phí cho 200+ doanh nghiệp nhỏ</p>
                                </div>

                                <div class="contribution-item">
                                    <div class="contribution-icon">🌱</div>
                                    <h4>Chương Trình Bền Vững</h4>
                                    <p>Cam kết trung hòa carbon và sử dụng năng lượng sạch</p>
                                </div>

                                <div class="contribution-item">
                                    <div class="contribution-icon">🤝</div>
                                    <h4>Hỗ Trợ Cộng Đồng</h4>
                                    <p>Tài trợ cho các dự án giáo dục và phát triển cộng đồng</p>
                                </div>
                            </div>
                        </div>

                        <!-- Milestone Timeline -->
                        <div class="milestone-timeline">
                            <h3 class="category-title">Các Mốc Quan Trọng</h3>
                            <div class="timeline">
                                <div class="timeline-item">
                                    <div class="timeline-year">2008</div>
                                    <div class="timeline-content">
                                        <h4>Thành lập VNLC</h4>
                                        <p><strong>Tháng 3/2008:</strong> VNLC được thành lập với vốn điều lệ 5 tỷ VNĐ, khởi đầu với 5 luật sư và văn phòng 200m² tại Hà Nội.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">👥 5 luật sư</span>
                                            <span class="milestone-stat">🏢 200m² văn phòng</span>
                                            <span class="milestone-stat">💰 5 tỷ VNĐ vốn</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2010</div>
                                    <div class="timeline-content">
                                        <h4>Giao dịch M&A đầu tiên</h4>
                                        <p><strong>Tháng 6/2010:</strong> Thực hiện giao dịch M&A đầu tiên trị giá 10 triệu USD giữa TechBank và ngân hàng nhỏ. Nhận giải "Deal of the Year 2010".</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">💼 $10M giao dịch</span>
                                            <span class="milestone-stat">🏆 Deal of the Year</span>
                                            <span class="milestone-stat">📈 Tăng trưởng 150%</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2012</div>
                                    <div class="timeline-content">
                                        <h4>Mở rộng đội ngũ</h4>
                                        <p><strong>Năm 2012:</strong> Đội ngũ tăng lên 25 luật sư, mở rộng văn phòng lên 800m². Thành lập phòng chuyên môn về sở hữu trí tuệ.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">👥 25 luật sư</span>
                                            <span class="milestone-stat">🏢 800m² văn phòng</span>
                                            <span class="milestone-stat">💡 Phòng IP</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2015</div>
                                    <div class="timeline-content">
                                        <h4>Đạt mốc 100 dự án</h4>
                                        <p><strong>Tháng 12/2015:</strong> VNLC đạt mốc 100 dự án thành công với tổng giá trị 500 triệu USD. Được vinh danh "Rising Law Firm of the Year".</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">🎯 100 dự án</span>
                                            <span class="milestone-stat">💰 $500M tổng giá trị</span>
                                            <span class="milestone-stat">🏆 Rising Firm 2015</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2016</div>
                                    <div class="timeline-content">
                                        <h4>Văn phòng TP.HCM</h4>
                                        <p><strong>Tháng 9/2016:</strong> Thành lập chi nhánh TP.HCM với 15 luật sư. Thiết lập quan hệ đối tác với Singapore, Thái Lan, Malaysia.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">🏢 Văn phòng TP.HCM</span>
                                            <span class="milestone-stat">🌍 Đối tác quốc tế</span>
                                            <span class="milestone-stat">👥 40+ luật sư</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2018</div>
                                    <div class="timeline-content">
                                        <h4>IPO TechBank</h4>
                                        <p><strong>Tháng 4/2018:</strong> Tư vấn thành công IPO TechBank trị giá 200 triệu USD - IPO lớn nhất năm 2018. Vào top 5 công ty luật Việt Nam.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">📈 IPO $200M</span>
                                            <span class="milestone-stat">🏆 Top 5 VN</span>
                                            <span class="milestone-stat">📊 IPO lớn nhất 2018</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2020</div>
                                    <div class="timeline-content">
                                        <h4>Chuyển đổi số</h4>
                                        <p><strong>Năm 2020:</strong> Triển khai AI, blockchain trong dịch vụ pháp lý. Phát triển nền tảng tư vấn trực tuyến. Duy trì 100% hoạt động trong COVID-19.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">🤖 AI & Blockchain</span>
                                            <span class="milestone-stat">💻 Nền tảng online</span>
                                            <span class="milestone-stat">🛡️ 100% hoạt động COVID</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2022</div>
                                    <div class="timeline-content">
                                        <h4>Đạt mốc $2B</h4>
                                        <p><strong>Tháng 11/2022:</strong> VNLC đạt mốc 2 tỷ USD tổng giá trị giao dịch qua 300+ dự án. Nhận "Firm of the Year" từ Legal 500.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">💰 $2B tổng giá trị</span>
                                            <span class="milestone-stat">🎯 300+ dự án</span>
                                            <span class="milestone-stat">🏆 Legal 500 Firm of Year</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2023</div>
                                    <div class="timeline-content">
                                        <h4>Quốc tế hóa hoàn toàn</h4>
                                        <p><strong>Năm 2023:</strong> Mở rộng ra Đông Nam Á, thành lập văn phòng Singapore. Đạt top 5 công ty luật Việt Nam theo Asian Legal Business.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">🌏 Văn phòng Singapore</span>
                                            <span class="milestone-stat">🏆 Top 5 Vietnam 2023</span>
                                            <span class="milestone-stat">👥 60+ luật sư</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2024</div>
                                    <div class="timeline-content">
                                        <h4>Tầm nhìn 2030</h4>
                                        <p><strong>Kế hoạch 2024-2030:</strong> Phát triển thành công ty luật hàng đầu khu vực Đông Nam Á với 100+ luật sư và văn phòng tại 5 quốc gia.</p>
                                        <div class="milestone-stats">
                                            <span class="milestone-stat">🎯 Top 1 ASEAN</span>
                                            <span class="milestone-stat">👥 100+ luật sư</span>
                                            <span class="milestone-stat">🌏 5 quốc gia</span>
                                        </div>
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
        // Add counter animation for metrics
        const animateCounters = () => {
            const counters = this.achievementsContainer.querySelectorAll('.metric-number');
            
            counters.forEach(counter => {
                const target = counter.textContent;
                const numericValue = parseInt(target.replace(/[^\d]/g, ''));
                
                if (numericValue && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    let current = 0;
                    const increment = numericValue / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            current = numericValue;
                            clearInterval(timer);
                        }
                        
                        if (target.includes('$')) {
                            counter.textContent = '$' + Math.floor(current) + (target.includes('B') ? 'B' : 'M');
                        } else if (target.includes('%')) {
                            counter.textContent = Math.floor(current) + '%';
                        } else {
                            counter.textContent = Math.floor(current) + '+';
                        }
                    }, 20);
                }
            });
        };

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    if (entry.target.classList.contains('business-metrics')) {
                        setTimeout(animateCounters, 500);
                    }
                }
            });
        }, observerOptions);

        // Observe timeline items for animation
        setTimeout(() => {
            const timelineItems = this.achievementsContainer.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => observer.observe(item));
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Achievements();
});
