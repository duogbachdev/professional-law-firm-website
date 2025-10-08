// Contact Component
class Contact {
    constructor() {
        this.contactContainer = document.getElementById('contact-container');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.contactContainer.innerHTML = `
            <section class="contact-cta fade-in" id="contact">
                <div class="cta-content">
                    <h2>Sẵn Sàng Bắt Đầu?</h2>
                    <p>Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về vấn đề pháp lý của bạn</p>
                    <div class="hero-buttons">
                        <a href="#" class="btn-primary">Đặt Lịch Tư Vấn</a>
                        <a href="#" class="btn-secondary" style="color: var(--navy); border-color: var(--navy);">Gửi Email</a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Contact();
});
