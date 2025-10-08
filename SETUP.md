# 🚀 Setup Guide - Professional Law Firm Website

Hướng dẫn chi tiết để setup và chạy dự án website chuyên nghiệp cho công ty luật.

## 📋 Yêu cầu hệ thống

- **Web Browser**: Chrome, Firefox, Safari, Edge (phiên bản mới)
- **Web Server**: Apache, Nginx, hoặc Live Server
- **Git**: Để clone repository
- **Text Editor**: VS Code, Sublime Text, hoặc bất kỳ editor nào

## 🔧 Cài đặt

### 1. Clone Repository
```bash
# Clone từ GitHub
git clone https://github.com/duogbachdev/professional-law-firm-website.git

# Di chuyển vào thư mục
cd professional-law-firm-website
```

### 2. Setup Local Server

#### Option A: VS Code Live Server
1. Mở VS Code
2. Cài đặt extension "Live Server"
3. Right-click vào `index.html`
4. Chọn "Open with Live Server"

#### Option B: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option C: Node.js http-server
```bash
# Cài đặt globally
npm install -g http-server

# Chạy server
http-server -p 8000
```

#### Option D: PHP Built-in Server
```bash
php -S localhost:8000
```

### 3. Truy cập Website
Mở trình duyệt và truy cập: `http://localhost:8000`

## 📁 Cấu trúc dự án

```
professional-law-firm-website/
├── index.html              # File HTML chính
├── robots.txt              # SEO robots
├── sitemap.xml             # SEO sitemap
├── README.md               # Documentation
├── CONTRIBUTING.md         # Contributing guide
├── SETUP.md               # Setup guide
├── LICENSE                # MIT License
├── .gitignore             # Git ignore rules
└── assets/
    ├── css/               # Stylesheets
    │   ├── variables.css  # CSS Variables
    │   ├── base.css       # Base styles
    │   ├── header.css     # Header styles
    │   ├── hero.css       # Hero section
    │   ├── capabilities.css # Capabilities section
    │   ├── expertise.css  # Expertise section
    │   ├── industries.css # Industries section
    │   ├── stats.css      # Statistics section
    │   ├── contact.css    # Contact section
    │   ├── footer.css     # Footer styles
    │   ├── mega-menu.css  # Mega menu
    │   ├── animations.css # Animations
    │   └── responsive.css # Responsive design
    ├── js/                # JavaScript files
    │   ├── components/    # Component files
    │   │   ├── mega-menu.js
    │   │   ├── hero.js
    │   │   ├── capabilities.js
    │   │   ├── expertise.js
    │   │   ├── industries.js
    │   │   ├── stats.js
    │   │   ├── contact.js
    │   │   └── footer.js
    │   └── main.js        # Main JavaScript
    └── images/            # Images directory
        └── README.md      # Images guide
```

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `assets/css/variables.css`:
```css
:root {
    --navy: #0a2540;        /* Màu chủ đạo */
    --gold: #d4af37;        /* Màu accent */
    --light-gold: #f4e4b7;  /* Màu vàng nhạt */
    --white: #ffffff;       /* Màu trắng */
    --light-gray: #f8f9fa;  /* Màu xám nhạt */
    --dark-gray: #2c3e50;   /* Màu xám đậm */
}
```

### Thay đổi nội dung
- **Hero section**: `assets/js/components/hero.js`
- **Capabilities**: `assets/js/components/capabilities.js`
- **Expertise**: `assets/js/components/expertise.js`
- **Industries**: `assets/js/components/industries.js`

### Thêm hình ảnh
1. Đặt hình ảnh vào `assets/images/`
2. Cập nhật đường dẫn trong các file CSS/JS
3. Thêm alt text cho accessibility

## 🔍 SEO Setup

### 1. Cập nhật thông tin
Chỉnh sửa file `index.html`:
```html
<!-- Cập nhật title -->
<title>Your Company Name - Your Description</title>

<!-- Cập nhật description -->
<meta name="description" content="Your description here">

<!-- Cập nhật keywords -->
<meta name="keywords" content="your, keywords, here">
```

### 2. Cập nhật structured data
Chỉnh sửa JSON-LD trong `index.html`:
```json
{
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Your Company Name",
    "telephone": "+84 XXX XXX XXX",
    "email": "your-email@domain.com"
}
```

### 3. Cập nhật sitemap
Chỉnh sửa `sitemap.xml` với domain thực của bạn.

## 📱 Testing

### Browser Testing
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)

### Device Testing
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (768x1024, 1024x768)
- ✅ Mobile (375x667, 414x896)

### Performance Testing
- ✅ Google PageSpeed Insights
- ✅ GTmetrix
- ✅ WebPageTest

## 🚀 Deployment

### GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch (thường là `main`)
4. Website sẽ available tại `https://username.github.io/repository-name`

### Netlify
1. Connect GitHub repository
2. Build command: (để trống)
3. Publish directory: `/` (root)
4. Deploy

### Vercel
1. Import GitHub repository
2. Framework preset: Other
3. Build command: (để trống)
4. Deploy

## 🛠️ Development

### Thêm section mới
1. Tạo file CSS trong `assets/css/`
2. Tạo file JS component trong `assets/js/components/`
3. Import vào `index.html`
4. Thêm container div trong HTML

### Debugging
- Sử dụng Developer Tools (F12)
- Check Console cho JavaScript errors
- Check Network tab cho loading issues
- Sử dụng Lighthouse cho performance audit

## 📞 Support

Nếu gặp vấn đề:
1. Check [Issues](https://github.com/duogbachdev/professional-law-firm-website/issues)
2. Tạo issue mới với mô tả chi tiết
3. Liên hệ qua email: your-email@example.com

## 📄 License

Dự án sử dụng [MIT License](LICENSE) - bạn có thể tự do sử dụng cho mục đích thương mại và cá nhân.
