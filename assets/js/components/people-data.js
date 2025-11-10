// People Data - Detailed information for team members
const peopleData = {
    'nguyen-thi-quy-phuong': {
        id: 'nguyen-thi-quy-phuong',
        name: 'TS. Nguyễn Thị Quý Phương',
        avatar: 'PQ',
        position: 'Cố Vấn Cấp Cao - Tiến Sĩ',
        specialization: 'Người sáng lập có tầm nhìn chiến lược',
        summary: 'Người sáng lập và Cố vấn cấp cao với nhiều kinh nghiệm tại Vingroup và các tổ chức quốc tế',
        education: [
            {
                year: '2010',
                degree: 'Tiến sĩ Khoa học Thông tin và Truyền thông',
                institution: 'Đại học Panthéon-Assas, Pháp'
            }
        ],
        experience: [
            {
                period: '2016 - 2021',
                title: 'Vingroup - Tập đoàn',
                positions: [
                    'Thư ký Chủ tịch tập đoàn ông Phạm Nhật Vượng về định hướng phát triển',
                    'Chủ tịch Quỹ Hỗ trợ và Phát triển tài năng Việt Nam VinTalent',
                    'Giám đốc điều hành Trung tâm đào tạo bóng đá trẻ PVF',
                    'Trưởng ban Bảo vệ Môi trường của Tập đoàn Vingroup'
                ]
            }
        ],
        internationalRoles: [
            'Ủy viên Ủy ban Điều chỉnh Luật của FIA (Liên đoàn Ô tô Quốc tế)',
            'Phó Chủ tịch Thường trực Hiệp hội Ô tô Thể thao Việt Nam'
        ],
        achievements: [
            'Bảo vệ thành công Luận án Tiến sĩ tại Đại học Panthéon-Assas, Pháp (2010)',
            'Dẫn dắt VNLC ra đời như một nhánh tư vấn pháp lý độc lập',
            'Giữ nhiều vị trí lãnh đạo quan trọng tại Vingroup và các đơn vị thành viên'
        ]
    },
    'vu-dinh-hoang': {
        id: 'vu-dinh-hoang',
        name: 'TS. Vũ Đình Hoàng',
        avatar: 'VH',
        position: 'Tiến Sĩ - Chuyên Gia Pháp Lý',
        specialization: 'Hình sự & Chính sách công',
        summary: 'Chuyên gia pháp lý với kinh nghiệm tại Văn phòng Chính phủ và trên 10 năm tư vấn chính sách. Phó Viện trưởng Viện Nghiên cứu Báo chí - Truyền thông, thuộc Học viện Báo chí và Tuyên truyền.',
        education: [
            {
                year: '',
                degree: 'Tiến sĩ Luật học',
                institution: 'Trường Đại học Luật - Đại học Quốc gia Hà Nội'
            },
            {
                year: '',
                degree: 'Thủ khoa đầu ra',
                institution: 'Trường Đại học Luật, Đại học Quốc gia Hà Nội'
            },
            {
                year: '',
                degree: 'Cử nhân Ngôn ngữ Anh',
                institution: 'Đại học Hà Nội'
            }
        ],
        currentRoles: [
            'Phó Viện trưởng Viện Nghiên cứu Báo chí - Truyền thông, thuộc Học viện Báo chí và Tuyên truyền'
        ],
        previousRoles: [
            'Nguyên Ủy viên Ban Thường vụ Trung ương Đoàn TNCS Hồ Chí Minh',
            'Nguyên Giám Đốc Điều Hành Trung tâm Hội chợ Triển lãm Quốc Gia (VEF)'
        ],
        experience: [
            {
                period: '',
                title: 'Văn phòng Chính phủ',
                positions: [
                    'Công tác tại Vụ Nội Chính - Văn phòng Chính phủ',
                    'Cơ quan trực tiếp giúp việc cho Thủ tướng Chính phủ trong lĩnh vực nội chính, pháp luật và cải cách tư pháp'
                ]
            },
            {
                period: '03 năm',
                title: 'Giảng dạy',
                positions: [
                    'Giảng dạy chính trị tại Học viện Chính trị Quốc gia Hồ Chí Minh'
                ]
            }
        ],
        achievements: [
            'Trên 10 năm kinh nghiệm tư vấn chính sách cho Nhà nước',
            'Thủ khoa đầu ra Trường Đại học Luật, Đại học Quốc gia Hà Nội',
            'Kinh nghiệm phong phú trong lĩnh vực chính trị, giảng dạy và tư vấn chính sách công',
            'Sở hữu nền tảng học thuật vững chắc và năng lực đa ngôn ngữ'
        ]
    },
    'pham-thanh-tuan': {
        id: 'pham-thanh-tuan',
        name: 'Ông Phạm Thanh Tuấn',
        avatar: 'PT',
        position: 'Giám Đốc VNLC',
        specialization: 'Chuyên gia tài chính, tín dụng',
        summary: 'Giám đốc VNLC với hơn 10 năm kinh nghiệm chuyên sâu trong lĩnh vực tư vấn pháp lý tài chính - tín dụng',
        experience: [
            {
                period: 'Hơn 10 năm',
                title: 'Chuyên viên pháp lý cấp cao',
                positions: [
                    'Ngân hàng thương mại cổ phần Việt Nam Thịnh Vượng',
                    'Công ty Cổ phần Thương mại và Liên kết Nano (Happy Money)',
                    'Công ty luật TNHH Liên Việt - Legal Link'
                ]
            }
        ],
        expertise: [
            'Xây dựng hệ thống quy trình pháp lý nội bộ',
            'Soạn thảo và rà soát các hợp đồng tín dụng, hợp đồng hợp tác kinh doanh',
            'Hỗ trợ xử lý tranh chấp phát sinh trong quá trình thu hồi nợ',
            'Đảm bảo tính tuân thủ pháp luật và giảm thiểu rủi ro cho doanh nghiệp'
        ],
        achievements: [
            'Hơn 10 năm kinh nghiệm chuyên sâu trong lĩnh vực tài chính - tín dụng',
            'Tư duy logic, khả năng phân tích sắc bén',
            'Kinh nghiệm thực tiễn dày dạn trong lĩnh vực tài chính tiêu dùng',
            'Được đánh giá là một trong những chuyên gia pháp lý đáng tin cậy'
        ]
    },
    'tran-trong-nam': {
        id: 'tran-trong-nam',
        name: 'LS. Trần Trọng Nam',
        avatar: 'TN',
        position: 'Thạc Sĩ Luật Học - Luật Sư',
        specialization: 'Doanh nghiệp & Dân sự',
        summary: 'Luật sư và thạc sĩ luật học với nhiều năm kinh nghiệm trong pháp luật doanh nghiệp, dân sự và tố tụng. Nguyên Trưởng phòng Pháp chế tại Techcombank.',
        education: [
            {
                year: '',
                degree: 'Thạc sĩ Luật học',
                institution: ''
            }
        ],
        experience: [
            {
                period: '',
                title: 'Trưởng phòng Pháp chế',
                positions: [
                    'Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank)'
                ]
            },
            {
                period: '',
                title: 'Công tác',
                positions: [
                    'Công ty Luật TNHH Thinksmart'
                ]
            }
        ],
        expertise: [
            'Kỹ năng tranh tụng và giải quyết các vụ án phức tạp, nhạy cảm',
            'Bào chữa và bảo vệ quyền lợi hợp pháp trong nhiều phiên tòa trọng điểm',
            'Xử lý vấn đề một cách hiệu quả, tinh tế và thấu đáo',
            'Chuyên môn sâu về pháp luật doanh nghiệp, dân sự và tố tụng'
        ],
        achievements: [
            'Kinh nghiệm quý báu trong việc xử lý vấn đề hiệu quả',
            'Tham gia bào chữa trong nhiều phiên tòa trọng điểm, thu hút sự quan tâm từ dư luận và giới chuyên môn',
            'Được đánh giá là một trong những chuyên gia pháp lý tiêu biểu trong lĩnh vực doanh nghiệp và dân sự tại Việt Nam hiện nay'
        ]
    }
};

// Staff Data
const staffData = {
    'do-nhat-minh': {
        id: 'do-nhat-minh',
        name: 'Ông Đỗ Nhật Minh',
        avatar: 'DN',
        position: 'Đội Ngũ Nhân Sự',
        specialization: 'Luật sư',
        education: [
            {
                degree: 'Tốt nghiệp Đại học Luật',
                institution: 'Đại học Quốc gia Hà Nội'
            }
        ]
    },
    'ho-tung-duong': {
        id: 'ho-tung-duong',
        name: 'Ông Hồ Tùng Dương',
        avatar: 'HD',
        position: 'Đội Ngũ Nhân Sự',
        specialization: 'Luật sư',
        education: [
            {
                degree: 'Tốt nghiệp Đại học Luật',
                institution: 'Đại học Luật Hà Nội'
            }
        ]
    }
};

