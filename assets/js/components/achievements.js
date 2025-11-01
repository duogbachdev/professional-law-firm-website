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
                            <h3 class="category-title">Cam Kết Chất Lượng</h3>
                            <div class="business-metrics">
                                <div class="metric-card">
                                    <div class="metric-number">9+</div>
                                    <div class="metric-label">Dự án nổi bật</div>
                                    <div class="metric-description">Từ hợp tác quốc tế đến các dự án trong nước</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">100%</div>
                                    <div class="metric-label">Cam kết chất lượng</div>
                                    <div class="metric-description">Giải pháp pháp lý toàn diện và hiệu quả</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">2024</div>
                                    <div class="metric-label">Năm thành lập</div>
                                    <div class="metric-description">Kế thừa nền tảng chuyên gia từ QPVN</div>
                                </div>

                                <div class="metric-card">
                                    <div class="metric-number">4+</div>
                                    <div class="metric-label">Chuyên gia hàng đầu</div>
                                    <div class="metric-description">Đội ngũ giàu kinh nghiệm và chuyên môn sâu</div>
                                </div>
                            </div>
                        </div>

                        <div class="achievement-category animate-in">
                            <h3 class="category-title">Dự Án Nổi Bật</h3>
                            <div class="featured-projects">
                                <div class="project-card">
                                    <div class="project-icon">🤝</div>
                                    <h4>Hợp Đồng Hợp Tác Quốc Tế</h4>
                                    <p class="project-value">Vingroup & GL Events</p>
                                    <p class="project-description">Xây dựng hợp đồng hợp tác quốc tế giữa Vingroup và GL Events (Pháp)</p>
                                    <div class="project-tags">
                                        <span class="tag">Hợp tác quốc tế</span>
                                        <span class="tag">M&A</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🏖️</div>
                                    <h4>Tư Vấn Vinpearl Hạ Long</h4>
                                    <p class="project-value">Quy Trình Vận Hành</p>
                                    <p class="project-description">Tư vấn quy trình vận hành cho Vinpearl Hạ Long</p>
                                    <div class="project-tags">
                                        <span class="tag">Du lịch</span>
                                        <span class="tag">Tư vấn vận hành</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🌴</div>
                                    <h4>Khu Du Lịch Sinh Thái</h4>
                                    <p class="project-value">Hòn Bà – Nha Trang</p>
                                    <p class="project-description">Tư vấn phát triển khu du lịch sinh thái Hòn Bà – Nha Trang</p>
                                    <div class="project-tags">
                                        <span class="tag">Du lịch sinh thái</span>
                                        <span class="tag">Phát triển dự án</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">💰</div>
                                    <h4>Tư Vấn Pháp Chế</h4>
                                    <p class="project-value">Cy Finance & Happy Money</p>
                                    <p class="project-description">Tư vấn pháp chế thường xuyên cho Cy Finance (C22) và Happy Money</p>
                                    <div class="project-tags">
                                        <span class="tag">Tài chính</span>
                                        <span class="tag">Pháp chế</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🎈</div>
                                    <h4>Dự Án Khinh Khí Cầu</h4>
                                    <p class="project-value">Đồng Văn</p>
                                    <p class="project-description">Tư vấn vận hành dự án khinh khí cầu Đồng Văn</p>
                                    <div class="project-tags">
                                        <span class="tag">Du lịch</span>
                                        <span class="tag">Vận hành dự án</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🌿</div>
                                    <h4>Thiên Đường Thực Vật Yersin</h4>
                                    <p class="project-value">530 Ha</p>
                                    <p class="project-description">Dự án "Thiên đường thực vật Yersin" quy mô 530 ha</p>
                                    <div class="project-tags">
                                        <span class="tag">Nông nghiệp</span>
                                        <span class="tag">Dự án lớn</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🏎️</div>
                                    <h4>F1 Vietnam Grand Prix</h4>
                                    <p class="project-value">Đào Tạo Đội Ngũ</p>
                                    <p class="project-description">Đào tạo đội ngũ điều hành F1 Vietnam Grand Prix</p>
                                    <div class="project-tags">
                                        <span class="tag">Thể thao</span>
                                        <span class="tag">Đào tạo</span>
                                    </div>
                                </div>

                                <div class="project-card">
                                    <div class="project-icon">🍃</div>
                                    <h4>Nanum CNC (Hàn Quốc)</h4>
                                    <p class="project-value">Chiến Lược Kinh Doanh</p>
                                    <p class="project-description">Tư vấn chiến lược kinh doanh thực phẩm bảo vệ sức khỏe</p>
                                    <div class="project-tags">
                                        <span class="tag">Quốc tế</span>
                                        <span class="tag">Chiến lược</span>
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
