import oneYearWarranty from '../img/1yearWarranty.png'
import twoYearWarranty from '../img/2yearWarranty.png'
import fiveYearWarranty from '../img/5yearWarranty.png'

import productImg01 from '../img/product/kaff-kf-fl866gih.png'
import productImg02 from '../img/product/Kangaroo-KG435i.png'
import productImg03 from '../img/product/daikiosan-dsw-32009h2.png'
import productImg04 from '../img/product/mutosi-md-203.png'

import productImg05 from '../img/product/Akia.png'
import productImg06 from '../img/product/NamiluxPL2111AS.png'
import productImg07 from '../img/product/ThaiFlameCN.png'
import productImg08 from '../img/product/lora.png'

import productImg09 from '../img/product/fukudaQD001.png'
import productImg10 from '../img/product/Ogawa-640.png'
import productImg11 from '../img/product/van-Nasonal.png'
import productImg12 from '../img/product/kaff-kf-fl866gii.png'

import productImg13 from '../img/product/nasonal-na250d.png'
import productImg14 from '../img/product/NasonalCN.png'
import productImg15 from '../img/product/Rinnai2i.png'
import productImg16 from '../img/product/NamiluxPL1911PF.png'

import productImg17 from '../img/product/Rinnai715SlimGL.png'
import productImg18 from '../img/product/Sanka795.png'
import productImg19 from '../img/product/sanka903.png'
import productImg20 from '../img/product/kaff-kf901.png'

import productImg21 from '../img/product/Kaff-kf-gb702.png'
import productImg22 from '../img/product/kaff-kf-tl70H.png'
import productImg23 from '../img/product/kaff-mc34l.png'
import productImg24 from '../img/product/Kangaroo-KG438i.png'

import productImg25 from '../img/product/Kiwa-MK55RA-10L.png'
import productImg26 from '../img/product/midea-miB2015de.png'
import productImg27 from '../img/product/ladomax-ha668.png'
import productImg28 from '../img/product/mutosi-mp-370U.png'

import productImg29 from '../img/product/mutosi-mp-582h.png'
import productImg30 from '../img/product/Namilux-Na300ASM.png'
import productImg31 from '../img/product/noi-com-kim-cuong.png'
import productImg32 from '../img/product/Sakura-se-3150.png'

import productImg33 from '../img/product/Sharp-KS-COM19VGW.png'
import productImg34 from '../img/product/Sharp-KSH-Dxxxx.png'
import productImg35 from '../img/product/Van-Katsura.png'
import productImg36 from '../img/product/van-khe-Sawana.png'

import productImg37 from '../img/product/van-Namilux.png'
import productImg38 from '../img/product/van-ptlm.png'


const products = [
    {
        id: '01',
        imgUrl: productImg01,
        productName: 'Bếp điện KAFF KF-FL866GII (1 từ 1 hồng ngoại)', 
        category: 'bep-dien',
        displayHome: 'hotSale',
        warranty: fiveYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 4.000.000',
        oldPrice: '1500.000',
        price: 10800000,
        gift: 'Lưu ý: đầu từ chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính Ceramic cường lực, chịu lực, chịu sốc nhiệt',
            'Đầu đốt EGO (Made in Germany)',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Chức năng inverter và chia công suất tiết kiệm điện và bảo vệ bếp',
            'Chức năng chống tràn, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng, hẹn giờ độc lập',
            'Sản xuất tại Malaysia'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '02',
        imgUrl: productImg02,
        productName: 'Bếp điện từ đôi Kangaroo KG435i', 
        category: 'bep-dien',
        displayHome: 'hotSale',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 2.200.000',
        oldPrice: '8.000.000',
        price: 5800000,
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính cường lực Ceramic chống bám nước, chống xước, chịu sốc nhiệt',
            'Công nghệ dẫn nhiệt theo chiều dọc, tiết kiệm điện năng',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Cảnh báo khi không có nồi/sai loại nồi, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng, hẹn giờ độc lập',
            'Thương hiệu Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '03',
        imgUrl: productImg03,
        productName: 'Máy lọc nước RO 9 lõi Daikiosan DSW 32009H2', 
        category: 'may-loc-nuoc',
        displayHome: 'hotSale',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 1.350.000',
        oldPrice: '6.650.000',
        price: 5300000,
        gift: '',
        description: [
            '9 cấp lọc',
            'Linh kiệt nhập khẩu Mỹ, Đài Loan, ...',
            'Chức năng: chỉ lọc',
            'Công suất lọc: 10L/h',
            'Bình áp: ~10L',
            'Lắp ráp tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '04',
        imgUrl: productImg04,
        productName: 'Cây nước Nóng Lạnh Mutosi MD-203', 
        category: 'may-loc-nuoc',
        displayHome: 'hotSale',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 140.000',
        oldPrice: '4.090.000',
        price: 3950000,
        gift: 'Lưu ý: Chỉ dùng bình nước đầu đứng',
        description: [
            'Công nghệ làm lạnh bằng Block giúp làm lạnh nhanh và sâu 6ºC ~ 12ºC',
            'Làm nóng nhanh và cao 85ºC ~ 95ºC',
            'Tủ chứa đồ lớn, lên tới 14L',
            'Công tắc nóng lạnh riêng biệt',
            'Vỏ tủ chắc chắn, thân tủ kín, bảo vệ các linh kiện bên trong',
            'Thiết kế úp bình'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '05',
        imgUrl: productImg05,
        productName: 'Bếp gas đôi mặt kính Akia Slim', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: fiveYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 150.000',
        oldPrice: '1.790.000',
        price: 1640000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực',
            'Đầu đốt đồng thau',
            'Kiềng thép phủ men',
            'Mâm hứng dầu rời kèm ron cao su cách nhiệt',
            'Điếu inox 304 chống gỉ sét',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '06',
        imgUrl: productImg06,
        productName: 'Bếp gas mini NaMilux PL2111AS - Chống nổ Inline-Cut', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 10.000',
        oldPrice: '280.000',
        price: 270000,
        gift: '',
        description: [
            'Van an toàn Inline-Cut',
            'Vỏ inox 304 dập không gỉ',
            'Đánh lửa magneto (cơ)',
            'Chân kiềng nhôm có chắn gió',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '07',
        imgUrl: productImg07,
        productName: 'Bếp gas cao áp khè ThaiFlame', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: '',
        apr: '',
        sale: 'Giảm 10.000',
        oldPrice: '580.000',
        price: 570000,
        gift: '',
        description: [
            'Đầu đốt gang',
            'Thân bếp gang',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '08',
        imgUrl: productImg08,
        productName: 'Bếp gas đôi mặt kính LoraSun/Nasonal', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: twoYearWarranty,
        apr: '',
        sale: 'Giảm 30.000',
        oldPrice: '580.000',
        price: 550000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực',
            'Đầu đốt đồng thau',
            'Kiềng thép phủ men',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '09',
        imgUrl: productImg09,
        productName: 'Bếp gas đôi mặt kính Ogawa/Fukuda QD001', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: twoYearWarranty,
        apr: '',
        sale: 'Giảm 40.000',
        oldPrice: '890.000',
        price: 850000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực',
            'Đầu đốt đồng thau',
            'Kiềng thép phủ men',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '10',
        imgUrl: productImg10,
        productName: 'Bếp gas đôi Ogawa OG-640', 
        category: 'bep-gas',
        displayHome: 'bestSale',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 51.000',
        oldPrice: '1.250.000',
        price: 1199000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực',
            'Đầu đốt đồng thau',
            'Điếu inox 304 chống gỉ sét',
            'Kiềng thép phủ men chống gỉ',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '11',
        imgUrl: productImg11,
        productName: 'Van điều áp tự ngắt Nasonal NA-666', 
        category: 'phu-kien',
        displayHome: 'bestSale',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 20.000',
        oldPrice: '',
        price: 99000,
        gift: 'Giảm thêm 20.000 khi mua kèm dây dẫn gas',
        description: [
            'Điều áp giúp tự ngắt gas khi quá áp',
            'Áp suất đầu vào : 0.7 - 7kgf/cm2',
            'Áp suất đầu ra: 3.5 ± 0.5 kPa',
            'Công suất tối đa: 2kg/h'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '12',
        imgUrl: productImg12,
        productName: 'Bếp điện từ KAFF KF-FL866GII (2 từ)', 
        category: 'bep-dien',
        displayHome: 'bestSale',
        warranty: fiveYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 4.000.000',
        oldPrice: '1500.000',
        price: 10800000,
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính Ceramic cường lực, chịu lực, chịu sốc nhiệt',
            'Đầu đốt EGO (Made in Germany) 2 vòng nhiệt',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Chức năng inverter và chia công suất tiết kiệm điện và bảo vệ bếp',
            'Chức năng chống tràn, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng (hâm, chiên, xào,...), hẹn giờ độc lập',
            'Sản xuất tại Malaysia',
            'Kích thước cắt đá: 680x390mm'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '13',
        imgUrl: productImg13,
        productName: 'Bếp gas đơn mặt kính Nasonal NA 250', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 20.000',
        oldPrice: '360.000',
        price: 340000,
        gift: 'Tặng chảo chống dính Sunhouse 18cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực',
            'Đầu đốt đồng thau',
            'Kiềng thép phủ men',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '14',
        imgUrl: productImg14,
        productName: 'Bếp công nghiệp 2 vòng lửa Nasonal', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: '',
        apr: '',
        sale: 'Giảm 10.000',
        oldPrice: '630.000',
        price: 620000,
        gift: '',
        description: [
            'Đầu đốt gang',
            'Thân bếp gang',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '15',
        imgUrl: productImg15,
        productName: 'Bếp gas âm Rinnai RVB-2i(AB) - Tự động ngắt', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 200.000',
        oldPrice: '5.300.000',
        price: 5100000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực cao ấp',
            'Đầu đốt bằng thép không gỉ công nghệ Inner Burner lửa xoắn',
            'Kiềng thép phủ men kèm mâm hứng dầu rời chống gỉ',
            'Đánh lửa IC dùng Pin',
            'Cảm ứng tự động ngắt gas tự động khi gặp sự cố',
            'Sản xuất tại Việt Nam',
            'Kích thước cắt đá: 700x400 mm'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '16',
        imgUrl: productImg16,
        productName: 'Bếp gas mini Namilux PL1911PF Chống nổ Inline-cut', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 10.000',
        oldPrice: '260.000',
        price: 250000,
        gift: '',
        description: [
            'Van an toàn Inline-Cut',
            'Vỏ tôn sơn đỏ',
            'Đánh lửa magneto (cơ)',
            'Chân kiềng nhôm có chắn gió',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '17',
        imgUrl: productImg17,
        productName: 'Bếp gas đôi mặt kính Rinnai 715 Slim(GL-D)', 
        category: 'bep-gas',
        displayHome: '',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: '',
        oldPrice: '',
        price: 2800000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực cao ấp',
            'Đầu đốt đồng thau kèm đầu hâm',
            'Kiềng thép phủ men kèm mâm hứng dầu có thể tháo rời',
            'Đánh lửa magneto (cơ)',
            'Điếu gang bền bỉ',
            'Lượng gas tiêu thụ ~0.42kg/h',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '18',
        imgUrl: productImg18,
        productName: 'Bếp gas âm Sanka SKT-795', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 300.000',
        oldPrice: '2.490.000',
        price: 2190000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt kính cường lực chịu nhiệt',
            'Đánh lửa magneto (cơ)',
            'Kiềng thép phủ men',
            'Đầu đốt đồng thau',
            'Điếu inox 304',
            'Sản xuất tại Việt Nam',
            'Kích thước cắt đá: 650x370mm'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '19',
        imgUrl: productImg19,
        productName: 'Bếp gas đôi mặt inox SankaTech SKT-903', 
        category: 'bep-gas',
        displayHome: '',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: '',
        oldPrice: '',
        price: 1950000,
        gift: 'Tặng chảo chống dính Elmich 26cm khi mua kèm van gas',
        description: [
            'Mặt inox cao cấp',
            'Đánh lửa magneto (cơ)',
            'Kiềng thép phủ men',
            'Đầu đốt đồng thau',
            'Điếu inox 304',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '20',
        imgUrl: productImg20,
        productName: 'Lò nướng âm tủ Kaff KF-901', 
        category: 'dien-gia-dung',
        displayHome: 'new',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 1.480.000',
        oldPrice: '1500.000',
        price: 13320000,
        gift: 'Phụ kiện: vỉ nướng và khay nướng',
        description: [
            'Dung tích 60L có đèn trong lò',
            '9 chức năng nướng đối lưu',
            'Cửa kính 2 lớp cách nhiệt',
            'Điều khiển núm vặn cơ học',
            'Đồng hồ điện tử có chức năng hẹn giờ',
            'Tự vệ sinh bằng phương pháp nhiệt phân Catalytic',
            'Tiêu chuẩn tiết kiệm điện Châu Âu A++',
            'Khóa trẻ em, tự tắt khi không sử dụng',
            'Kích thước khoét đá: 590C x 560R x 595S',
            'Xuất xứ: Malaysia'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '21',
        imgUrl: productImg21,
        productName: 'Máy hút mùi Kaff KF-GB702', 
        category: 'dien-gia-dung',
        displayHome: 'new',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: '',
        oldPrice: '',
        price: 7880000,
        gift: 'Phụ kiện: vỉ nướng và khay nướng',
        description: [
            'Thân máy inox, mặt kính cường lực 8mm tráng men',
            'Cảm ứng 3 tốc độ',
            'Đèn led 2 x 2W',
            'Động cơ Turbin 170W công suất 1000m3/h',
            'Bộ lọc lưới nhôm + than hoạt tính',
            'Độ ồn tối đa 48 dB',
            'Ống thoát D150 và ống mềm đi kèm',
            'Ốp ống khói inox 2x450x300 mm',
            'Kích thước 475x700 mm',
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '22',
        imgUrl: productImg22,
        productName: 'Máy hút mùi âm kệ tủ Kaff KF-TL70H', 
        category: 'dien-gia-dung',
        displayHome: 'new',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'Giảm 590.000',
        oldPrice: '5.580.000',
        price: 4990000,
        gift: '',
        description: [
            'Chất liệu kính phối inox sang trọng, hiện đại',
            'Động cơ đôi 2x80W',
            'Đèn halogen 2x40W',
            'Công suất: 750m3/h',
            'Độ ồn tối đa: 48Db',
            'Điều khiển phím bấm cơ 2 tốc độ',
            'Ống thoát 120mm và ống mềm kèm theo',
            'Lưới lọc mỡ Aluminum 3 lớp',
            'Chế độ hút và khử mùi bằng than hoạt tính',
            'Kích thước: 700Dx280Rx175C mm'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '23',
        imgUrl: productImg23,
        productName: 'Lò vi sóng âm kệ tủ Kaff KF-MC34L', 
        category: 'dien-gia-dung',
        displayHome: 'new',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'giảm 1.360.000',
        oldPrice: '13.600.000',
        price: 12240000,
        gift: 'Phụ kiện: đĩa thủy tinh, vỉ nướng',
        description: [
            'Dung tích 34L có đèn trong lò',
            'màn hình LCD điều khiển cảm ứng',
            '5 mức công suất',
            '3 chương trình kết hợp tự động, 2 chương trình rã đông',
            'Hẹn giờ điện tử, khóa trẻ em',
            'Kích thước cắt tủ: 380C x 560R x 550S',
            'Xuất xứ: Malaysia'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '24',
        imgUrl: productImg24,
        productName: 'Bếp điện từ đôi Kangaroo KG438i', 
        category: 'bep-dien',
        displayHome: '',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'giảm 2.000.000',
        oldPrice: '8.500.000',
        price: 6300000,
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính cường lực Ceramic chống bám nước, chống xước, chịu sốc nhiệt',
            'Công nghệ dẫn nhiệt theo chiều dọc, tiết kiệm điện năng',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Cảnh báo khi không có nồi/sai loại nồi, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng, hẹn giờ độc lập',
            'Thương hiệu Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '25',
        imgUrl: productImg25,
        productName: 'Nồi cơm gas Kiwa MK55RA 10L', 
        category: 'dien-gia-dung',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: 'Trả góp 0%',
        sale: 'giảm 500.000',
        oldPrice: '5.490.000',
        price: 4990000,
        gift: '',
        description: [
            'Dung tích 10L',
            'Nấu tự động, tự ngắt gas khi chín',
            'Nắp rời, lòng nồi hợp kim nhôm',
            'Nấu tối đa: Gạo thường: 6.5kg/lần, gạo tấm: 4kg/lần',
            'Dùng với van thấp áp - tiêu thụ ~0.49kg gas/giờ',
            'Xuất sứ Đài Loan'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '26',
        imgUrl: productImg26,
        productName: 'Bếp điện từ đơn Midea MI-B2015DE - kèm nồi lẩu nắp kính', 
        category: 'bep-dien',
        displayHome: '',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 40.000',
        oldPrice: '1.290.000',
        price: 1250000,
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt sứ đen cao cấp chống trầy xước',
            'Đa chế độ nấu: súp, xàp, canh, cháo, chiên, lẩu',
            'Điều khiển nút cơ',
            'Cảnh báo khi không có nồi, tự ngắt khi bếp nóng quá tải',
            'Chức năng hẹn giờ'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '27',
        imgUrl: productImg27,
        productName: 'Bếp điện từ đơn Ladomax HA668', 
        category: 'bep-dien',
        displayHome: '',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 40.000',
        oldPrice: '890.000',
        price: 850000,
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính cường lực',
            'Đa chế độ nấu: súp, hấp, nước, sữa, chiên, lẩu, nướng, cháo',
            'Điều khiển cảm ứng',
            'Chống nhiễu từ, không mùi, an toàn khi sử dụng',
            'Chức năng hẹn giờ, khóa trẻ em'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '28',
        imgUrl: productImg28,
        productName: 'Máy lọc nước 7 lõi để gầm Mutosi MP-370U', 
        category: 'may-loc-nuoc',
        displayHome: 'recommended',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: '200.000',
        oldPrice: '6.135.000',
        price: 5925000,
        gift: '',
        description: [
            '7 cấp lọc',
            'Công suất lọc: 20L/h',
            'Chức năng: chỉ lọc',
            'Bình áp 6L',
            'Lắp ráp tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '29',
        imgUrl: productImg29,
        productName: 'Cây lọc nước Nóng Nguội 8 lõi Mutosi MP-582H', 
        category: 'may-loc-nuoc',
        displayHome: 'recommended',
        warranty: twoYearWarranty,
        apr: 'Trả góp 0%',
        sale: '600.000',
        oldPrice: '8.290.000',
        price: 7690000,
        gift: '',
        description: [
            '8 cấp lọc tích hợp lõi ORP Hydrogen làm kiềm nước',
            '1 vòi 2 chức năng Nóng - Nguội tiện lợi',
            'Tiết kiệm điện năng với công tắc bật tắt chế độ nóng',
            'Nước sau lọc đạt quy chuẩn nước uống đóng chai QCVN 6-1:2010/BYT',
            'Vỏ tủ chắc chắn, thân tủ kín, bảo vệ các linh kiện bên trong',
            'Lắp ráp tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '30',
        imgUrl: productImg30,
        productName: 'Bếp gas đơn mặt inox Namilux NA300ASM', 
        category: 'bep-gas',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'giảm 10.000',
        oldPrice: '380.000',
        price: 370000,
        gift: 'Tặng chảo chống dính Sunhouse 18cm khi mua kèm van gas',
        description: [
            'Vỏ inox chống gỉ sét',
            'Đầu đốt hợp kim nhôm Namilux',
            'Kiềng thép phủ men có thể tháo rời',
            'Đánh lửa magneto (cơ)',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '31',
        imgUrl: productImg31,
        productName: 'Nồi cơm điện nắp liền Kim Cương 1.2L', 
        category: 'dien-gia-dung',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: '',
        oldPrice: '',
        price: 370000,
        gift: 'Lưu ý: Chỉ dùng nấu cơm, không được nấu cháo, nước sôi và các loại thực phẩm khác',
        description: [
            'Dung tích 1.2L',
            'Lòng nồi chống dính',
            'Chế độ hâm nóng',
            'Thương hiệu Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '32',
        imgUrl: productImg32,
        productName: 'Bếp hồng ngoại đơn Sakura SE-3150B - kèm vỉ nướng', 
        category: 'bep-dien',
        displayHome: '',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 40.000',
        oldPrice: '1.290.000',
        price: 1250000,
        gift: 'Sản phẩm đi kèm vỉ nướng',
        description: [
            'Mặt kính Crystallite đen, thân Inox với tay cầm hai bên',
            'Đa chế độ nấu: súp, xào, lẩu, nướng',
            'Điều khiển cảm ứng, núm vặn, màn hình led',
            'Tự ngắt khi quá nhiệt',
            'Chức năng hẹn giờ, khóa trẻ em'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '33',
        imgUrl: productImg33,
        productName: 'Nồi cơm điện tử Sharp KS-COM19V', 
        category: 'dien-gia-dung',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 500.000',
        oldPrice: '2.590.000',
        price: 2090000,
        gift: 'Phụ kiện: Xưởng hấp, cốc đong gạo, muỗng xới cơm',
        description: [
            'Dung tích 1.8L',
            'Đa chế độ nấu: cháo, bánh, súp, canh,...',
            'Hẹn giờ nấu',
            'Lòng nồi chống dính, tay nắm nhựa chống nóng',
            'Tay cầm xoay, dây điện rút'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '34',
        imgUrl: productImg34,
        productName: 'Nồi cơm điện nắp rời công nghiệp Sharp KSH D55V 5L', 
        category: 'dien-gia-dung',
        displayHome: 'recommended',
        warranty: oneYearWarranty,
        apr: '',
        sale: '',
        oldPrice: '',
        price: 2650000,
        gift: 'Phụ kiện: Xưởng hấp, cốc đong gạo, muỗng xới cơm',
        description: [
            'Dung tích 5L',
            'Nắp làm bằng thép không gỉ',
            'Lòng nồi nhôm kèm muỗng xới cơm, cốc đong gạo',
            'Tay cầm, chân đế làm bằng vật liệu Phenolic, không nóng và cách nhiệt tốt',
            'Giữ ấm 5 giờ'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '35',
        imgUrl: productImg35,
        productName: 'Van điều áp tự ngắt Katsura Nhật Bản VKL-2A', 
        category: 'phu-kien',
        displayHome: '',
        warranty: twoYearWarranty,
        apr: '',
        sale: 'giảm 20.000',
        oldPrice: '',
        price: 280000,
        gift: 'Giảm thêm 20.000 khi mau kèm dây dẫn gas',
        description: [
            'Điều áp giúp tự ngắt gas khi quá áp',
            'Áp suất đầu vào P: 0.07 ~ 0.7 MPa',
            'Áp suất điều chỉnh R: 2.8 ± 0.6 kPa',
            'Áp suất tối đa trong van: dưới 4.1 kPa',
            'Lưu lượng Q: 2kg/h',
            'Thương hiệu Nhật Bản, sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '36',
        imgUrl: productImg36,
        productName: 'Van cao áp Sawana Star SW-999A (dùng cho bếp khè)', 
        category: 'phu-kien',
        displayHome: '',
        warranty: '',
        apr: '',
        sale: '',
        oldPrice: '',
        price: 180000,
        gift: 'Lưu ý: chỉ dùng cho bếp khè cao áp',
        description: [
            'Áp suất đầu vào : 0.7 - 7kgf/cm2',
            'Công suất tối đa: 7kg/h'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '37',
        imgUrl: productImg37,
        productName: 'Van điều áp tự ngắt NaMilux NA-336S-VN', 
        category: 'phu-kien',
        displayHome: '',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'giảm 20.000',
        oldPrice: '',
        price: 180000,
        gift: 'Giảm thêm 20.000 khi mau kèm dây dẫn gas',
        description: [
            'Điều áp giúp tự ngắt gas khi quá áp',
            'Áp suất đầu vào : 70 ~ 900 kPa',
            'Áp suất đầu ra: 3.5 ± 0.5 kPa',
            'Công suất tối đa: 2kg/h',
            'Sản xuất tại Việt Nam'
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
    {
        id: '38',
        imgUrl: productImg38,
        productName: 'Van điều áp bình đầu đứng Petrolimex', 
        category: 'phu-kien',
        displayHome: '',
        warranty: oneYearWarranty,
        apr: '',
        sale: 'Giảm 150.000',
        oldPrice: '',
        price: 450000,
        gift: 'Giảm 150.000 khi chuyển đổi từ bình đầu ngang sang đầu đứng',
        description: [
            ''
        ],
        reviews: [
            {
                rating: 5,
                text: 'test comment'
            },
        ],
        avgRating: 4.5,
    },
]

export default products;