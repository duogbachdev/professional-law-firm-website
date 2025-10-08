# ⚖️ Professional Law Firm Website

Website landing page chuyên nghiệp cho công ty luật với thiết kế hiện đại, responsive và tối ưu SEO. Dự án bao gồm đầy đủ các section: dịch vụ pháp lý, chuyên môn, ngành nghề và liên hệ.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

## 🚀 Demo

🌐 **[Live Demo](https://your-domain.com)** | 📱 **[Mobile View](https://your-domain.com)**

## ✨ Tính năng

### 🎨 **Thiết kế & UX**
- ✅ **Responsive Design**: Tối ưu cho mọi thiết bị
- ✅ **Modern UI**: Giao diện hiện đại, chuyên nghiệp
- ✅ **Smooth Animations**: Hiệu ứng mượt mà
- ✅ **Interactive Elements**: Tương tác trực quan

### 🔍 **SEO & Performance**
- ✅ **SEO Optimized**: Meta tags, structured data
- ✅ **Fast Loading**: Tối ưu tốc độ tải
- ✅ **Social Media Ready**: Open Graph, Twitter Cards
- ✅ **Local SEO**: Geo tags cho Hà Nội

### 📱 **Technical Features**
- ✅ **Modular Architecture**: Dễ bảo trì
- ✅ **Component-based JS**: Tái sử dụng code
- ✅ **CSS Variables**: Dễ customize
- ✅ **Cross-browser Compatible**: Hoạt động mọi trình duyệt

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **Vanilla JavaScript**: ES6+, Modules
- **Google Fonts**: Inter, Playfair Display
- **Structured Data**: JSON-LD Schema

## 📁 Cấu Trúc Thư Mục

```
professional-law-firm-website/
├── index.html                 # File HTML chính
├── assets/
│   ├── css/                  # Stylesheets được tổ chức theo module
│   │   ├── variables.css     # CSS Variables (màu sắc, fonts)
│   │   ├── base.css          # Base styles và reset
│   │   ├── header.css        # Header và navigation
│   │   ├── mega-menu.css     # Mega menu styles
│   │   ├── hero.css          # Hero section
│   │   ├── capabilities.css  # Capabilities section
│   │   ├── expertise.css     # Expertise section
│   │   ├── industries.css    # Industries section
│   │   ├── stats.css         # Statistics section
│   │   ├── contact.css       # Contact CTA section
│   │   ├── footer.css        # Footer
│   │   ├── animations.css    # Animations và keyframes
│   │   └── responsive.css    # Responsive design
│   └── js/                   # JavaScript được tổ chức theo component
│       ├── components/       # Các component riêng biệt
│       │   ├── mega-menu.js
│       │   ├── hero.js
│       │   ├── capabilities.js
│       │   ├── expertise.js
│       │   ├── industries.js
│       │   ├── stats.js
│       │   ├── contact.js
│       │   └── footer.js
│       └── main.js           # File JavaScript chính
└── README.md                 # Documentation
```

## Tính Năng

### CSS Organization
- **Variables**: Tất cả màu sắc và giá trị được định nghĩa trong `variables.css`
- **Modular**: Mỗi section có file CSS riêng
- **Responsive**: Responsive design được tách riêng
- **Animations**: Animations và keyframes được tách riêng

### JavaScript Organization
- **Component-based**: Mỗi section là một component riêng biệt
- **Event handling**: Tất cả event listeners được quản lý trong từng component
- **Main app**: File `main.js` quản lý các tính năng chung

### Tính Năng Chính
- ✅ Responsive design
- ✅ Smooth scrolling
- ✅ Mega menu với animation
- ✅ Scroll progress bar
- ✅ Intersection Observer animations
- ✅ Active navigation highlighting
- ✅ Keyboard navigation (ESC để đóng menu)
- ✅ Parallax effects

## 🚀 Cách Sử Dụng

### Quick Start
1. Clone repository về máy
2. Mở `index.html` trong trình duyệt
3. Hoặc chạy local server để có trải nghiệm tốt nhất

### Development
```bash
# Clone repository
git clone https://github.com/duogbachdev/professional-law-firm-website.git

# Mở bằng VS Code Live Server hoặc
# Python HTTP server
python -m http.server 8000
```

## 🎨 Customization

### Thay đổi màu sắc:
Sửa file `assets/css/variables.css` - tất cả màu sắc được định nghĩa trong CSS variables

### Thay đổi nội dung:
- **Hero section**: `assets/js/components/hero.js`
- **Dịch vụ**: `assets/js/components/capabilities.js`
- **Chuyên môn**: `assets/js/components/expertise.js`
- **Ngành nghề**: `assets/js/components/industries.js`

### Thêm section mới:
1. Tạo file CSS riêng trong `assets/css/`
2. Tạo file JS component trong `assets/js/components/`
3. Import vào `index.html`
4. Thêm container div trong HTML

## 🌐 Browser Support
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers
- ⚠️ IE11 (Cần polyfills cho một số tính năng)

## 📈 SEO Features
- ✅ Meta tags đầy đủ
- ✅ Structured data (JSON-LD)
- ✅ Open Graph & Twitter Cards
- ✅ Local SEO (Geo tags)
- ✅ Sitemap & Robots.txt
- ✅ Performance optimized
