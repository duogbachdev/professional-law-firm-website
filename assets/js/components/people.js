// Our People Component
class OurPeople {
    constructor() {
        this.peopleContainer = document.getElementById('people-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.peopleContainer.innerHTML = `
            <section class="our-people section-with-pattern" id="people">
                <div class="container">
                    <div class="section-header">
                        <div class="decorative-icon">👥</div>
                        <h2 class="section-title">Our People</h2>
                        <div class="decorative-line"></div>
                        <p class="section-subtitle">Đội ngũ luật sư và chuyên gia hàng đầu với kinh nghiệm sâu rộng</p>
                    </div>

                    <!-- Leadership Team -->
                    <div class="team-section">
                        <h3 class="subsection-title">Đội Ngũ Chuyên Gia</h3>
                        <div class="leadership-grid">
                            <div class="team-member">
                                <div class="team-avatar">PQ</div>
                                <h4>TS. Nguyễn Thị Quý Phương</h4>
                                <p class="position">Cố Vấn Cấp Cao</p>
                                <p class="specialization">Nguyên Giám đốc PVF, Ủy viên FIA</p>
                                <div class="member-experience">
                                    <span class="experience-badge">Chuyên gia cấp cao</span>
                                </div>
                                <div class="member-credentials">
                                    <span class="credential">Từng giữ nhiều vị trí cao tại Vingroup</span>
                                </div>
                            </div>

                            <div class="team-member">
                                <div class="team-avatar">VH</div>
                                <h4>TS. Vũ Đình Hoàng</h4>
                                <p class="position">Chuyên Gia Pháp Lý</p>
                                <p class="specialization">Hình sự & Chính sách công</p>
                                <div class="member-experience">
                                    <span class="experience-badge">Chuyên gia hàng đầu</span>
                                </div>
                                <div class="member-credentials">
                                    <span class="credential">Công tác tại Văn phòng Chính phủ</span>
                                </div>
                            </div>

                            <div class="team-member">
                                <div class="team-avatar">PT</div>
                                <h4>Ông Phạm Thanh Tuấn</h4>
                                <p class="position">Giám Đốc VNLC</p>
                                <p class="specialization">Chuyên gia pháp lý tài chính – tín dụng</p>
                                <div class="member-experience">
                                    <span class="experience-badge">10+ năm kinh nghiệm</span>
                                </div>
                                <div class="member-credentials">
                                    <span class="credential">Chuyên môn sâu về tài chính & tín dụng</span>
                                </div>
                            </div>

                            <div class="team-member">
                                <div class="team-avatar">TN</div>
                                <h4>Luật Sư Trần Trọng Nam</h4>
                                <p class="position">Thạc Sĩ Luật Học</p>
                                <p class="specialization">Doanh nghiệp & Dân sự</p>
                                <div class="member-experience">
                                    <span class="experience-badge">Chuyên gia hàng đầu</span>
                                </div>
                                <div class="member-credentials">
                                    <span class="credential">Nguyên Trưởng phòng Pháp chế Techcombank</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Practice Groups -->
                    <div class="practice-groups">
                        <h3 class="subsection-title">Các Nhóm Chuyên Môn</h3>
                        <div class="practice-grid">
                            <div class="practice-group">
                                <div class="practice-icon">⚖️</div>
                                <h4>Corporate & M&A</h4>
                                <p class="practice-description">Chuyên gia về sáp nhập, mua bán và quản trị doanh nghiệp</p>
                                <div class="practice-stats">
                                    <span class="stat">8 luật sư</span>
                                    <span class="stat">200+ giao dịch</span>
                                </div>
                            </div>

                            <div class="practice-group">
                                <div class="practice-icon">🏛️</div>
                                <h4>Litigation & Arbitration</h4>
                                <p class="practice-description">Tranh tụng thương mại và trọng tài quốc tế</p>
                                <div class="practice-stats">
                                    <span class="stat">6 luật sư</span>
                                    <span class="stat">95% thành công</span>
                                </div>
                            </div>

                            <div class="practice-group">
                                <div class="practice-icon">💰</div>
                                <h4>Capital Markets</h4>
                                <p class="practice-description">Thị trường vốn, IPO và các giao dịch tài chính</p>
                                <div class="practice-stats">
                                    <span class="stat">5 luật sư</span>
                                    <span class="stat">50+ IPO</span>
                                </div>
                            </div>

                            <div class="practice-group">
                                <div class="practice-icon">💡</div>
                                <h4>Intellectual Property</h4>
                                <p class="practice-description">Sở hữu trí tuệ, công nghệ và đổi mới</p>
                                <div class="practice-stats">
                                    <span class="stat">4 luật sư</span>
                                    <span class="stat">1000+ đăng ký</span>
                                </div>
                            </div>

                            <div class="practice-group">
                                <div class="practice-icon">🏠</div>
                                <h4>Real Estate</h4>
                                <p class="practice-description">Bất động sản, đầu tư và phát triển dự án</p>
                                <div class="practice-stats">
                                    <span class="stat">7 luật sư</span>
                                    <span class="stat">300+ dự án</span>
                                </div>
                            </div>

                            <div class="practice-group">
                                <div class="practice-icon">🌐</div>
                                <h4>Technology & Fintech</h4>
                                <p class="practice-description">Công nghệ, fintech và chuyển đổi số</p>
                                <div class="practice-stats">
                                    <span class="stat">6 luật sư</span>
                                    <span class="stat">100+ startup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Team Values -->
                    <div class="team-values">
                        <h3 class="subsection-title">Giá Trị Đội Ngũ</h3>
                        <div class="values-grid">
                            <div class="value-item">
                                <div class="value-icon">🎓</div>
                                <h4>Học Vấn Cao</h4>
                                <p>100% luật sư có bằng đại học, 80% có bằng thạc sĩ từ các trường danh tiếng quốc tế</p>
                            </div>
                            <div class="value-item">
                                <div class="value-icon">🌍</div>
                                <h4>Kinh Nghiệm Quốc Tế</h4>
                                <p>Nhiều luật sư có kinh nghiệm làm việc tại các công ty luật hàng đầu thế giới</p>
                            </div>
                            <div class="value-item">
                                <div class="value-icon">🤝</div>
                                <h4>Làm Việc Nhóm</h4>
                                <p>Văn hóa hợp tác, hỗ trợ lẫn nhau để đạt được kết quả tốt nhất cho khách hàng</p>
                            </div>
                            <div class="value-item">
                                <div class="value-icon">📚</div>
                                <h4>Học Tập Liên Tục</h4>
                                <p>Đào tạo thường xuyên để cập nhật kiến thức pháp luật và xu hướng thị trường</p>
                            </div>
                        </div>
                    </div>

                    <!-- Diversity & Inclusion -->
                    <div class="diversity-section">
                        <div class="diversity-content">
                            <div class="diversity-text">
                                <h3>Đa Dạng & Hòa Nhập</h3>
                                <p>VNLC tự hào có đội ngũ đa dạng với 45% nữ luật sư, nhiều thế hệ từ Gen X đến Gen Z, 
                                và đại diện từ nhiều vùng miền khác nhau. Chúng tôi tin rằng sự đa dạng làm phong phú 
                                góc nhìn và nâng cao chất lượng dịch vụ.</p>
                                <div class="diversity-stats">
                                    <div class="diversity-stat">
                                        <span class="stat-number">45%</span>
                                        <span class="stat-label">Nữ luật sư</span>
                                    </div>
                                    <div class="diversity-stat">
                                        <span class="stat-number">25%</span>
                                        <span class="stat-label">Dưới 35 tuổi</span>
                                    </div>
                                    <div class="diversity-stat">
                                        <span class="stat-number">30%</span>
                                        <span class="stat-label">Kinh nghiệm quốc tế</span>
                                    </div>
                                </div>
                            </div>
                            <div class="diversity-visual">
                                <div class="image-placeholder">
                                    Đội ngũ đa dạng VNLC
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Add hover effects for team members
        this.peopleContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.team-member, .practice-group, .value-item')) {
                const element = e.target.closest('.team-member, .practice-group, .value-item');
                element.style.transition = 'all 0.4s ease';
            }
        }, true);

        // Add scroll animations
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

        // Observe team sections
        const teamSections = this.peopleContainer.querySelectorAll('.team-section, .practice-groups, .team-values');
        teamSections.forEach(section => observer.observe(section));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OurPeople();
});

