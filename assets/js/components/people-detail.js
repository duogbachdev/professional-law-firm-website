// People Detail Page Component
class PeopleDetail {
    constructor() {
        this.personId = this.getPersonIdFromURL();
        this.person = peopleData[this.personId];
        this.baseURL = window.location.origin;
        this.init();
    }

    getPersonIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || '';
    }

    init() {
        if (!this.person) {
            this.showNotFound();
            return;
        }
        this.updateMetaTags();
        this.updateStructuredData();
        this.render();
        this.setupBreadcrumb();
    }

    updateMetaTags() {
        const person = this.person;
        const title = `${person.name} - ${person.position} | VNLC`;
        const description = person.summary || `${person.name} - ${person.position} tại Vietnam Legal Consulting (VNLC). ${person.specialization}`;
        const keywords = `luật sư, ${person.name}, ${person.position}, VNLC, Vietnam Legal Consulting, ${person.specialization}`;
        const url = `${this.baseURL}/people-detail.html?id=${this.personId}`;

        // Update title
        document.title = title;
        document.getElementById('page-title').textContent = title;

        // Update meta tags
        document.getElementById('meta-description').content = description;
        document.getElementById('meta-keywords').content = keywords;
        document.getElementById('canonical-url').href = url;

        // Update Open Graph
        document.getElementById('og-url').content = url;
        document.getElementById('og-title').content = title;
        document.getElementById('og-description').content = description;

        // Update Twitter
        document.getElementById('twitter-url').content = url;
        document.getElementById('twitter-title').content = title;
        document.getElementById('twitter-description').content = description;
    }

    updateStructuredData() {
        const person = this.person;
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": person.name,
            "jobTitle": person.position,
            "description": person.summary || `${person.name} - ${person.position} tại VNLC`,
            "worksFor": {
                "@type": "Organization",
                "name": "Vietnam Legal Consulting (VNLC)",
                "url": this.baseURL
            },
            "url": `${this.baseURL}/people-detail.html?id=${this.personId}`
        };

        // Add education
        if (person.education && person.education.length > 0) {
            structuredData.alumniOf = person.education.map(edu => ({
                "@type": "EducationalOrganization",
                "name": edu.institution || "",
                "description": edu.degree
            }));
        }

        // Add sameAs (if available)
        if (person.socialLinks) {
            structuredData.sameAs = Object.values(person.socialLinks);
        }

        document.getElementById('structured-data').textContent = JSON.stringify(structuredData);
    }

    setupBreadcrumb() {
        document.getElementById('breadcrumb-current').textContent = this.person.name;
    }

    renderPersonDetail(person) {
        let html = `
            <article class="person-detail-article">
                <!-- Header -->
                <div class="person-detail-header-page">
                    <div class="person-detail-avatar-large">${person.avatar}</div>
                    <div class="person-detail-info-page">
                        <h1>${person.name}</h1>
                        <p class="person-detail-position-page">${person.position}</p>
                        <p class="person-detail-specialization-page">${person.specialization}</p>
                        ${person.summary ? `<p class="person-detail-summary">${person.summary}</p>` : ''}
                    </div>
                </div>

                <div class="person-detail-body-page">
        `;

        if (person.education && person.education.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Học Vấn</h2>
                    <ul class="detail-list-page">
                        ${person.education.map(edu => `
                            <li>
                                ${edu.year ? `<strong>${edu.year}:</strong> ` : ''}
                                ${edu.degree}${edu.institution ? ` - ${edu.institution}` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </section>
            `;
        }

        if (person.experience && person.experience.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Kinh Nghiệm Công Tác</h2>
                    ${person.experience.map(exp => `
                        <div class="experience-item-page">
                            ${exp.period ? `<div class="experience-period-page">${exp.period}</div>` : ''}
                            <h3>${exp.title}</h3>
                            <ul class="detail-list-page">
                                ${exp.positions.map(pos => `<li>${pos}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>
            `;
        }

        if (person.currentRoles && person.currentRoles.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Vị Trí Hiện Tại</h2>
                    <ul class="detail-list-page">
                        ${person.currentRoles.map(role => `<li>${role}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        if (person.previousRoles && person.previousRoles.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Các Vị Trí Đã Đảm Nhiệm</h2>
                    <ul class="detail-list-page">
                        ${person.previousRoles.map(role => `<li>${role}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        if (person.internationalRoles && person.internationalRoles.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Vai Trò Quốc Tế & Hiệp Hội</h2>
                    <ul class="detail-list-page">
                        ${person.internationalRoles.map(role => `<li>${role}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        if (person.expertise && person.expertise.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Năng Lực Chuyên Môn</h2>
                    <ul class="detail-list-page">
                        ${person.expertise.map(exp => `<li>${exp}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        if (person.achievements && person.achievements.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Thành Tựu</h2>
                    <ul class="detail-list-page">
                        ${person.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        html += `
                </div>

                <!-- Back Button -->
                <div class="person-detail-actions">
                    <a href="index.html#people" class="btn-back">← Quay lại Đội Ngũ</a>
                </div>
            </article>
        `;

        return html;
    }

    render() {
        const contentContainer = document.getElementById('person-detail-content');
        if (!contentContainer) return;

        if (this.person) {
            contentContainer.innerHTML = this.renderPersonDetail(this.person);
            
            // Add scroll animations
            setTimeout(() => {
                const sections = contentContainer.querySelectorAll('.detail-section-page');
                sections.forEach((section, index) => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        section.style.transition = 'all 0.6s ease';
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 100);
        } else {
            this.showNotFound();
        }
    }

    showNotFound() {
        const contentContainer = document.getElementById('person-detail-content');
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div class="not-found">
                    <h1>Không tìm thấy thông tin</h1>
                    <p>Thông tin chuyên gia bạn đang tìm kiếm không tồn tại.</p>
                    <a href="index.html#people" class="btn-back">← Quay lại Đội Ngũ</a>
                </div>
            `;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PeopleDetail();
});

