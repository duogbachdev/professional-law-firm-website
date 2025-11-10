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
                <div class="container">
                    <div class="contact-content">
                        <div class="contact-info">
                            <h2>Sẵn Sàng Bắt Đầu Hành Trình Pháp Lý?</h2>
                            <p>Liên hệ với VNLC ngay hôm nay để được tư vấn miễn phí về vấn đề pháp lý của bạn. 
                            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ 24/7.</p>
                            
                            <div class="contact-methods">
                                <div class="contact-method contact-method-large">
                                    <div class="method-header">
                                        <div class="method-icon">📞</div>
                                        <h4>Liên Hệ Trực Tiếp</h4>
                                    </div>
                                    <div class="method-details">
                                        <div class="method-detail-item">
                                            <span class="detail-label">Điện thoại (Hotline):</span>
                                            <span class="detail-value">096.812.7877</span>
                                        </div>
                                        <div class="method-detail-item">
                                            <span class="detail-label">Thư điện tử (Email):</span>
                                            <span class="detail-value">vietnamlegalconsulting@gmail.com</span>
                                        </div>
                                        <div class="method-detail-item">
                                            <span class="detail-label">Giờ làm việc:</span>
                                            <span class="detail-value">Thứ 2 - Thứ 6: 8:00 - 17:00</span>
                                        </div>
                                        <div class="method-detail-item">
                                            <span class="detail-label">Phản hồi:</span>
                                            <span class="detail-value">Trong 2 giờ</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="contact-method contact-method-large">
                                    <div class="method-header">
                                        <div class="method-icon">📍</div>
                                        <h4>Trụ Sở Chính</h4>
                                    </div>
                                    <div class="method-details">
                                        <div class="method-detail-item">
                                            <p class="detail-address">Số 121, phố 8/3, C23, Phường Bạch Mai</p>
                                            <p class="detail-address">Thành phố Hà Nội, Việt Nam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form-section">
                            <div class="form-container">
                                <h3>Đặt Lịch Tư Vấn Miễn Phí</h3>
                                <form class="contact-form">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="name">Họ và tên *</label>
                                            <input type="text" id="name" name="name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="company">Công ty</label>
                                            <input type="text" id="company" name="company">
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="email">Email *</label>
                                            <input type="email" id="email" name="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">Số điện thoại *</label>
                                            <input type="tel" id="phone" name="phone" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="service">Dịch vụ quan tâm</label>
                                        <select id="service" name="service">
                                            <option value="">Chọn dịch vụ</option>
                                            <option value="corporate">Luật Doanh nghiệp & M&A</option>
                                            <option value="litigation">Tranh tụng & Trọng tài</option>
                                            <option value="capital">Thị trường vốn</option>
                                            <option value="ip">Sở hữu trí tuệ</option>
                                            <option value="real-estate">Bất động sản</option>
                                            <option value="tax">Luật Thuế</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="message">Mô tả vấn đề pháp lý *</label>
                                        <textarea id="message" name="message" rows="4" required placeholder="Vui lòng mô tả ngắn gọn về vấn đề pháp lý bạn đang gặp phải..."></textarea>
                                    </div>
                                    
                                    <div class="form-group checkbox-group">
                                        <input type="checkbox" id="privacy" name="privacy" required>
                                        <label for="privacy">Tôi đồng ý với <a href="#" class="privacy-link">Chính sách bảo mật</a> và cho phép VNLC liên hệ tư vấn</label>
                                    </div>
                                    
                                    <button type="submit" class="btn-submit">
                                        <span>Gửi Yêu Cầu Tư Vấn</span>
                                        <span class="btn-icon">→</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div class="hero-buttons">
                        <a href="tel:0968127877" class="btn-primary">Gọi Ngay: 096.812.7877</a>
                        <a href="mailto:vietnamlegalconsulting@gmail.com" class="btn-secondary">Email: vietnamlegalconsulting@gmail.com</a>
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
