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

    renderTeamMember(person, isStaff = false) {
        const clickableClass = isStaff ? '' : 'team-member-clickable';
        return `
            <div class="team-member ${clickableClass}" data-person-id="${person.id}">
                <div class="team-avatar">${person.avatar}</div>
                <h4>${person.name}</h4>
                <p class="position">${person.position}</p>
                <p class="specialization">${person.specialization}</p>
                ${!isStaff ? `
                    <div class="member-experience">
                        <span class="experience-badge">Xem chi tiết →</span>
                    </div>
                ` : ''}
                ${person.summary ? `
                    <div class="member-credentials">
                        <span class="credential">${person.summary}</span>
                    </div>
                ` : ''}
            </div>
        `;
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
                            ${this.renderTeamMember(peopleData['nguyen-thi-quy-phuong'])}
                            ${this.renderTeamMember(peopleData['vu-dinh-hoang'])}
                            ${this.renderTeamMember(peopleData['pham-thanh-tuan'])}
                            ${this.renderTeamMember(peopleData['tran-trong-nam'])}
                        </div>
                    </div>

                    <!-- Staff Team -->
                    <div class="team-section staff-section">
                        <h3 class="subsection-title">Đội Ngũ Nhân Sự</h3>
                        <div class="staff-description">
                            <p>VNLC nhấn mạnh rằng đội ngũ nhân sự của công ty có nhân lực dồi dào, được đào tạo tại các trường đại học, học viện top đầu Việt Nam về ngành Luật.</p>
                        </div>
                        <div class="leadership-grid staff-grid">
                            ${this.renderTeamMember(staffData['do-nhat-minh'], true)}
                            ${this.renderTeamMember(staffData['ho-tung-duong'], true)}
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
        // Click handlers for team members
        setTimeout(() => {
            const teamMembers = this.peopleContainer.querySelectorAll('.team-member-clickable');
            teamMembers.forEach(member => {
                member.addEventListener('click', (e) => {
                    const personId = member.getAttribute('data-person-id');
                    if (personId) {
                        // Redirect to detail page for better SEO
                        window.location.href = `people-detail.html?id=${personId}`;
                    }
                });
                
                // Add cursor pointer
                member.style.cursor = 'pointer';
            });

        }, 200);

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
        setTimeout(() => {
            const teamSections = this.peopleContainer.querySelectorAll('.team-section, .staff-section');
            teamSections.forEach(section => observer.observe(section));
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OurPeople();
});

