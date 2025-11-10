// Services Data - Detailed information for legal services
const servicesData = {
    'tu-van-doanh-nghiep': {
        id: 'tu-van-doanh-nghiep',
        name: 'Tư vấn Doanh nghiệp',
        icon: '🏢',
        description: 'Dịch vụ tập trung vào việc hỗ trợ pháp lý cho hoạt động và quản trị của doanh nghiệp',
        introduction: 'VNLC khẳng định có thể mang đến những giải pháp pháp lý toàn diện cho quý khách hàng trong các lĩnh vực về Dân sự, Hình sự và Doanh nghiệp. Đây là nhóm dịch vụ tập trung vào việc hỗ trợ pháp lý cho hoạt động và quản trị của doanh nghiệp.',
        services: [
            'Tư vấn thành lập, thay đổi và tái cấu trúc doanh nghiệp (M&A)',
            'Tư vấn Giấy phép đầu tư (IRC) và hoạt động đầu tư nước ngoài',
            'Tư vấn quản trị và hoạt động nội bộ doanh nghiệp',
            'Tư vấn hợp đồng và giao dịch thương mại',
            'Tư vấn chuyển nhượng vốn, cổ phần và tài sản doanh nghiệp',
            'Tư vấn lao động và quản trị nhân sự',
            'Tư vấn sở hữu trí tuệ và bảo vệ thương hiệu',
            'Tư vấn giải thể, chấm dứt hoạt động và quản trị rủi ro pháp lý'
        ],
        process: [],
        pricing: [
            {
                service: 'Tư vấn thành lập doanh nghiệp',
                unit: 'Gói dịch vụ',
                price: '5.000.000 - 15.000.000 VNĐ',
                note: 'Tùy thuộc vào loại hình doanh nghiệp (TNHH, Cổ phần, Hợp danh)'
            },
            {
                service: 'Tư vấn M&A, tái cấu trúc doanh nghiệp',
                unit: 'Gói dịch vụ',
                price: 'Liên hệ',
                note: 'Theo thỏa thuận dựa trên giá trị giao dịch và độ phức tạp'
            },
            {
                service: 'Tư vấn Giấy phép đầu tư (IRC)',
                unit: 'Gói dịch vụ',
                price: '10.000.000 - 30.000.000 VNĐ',
                note: 'Tùy thuộc vào dự án đầu tư và quy mô'
            },
            {
                service: 'Tư vấn hợp đồng thương mại',
                unit: 'Hợp đồng',
                price: '2.000.000 - 10.000.000 VNĐ',
                note: 'Tùy thuộc vào độ phức tạp và giá trị hợp đồng'
            },
            {
                service: 'Tư vấn chuyển nhượng vốn, cổ phần',
                unit: 'Giao dịch',
                price: '5.000.000 - 20.000.000 VNĐ',
                note: 'Tùy thuộc vào giá trị giao dịch'
            },
            {
                service: 'Tư vấn lao động và nhân sự',
                unit: 'Giờ tư vấn',
                price: '1.500.000 - 3.000.000 VNĐ/giờ',
                note: 'Hoặc theo gói dịch vụ tháng/năm'
            },
            {
                service: 'Tư vấn giải thể, chấm dứt hoạt động',
                unit: 'Gói dịch vụ',
                price: '8.000.000 - 25.000.000 VNĐ',
                note: 'Tùy thuộc vào loại hình và tình trạng doanh nghiệp'
            }
        ]
    },
    'tu-van-so-huu-tri-tue': {
        id: 'tu-van-so-huu-tri-tue',
        name: 'Tư vấn Sở hữu trí tuệ',
        icon: '💡',
        description: 'Dịch vụ tập trung vào việc bảo vệ tài sản trí tuệ của khách hàng',
        introduction: 'VNLC khẳng định có thể mang đến những giải pháp pháp lý toàn diện cho quý khách hàng trong các lĩnh vực về Dân sự, Hình sự và Doanh nghiệp. Dịch vụ này tập trung vào việc bảo vệ tài sản trí tuệ của khách hàng.',
        services: [
            'Đăng ký bản quyền tác giả, tác phẩm',
            'Tư vấn soạn thảo hợp đồng thương mại, hợp đồng hợp tác',
            'Đăng ký nhãn hiệu và thiết kế công nghiệp'
        ],
        process: [],
        pricing: [
            {
                service: 'Đăng ký bản quyền tác giả, tác phẩm',
                unit: 'Đơn đăng ký',
                price: '3.000.000 - 8.000.000 VNĐ',
                note: 'Không bao gồm phí nhà nước, tùy thuộc vào loại tác phẩm'
            },
            {
                service: 'Tư vấn soạn thảo hợp đồng thương mại, hợp đồng hợp tác',
                unit: 'Hợp đồng',
                price: '3.000.000 - 10.000.000 VNĐ',
                note: 'Tùy thuộc vào độ phức tạp và giá trị hợp đồng'
            },
            {
                service: 'Đăng ký nhãn hiệu',
                unit: 'Đơn đăng ký',
                price: '5.000.000 - 15.000.000 VNĐ',
                note: 'Không bao gồm phí nhà nước, tùy thuộc vào số nhóm hàng hóa/dịch vụ'
            },
            {
                service: 'Đăng ký thiết kế công nghiệp',
                unit: 'Đơn đăng ký',
                price: '8.000.000 - 20.000.000 VNĐ',
                note: 'Không bao gồm phí nhà nước, tùy thuộc vào số lượng hình ảnh'
            },
            {
                service: 'Tư vấn bảo vệ quyền sở hữu trí tuệ',
                unit: 'Giờ tư vấn',
                price: '2.000.000 - 5.000.000 VNĐ/giờ',
                note: 'Tùy thuộc vào độ phức tạp vụ việc'
            }
        ]
    },
    'tu-van-phap-luat-dan-su': {
        id: 'tu-van-phap-luat-dan-su',
        name: 'Tư vấn pháp luật Dân sự',
        icon: '⚖️',
        description: 'Cung cấp tư vấn, đại diện và hỗ trợ pháp lý các vấn đề về tranh chấp dân sự',
        introduction: 'VNLC khẳng định có thể mang đến những giải pháp pháp lý toàn diện cho quý khách hàng trong các lĩnh vực về Dân sự, Hình sự và Doanh nghiệp. VNLC cung cấp tư vấn, đại diện và hỗ trợ pháp lý các vấn đề về tranh chấp dân sự.',
        services: [],
        process: [
            'Nghiên cứu hồ sơ',
            'Đưa ra chiến lược cụ thể',
            'Trao đổi định hướng',
            'Làm việc cùng khách hàng',
            'Bảo vệ quyền lợi của khách hàng',
            'Tranh tụng tại Tòa án'
        ],
        pricing: [
            {
                service: 'Tư vấn pháp luật dân sự',
                unit: 'Giờ tư vấn',
                price: '2.000.000 - 5.000.000 VNĐ/giờ',
                note: 'Tùy thuộc vào độ phức tạp vụ việc'
            },
            {
                service: 'Đại diện tại Tòa án (vụ án đơn giản)',
                unit: 'Vụ án',
                price: '15.000.000 - 50.000.000 VNĐ',
                note: 'Tùy thuộc vào giá trị tranh chấp (dưới 1 tỷ VNĐ)'
            },
            {
                service: 'Đại diện tại Tòa án (vụ án phức tạp)',
                unit: 'Vụ án',
                price: '50.000.000 - 200.000.000 VNĐ',
                note: 'Tùy thuộc vào giá trị tranh chấp và độ phức tạp (trên 1 tỷ VNĐ)'
            },
            {
                service: 'Soạn thảo đơn khởi kiện, tài liệu pháp lý',
                unit: 'Tài liệu',
                price: '3.000.000 - 10.000.000 VNĐ',
                note: 'Tùy thuộc vào độ phức tạp và số lượng tài liệu'
            },
            {
                service: 'Tham gia đàm phán, hòa giải',
                unit: 'Buổi',
                price: '5.000.000 - 15.000.000 VNĐ/buổi',
                note: 'Tùy thuộc vào thời gian và độ phức tạp'
            }
        ]
    },
    'tu-van-phap-luat-hinh-su': {
        id: 'tu-van-phap-luat-hinh-su',
        name: 'Tư vấn pháp luật Hình sự',
        icon: '🔒',
        description: 'Cung cấp tư vấn, đại diện và hỗ trợ pháp lý các vấn đề về những vụ án hình sự',
        introduction: 'VNLC khẳng định có thể mang đến những giải pháp pháp lý toàn diện cho quý khách hàng trong các lĩnh vực về Dân sự, Hình sự và Doanh nghiệp. VNLC cung cấp tư vấn, đại diện và hỗ trợ pháp lý các vấn đề về những vụ án hình sự. Tương tự như dịch vụ dân sự, quy trình hỗ trợ các vụ án hình sự bao gồm các bước chuyên nghiệp và toàn diện.',
        services: [],
        process: [
            'Nghiên cứu hồ sơ',
            'Đưa ra chiến lược cụ thể',
            'Trao đổi định hướng',
            'Làm việc cùng khách hàng',
            'Bảo vệ quyền lợi của khách hàng',
            'Tranh tụng tại Tòa án'
        ],
        pricing: [
            {
                service: 'Tư vấn pháp luật hình sự',
                unit: 'Giờ tư vấn',
                price: '3.000.000 - 8.000.000 VNĐ/giờ',
                note: 'Tùy thuộc vào độ phức tạp vụ án và tính chất nghiêm trọng'
            },
            {
                service: 'Bào chữa tại giai đoạn điều tra',
                unit: 'Giai đoạn',
                price: '20.000.000 - 100.000.000 VNĐ',
                note: 'Tùy thuộc vào tính chất vụ án (tội ít nghiêm trọng, nghiêm trọng, rất nghiêm trọng, đặc biệt nghiêm trọng)'
            },
            {
                service: 'Bào chữa tại Tòa án sơ thẩm',
                unit: 'Cấp xét xử',
                price: '30.000.000 - 150.000.000 VNĐ',
                note: 'Tùy thuộc vào tính chất và mức độ nghiêm trọng của vụ án'
            },
            {
                service: 'Bào chữa tại Tòa án phúc thẩm',
                unit: 'Cấp xét xử',
                price: '25.000.000 - 120.000.000 VNĐ',
                note: 'Tùy thuộc vào nội dung kháng cáo và độ phức tạp'
            },
            {
                service: 'Soạn thảo đơn kháng cáo, kháng nghị',
                unit: 'Tài liệu',
                price: '5.000.000 - 15.000.000 VNĐ',
                note: 'Tùy thuộc vào độ phức tạp và số lượng căn cứ'
            },
            {
                service: 'Tham gia tại cơ quan điều tra',
                unit: 'Buổi',
                price: '5.000.000 - 20.000.000 VNĐ/buổi',
                note: 'Tùy thuộc vào thời gian và tính chất công việc'
            }
        ]
    }
};

