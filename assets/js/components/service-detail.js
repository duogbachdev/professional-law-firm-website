// Service Detail Page Component
class ServiceDetail {
    constructor() {
        this.serviceId = this.getServiceIdFromURL();
        this.service = servicesData[this.serviceId];
        this.baseURL = window.location.origin;
        this.init();
    }

    getServiceIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || '';
    }

    init() {
        if (!this.service) {
            this.showNotFound();
            return;
        }
        this.updateMetaTags();
        this.updateStructuredData();
        this.render();
        this.setupBreadcrumb();
    }

    updateMetaTags() {
        const service = this.service;
        const title = `${service.name} - Dịch Vụ Pháp Lý | VNLC`;
        const description = service.description || `${service.name} tại Vietnam Legal Consulting (VNLC). ${service.introduction}`;
        const keywords = `dịch vụ pháp lý, ${service.name}, tư vấn pháp luật, VNLC, Vietnam Legal Consulting`;
        const url = `${this.baseURL}/service-detail.html?id=${this.serviceId}`;

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
        const service = this.service;
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "description": service.description || service.introduction,
            "provider": {
                "@type": "Organization",
                "name": "Vietnam Legal Consulting (VNLC)",
                "url": this.baseURL
            },
            "serviceType": "Legal Service",
            "url": `${this.baseURL}/service-detail.html?id=${this.serviceId}`
        };

        if (service.pricing && service.pricing.length > 0) {
            structuredData.offers = service.pricing.map(price => ({
                "@type": "Offer",
                "name": price.service,
                "price": price.price,
                "priceCurrency": "VND"
            }));
        }

        document.getElementById('structured-data').textContent = JSON.stringify(structuredData);
    }

    setupBreadcrumb() {
        document.getElementById('breadcrumb-current').textContent = this.service.name;
    }

    renderServiceDetail(service) {
        let html = `
            <article class="service-detail-article">
                <!-- Header -->
                <div class="service-detail-header-page">
                    <div class="service-icon-large">${service.icon}</div>
                    <div class="service-detail-info-page">
                        <h1>${service.name}</h1>
                        <p class="service-detail-description">${service.description}</p>
                    </div>
                </div>

                <div class="service-detail-body-page">
        `;

        // Introduction
        if (service.introduction) {
            html += `
                <section class="detail-section-page">
                    <h2>Giới Thiệu</h2>
                    <p class="service-intro-text">${service.introduction}</p>
                </section>
            `;
        }

        // Services List
        if (service.services && service.services.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Dịch Vụ Cung Cấp</h2>
                    <p class="section-description">Đây là nhóm dịch vụ tập trung vào việc hỗ trợ pháp lý cho hoạt động và quản trị của doanh nghiệp, bao gồm:</p>
                    <ul class="detail-list-page">
                        ${service.services.map(svc => `<li>${svc}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        // Process
        if (service.process && service.process.length > 0) {
            html += `
                <section class="detail-section-page">
                    <h2>Quy Trình Hỗ Trợ</h2>
                    <p class="section-description">Quy trình hỗ trợ các vấn đề ${service.name.toLowerCase()} bao gồm:</p>
                    <ul class="detail-list-page">
                        ${service.process.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        // Pricing Table
        if (service.pricing && service.pricing.length > 0) {
            html += `
                <section class="detail-section-page pricing-section">
                    <h2>Bảng Giá Dịch Vụ</h2>
                    <div class="pricing-table-container">
                        <table class="pricing-table">
                            <thead>
                                <tr>
                                    <th>Dịch Vụ</th>
                                    <th>Đơn Vị</th>
                                    <th>Giá</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${service.pricing.map((price, index) => `
                                    <tr ${index % 2 === 0 ? 'class="highlight-row"' : ''}>
                                        <td><strong>${price.service}</strong></td>
                                        <td>${price.unit}</td>
                                        <td><strong style="color: var(--gold);">${price.price}</strong></td>
                                        <td>${price.note}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                        <div class="pricing-note">
                            <p><strong>Lưu ý:</strong> Bảng giá trên chỉ mang tính chất tham khảo. Giá cụ thể sẽ được báo sau khi tư vấn và đánh giá nhu cầu của khách hàng. Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết.</p>
                        </div>
                    </div>
                </section>
            `;
        }

        html += `
                </div>

                <!-- Action Buttons -->
                <div class="service-detail-actions">
                    <a href="index.html#contact" class="btn-contact">Liên Hệ Tư Vấn</a>
                    <a href="index.html#people" class="btn-back">← Quay lại</a>
                </div>
            </article>
        `;

        return html;
    }

    render() {
        const contentContainer = document.getElementById('service-detail-content');
        if (!contentContainer) return;

        if (this.service) {
            contentContainer.innerHTML = this.renderServiceDetail(this.service);
            
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
        const contentContainer = document.getElementById('service-detail-content');
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div class="not-found">
                    <h1>Không tìm thấy dịch vụ</h1>
                    <p>Dịch vụ bạn đang tìm kiếm không tồn tại.</p>
                    <a href="index.html" class="btn-back">← Quay lại Trang Chủ</a>
                </div>
            `;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ServiceDetail();
});

