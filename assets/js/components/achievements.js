// Achievements Component
class Achievements {
    constructor() {
        this.achievementsContainer = document.getElementById('achievements-container');
        this.isAchievementsPage = window.location.pathname.includes('achievements.html');
        console.log('Achievements constructor - container found:', this.achievementsContainer);
        console.log('Is achievements page:', this.isAchievementsPage);
        // Only initialize if container exists (for achievements.html page)
        // On index.html, this component won't be loaded
        if (!this.achievementsContainer) {
            console.log('Achievements container not found - skipping initialization');
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
        // Determine if we're on the achievements page or homepage
        const isPage = this.isAchievementsPage;
        const sectionClass = isPage ? 'achievements-page-content' : 'achievements stats-enhanced';
        
        // Build achievements list HTML
        const achievementsList = this.getAchievementsList(isPage);
        
        // On achievements page, container is already in HTML, so we just render the content
        // On homepage, we need to create the section structure
        if (isPage) {
        this.achievementsContainer.innerHTML = `
                <!-- Thành tựu chung của VNLC -->
                <div class="achievement-section achievements-main-section animate-in">
                    <div class="section-header">
                        <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">🏆</div>
                        <h1 class="section-title" style="color: var(--navy); margin-top: 40px;">Thành Tựu Chung Của VNLC</h1>
                        <p class="section-subtitle" style="color: var(--dark-gray); font-size: 1.1rem; margin-top: 10px;">Các dự án và tư vấn tiêu biểu</p>
                        <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
                    </div>
                    <div class="achievements-intro" style="color: var(--dark-gray);">
                        <p>VNLC đã gặt hái được những thành công đáng kể thông qua việc triển khai các dự án tư vấn phức tạp, đặc biệt là trong lĩnh vực doanh nghiệp, tài chính và phát triển dự án lớn. Các thành tựu này được hỗ trợ bởi đội ngũ nhân sự và cố vấn giàu kinh nghiệm.</p>
                                </div>
                    <div class="achievements-list">
                        ${achievementsList}
                            </div>
                                    </div>
            `;
        } else {
            this.achievementsContainer.innerHTML = `
                <section class="${sectionClass}" id="achievements">
                    <div class="container">
                        <!-- Thành tựu chung của VNLC -->
                        <div class="achievement-section achievements-main-section animate-in">
                        <div class="section-header">
                                <div class="decorative-icon" style="background: linear-gradient(135deg, var(--gold), var(--light-gold)); color: var(--navy);">🏆</div>
                                <h2 class="section-title" style="color: white;">Thành Tựu Chung Của VNLC</h2>
                                <p class="section-subtitle" style="color: rgba(255, 255, 255, 0.9); font-size: 1.1rem; margin-top: 10px;">Các dự án và tư vấn tiêu biểu</p>
                            <div class="decorative-line" style="background: linear-gradient(90deg, var(--gold), transparent);"></div>
                                    </div>
                            <div class="achievements-intro" style="color: rgba(255, 255, 255, 0.9);">
                                <p>VNLC đã gặt hái được những thành công đáng kể thông qua việc triển khai các dự án tư vấn phức tạp, đặc biệt là trong lĩnh vực doanh nghiệp, tài chính và phát triển dự án lớn. Các thành tựu này được hỗ trợ bởi đội ngũ nhân sự và cố vấn giàu kinh nghiệm.</p>
                                </div>
                            <div class="achievements-list">
                                ${achievementsList}
                            </div>
                        </div>
                                </div>
                </section>
            `;
        }
        
        // Update colors for page vs section after rendering
        if (isPage) {
            setTimeout(() => {
                const titles = this.achievementsContainer.querySelectorAll('.achievement-title');
                titles.forEach(title => {
                    title.style.color = 'var(--navy)';
                });
                const details = this.achievementsContainer.querySelectorAll('.achievement-details li');
                details.forEach(detail => {
                    detail.style.color = 'var(--dark-gray)';
                });
            }, 0);
        }
    }

    getAchievementsList(isPage) {
        const achievements = [
            {
                title: 'Xây dựng hợp đồng Hợp tác quốc tế giữa Trung tâm Hội chợ Triển lãm Việt Nam và Tập đoàn tổ chức sự kiện GL Events – Pháp',
                details: [
                    'VNLC đã thực hiện tư vấn và xây dựng bộ hợp đồng hợp tác chiến lược với GL Events – một trong những tập đoàn tổ chức sự kiện hàng đầu thế giới.',
                    'Hợp đồng này nằm trong khuôn khổ phát triển hạ tầng triển lãm và tổ chức sự kiện đẳng cấp quốc tế tại Việt Nam.'
                ]
            },
            {
                title: 'Tư vấn quy trình vận hành cho khách sạn Vinpearl Hạ Long (2021)',
                details: [
                    'Công ty đã tư vấn toàn diện về quy trình vận hành, quản lý dịch vụ và xây dựng hệ thống kiểm soát chất lượng nội bộ cho khách sạn 5 sao Vinpearl Hạ Long.',
                    'Mục tiêu là đảm bảo tiêu chuẩn quốc tế và nâng cao trải nghiệm khách hàng.'
                ]
            },
            {
                title: 'Tư vấn chiến lược phát triển khu du lịch sinh thái rừng Hòn Bà – Nha Trang',
                details: [
                    'VNLC tư vấn lựa chọn chủ đề phát triển, lập quy hoạch phân khu chức năng, đề xuất thiết kế sản phẩm – dịch vụ đặc thù.',
                    'Đồng thời, công ty định hướng phát triển bền vững cho dự án khu nghỉ dưỡng sinh thái cao cấp Hòn Bà, gắn với bảo tồn rừng và phát triển du lịch xanh.'
                ]
            },
            {
                title: 'Tư vấn pháp lý thường xuyên cho Công ty Cổ phần Cy Finance (C22)',
                details: [
                    'VNLC đảm nhiệm vai trò đối tác pháp chế outsource cho Cy Finance (C22) – doanh nghiệp hoạt động trong lĩnh vực cho vay tín chấp.',
                    'Phạm vi công việc bao gồm: thu hồi nợ xấu, tư vấn quản trị nội bộ, cập nhật cơ sở pháp lý thường xuyên, và giải quyết tranh chấp.',
                    'Sự đồng hành của VNLC giúp C22 duy trì nền tảng pháp lý vững chắc, hoạt động minh bạch, hạn chế rủi ro và củng cố uy tín.'
                ]
            },
            {
                title: 'Tư vấn pháp lý thường xuyên trong quá trình vận hành lĩnh vực cho vay của chuỗi cho vay Happy Money',
                details: [
                    'VNLC vinh dự là đối tác pháp chế outsource cho chuỗi cho vay Happy Money (Doanh nghiệp sở hữu quy mô vốn hóa lên tới 500 triệu đô la Mỹ).',
                    'Công ty đã tư vấn toàn diện các vấn đề pháp lý liên quan đến chiến lược quản trị dòng vốn, cơ chế vận hành hoạt động cho vay tín dụng cũng như xử lý tranh chấp phát sinh.',
                    'Việc hợp tác giúp Happy Money có nền tảng pháp lý vững chắc, hạn chế tối đa rủi ro, duy trì sự minh bạch và củng cố uy tín thương hiệu.'
                ]
            },
            {
                title: 'Tư vấn quy trình vận hành và đầu tư phát triển dự án Khinh khí cầu trên cao nguyên đá Đồng Văn (2019)',
                details: [
                    'VNLC cung cấp tư vấn toàn diện cho quá trình vận hành dự án, từ khâu xây dựng mô hình quản lý, hoàn thiện hành lang pháp lý cho đến định hướng chiến lược phát triển dài hạn.',
                    'Công ty đã đưa ra các giải pháp khả thi và an toàn để thu hút nguồn vốn đầu tư, nâng cao uy tín và sức cạnh tranh của dự án.'
                ]
            },
            {
                title: 'Tư vấn phát triển dự án Thiên đường thực vật trong rừng thẳm của Yersin (2021)',
                details: [
                    'Đây là dự án trọng điểm mang quy mô quốc gia, có quy mô phát triển lên đến 530 ha.',
                    'VNLC đảm bảo mọi thủ tục pháp lý đều được đáp ứng nghiêm ngặt, đòi hỏi sự chính xác, chặt chẽ và minh bạch tuyệt đối nhằm đảm bảo tiến trình triển khai suôn sẻ và củng cố nền tảng pháp lý lâu dài.'
                ]
            },
            {
                title: 'Tư vấn, đào tạo và tổ chức đội ngũ điều hành giải đua F1 Việt Nam (2020)',
                details: [
                    'VNLC tham gia tư vấn chiến lược và trực tiếp triển khai quy trình tuyển chọn – đào tạo – xây dựng đội ngũ nhân sự chủ chốt phụ trách vận hành chặng đua Formula 1 Vietnam Grand Prix.',
                    'Do tính chất là một sự kiện thể thao quốc tế, dự án đòi hỏi yêu cầu khắt khe về quy trình tổ chức, cơ chế phối hợp và năng lực nhân sự theo tiêu chuẩn toàn cầu.'
                ]
            },
            {
                title: 'Tư vấn chiến lược kinh doanh sản phẩm thực phẩm bảo vệ sức khỏe cho Tập đoàn Nanum CNC tại thị trường Việt Nam',
                details: [
                    'VNLC thực hiện tư vấn toàn diện, bao gồm: kiểm soát tính pháp lý sản phẩm, xây dựng chiến lược tiếp cận thị trường, tư vấn pháp lý xuyên suốt cũng như hỗ trợ triển khai và vận hành hệ thống phân phối.',
                    'Sự đồng hành của VNLC giúp doanh nghiệp đảm bảo tuân thủ đầy đủ pháp luật Việt Nam và phát triển bền vững.'
                ]
            }
        ];

        return achievements.map((achievement, index) => `
            <div class="achievement-item animate-in">
                <div class="achievement-number">${index + 1}</div>
                <div class="achievement-content">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <ul class="achievement-details">
                        ${achievement.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    bindEvents() {
        // Intersection Observer for animations
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

        // Observe achievement sections and items for animation
        setTimeout(() => {
            const sections = this.achievementsContainer.querySelectorAll('.achievement-section');
            sections.forEach(section => observer.observe(section));
            
            const items = this.achievementsContainer.querySelectorAll('.achievement-item');
            items.forEach((item, index) => {
                // Stagger animation delays
                setTimeout(() => {
                    observer.observe(item);
                }, index * 100);
            });
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Achievements();
});
