// Hero Component
class Hero {
    constructor() {
        this.heroContainer = document.getElementById('hero-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.heroContainer.innerHTML = `
            <section class="hero" id="home">
                <div class="hero-content">
                    <h1>Đối Tác Pháp Lý Toàn Cầu</h1>
                    <p class="hero-subtitle">Chúng tôi cung cấp tư vấn pháp lý chuyên sâu cho các giao dịch và vụ việc phức tạp nhất trên toàn thế giới</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn-primary">Liên Hệ Tư Vấn</a>
                        <a href="#capabilities" class="btn-secondary">Khám Phá Dịch Vụ</a>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Hero();
});
