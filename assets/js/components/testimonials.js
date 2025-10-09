// Testimonials Component
class Testimonials {
    constructor() {
        this.testimonialsContainer = document.getElementById('testimonials-container');
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.testimonialsContainer.innerHTML = `
            <section class="testimonials section-with-pattern" id="testimonials">
                <div class="container">
                    <div class="section-header">
                        <div class="decorative-icon">💬</div>
                        <h2 class="section-title">Đánh Giá Từ Khách Hàng</h2>
                        <div class="decorative-line"></div>
                        <p class="section-subtitle">Những phản hồi tích cực từ các khách hàng đã tin tưởng dịch vụ của chúng tôi</p>
                    </div>

                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "VNLC đã hỗ trợ chúng tôi hoàn thành giao dịch M&A trị giá 200 triệu USD một cách suôn sẻ. 
                                    Đội ngũ luật sư chuyên nghiệp và có kinh nghiệm sâu rộng. Tôi đặc biệt ấn tượng với sự 
                                    tận tâm và chuyên môn cao của họ."
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">TH</div>
                                <div class="author-info">
                                    <h4>Trần Minh Hùng</h4>
                                    <p>CEO, TechBank Corporation</p>
                                    <span class="author-company">🏦 Ngân hàng</span>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "Khi startup của chúng tôi gặp khó khăn về pháp lý, VNLC đã tư vấn và hỗ trợ chúng tôi 
                                    vượt qua thử thách. Họ không chỉ là đối tác pháp lý mà còn là cố vấn chiến lược tuyệt vời. 
                                    Dịch vụ khách hàng xuất sắc!"
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">NL</div>
                                <div class="author-info">
                                    <h4>Nguyễn Thị Lan</h4>
                                    <p>Founder & CEO, FinTech Startup</p>
                                    <span class="author-company">💻 Công nghệ</span>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "VNLC đã giúp chúng tôi bảo vệ thành công bản quyền và thương hiệu tại 5 quốc gia. 
                                    Kiến thức về sở hữu trí tuệ quốc tế của họ thực sự ấn tượng. Chúng tôi đã tiết kiệm 
                                    được hàng triệu USD nhờ tư vấn chính xác của họ."
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">PV</div>
                                <div class="author-info">
                                    <h4>Phạm Văn Đức</h4>
                                    <p>CTO, Innovation Corp</p>
                                    <span class="author-company">💡 Sở hữu trí tuệ</span>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "Trong vụ tranh chấp phức tạp kéo dài 2 năm, VNLC đã dẫn dắt chúng tôi đến chiến thắng 
                                    hoàn toàn. Chiến lược pháp lý sáng tạo và khả năng thuyết phục của họ thực sự xuất sắc. 
                                    Tôi khuyên mọi doanh nghiệp nên hợp tác với VNLC."
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">LM</div>
                                <div class="author-info">
                                    <h4>Lê Minh Tuấn</h4>
                                    <p>Chủ tịch, Real Estate Group</p>
                                    <span class="author-company">🏠 Bất động sản</span>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "VNLC đã hỗ trợ chúng tôi trong việc IPO thành công trên sàn chứng khoán. Quy trình 
                                    phức tạp nhưng họ xử lý rất chuyên nghiệp và hiệu quả. Đội ngũ luật sư rất am hiểu 
                                    về thị trường vốn và quy định pháp luật."
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">VT</div>
                                <div class="author-info">
                                    <h4>Vũ Thị Hương</h4>
                                    <p>CFO, Manufacturing Co.</p>
                                    <span class="author-company">🏭 Sản xuất</span>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon">"</div>
                                <p class="testimonial-text">
                                    "Khi chúng tôi mở rộng kinh doanh ra thị trường quốc tế, VNLC đã tư vấn toàn diện 
                                    về pháp luật đa quốc gia. Họ có mạng lưới đối tác rộng khắp và hiểu biết sâu về 
                                    văn hóa kinh doanh của từng thị trường."
                                </p>
                                <div class="rating">
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                    <span class="star">⭐</span>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">DH</div>
                                <div class="author-info">
                                    <h4>Đặng Hoàng Nam</h4>
                                    <p>CEO, Export Trading Co.</p>
                                    <span class="author-company">🌍 Thương mại quốc tế</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="trust-indicators">
                        <div class="trust-item">
                            <div class="trust-number">98%</div>
                            <div class="trust-label">Khách hàng hài lòng</div>
                        </div>
                        <div class="trust-item">
                            <div class="trust-number">4.9/5</div>
                            <div class="trust-label">Đánh giá trung bình</div>
                        </div>
                        <div class="trust-item">
                            <div class="trust-number">500+</div>
                            <div class="trust-label">Đánh giá tích cực</div>
                        </div>
                        <div class="trust-item">
                            <div class="trust-number">95%</div>
                            <div class="trust-label">Khách hàng quay lại</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    bindEvents() {
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

        // Observe testimonial cards
        const testimonialCards = this.testimonialsContainer.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // Add hover effects
        this.testimonialsContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.testimonial-card')) {
                const card = e.target.closest('.testimonial-card');
                card.style.transition = 'all 0.4s ease';
            }
        }, true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Testimonials();
});
