
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';


const DetailProduct = () => {
    const { slug } = useParams();
    console.log(slug);
    const [mainImage, setMainImage] = useState(
        '../../../../public/image/products/75017d659bfae872d216ace0008ec92c.jpg'
    );
    const [quantity, setQuantity] = useState(1);
    const imageRef = useRef(null);
    const magnifierRef = useRef(null);


    const images = [
        '../../../../public/image/products/7ca9a3462130dd16b9d8013e7daac9a0.jpg',
        '../../../../public/image/products/83118f02689e3e63fe1b3ca941a2b1f0.jpg',
        '../../../../public/image/products/9da914a5b9e73c93465d1651a40b9f92.jpg',
        '../../../../public/image/products/7ca9a3462130dd16b9d8013e7daac9a0.jpg',
        '../../../../public/image/products/83118f02689e3e63fe1b3ca941a2b1f0.jpg',
        '../../../../public/image/products/9da914a5b9e73c93465d1651a40b9f92.jpg',
    ];

    const variants = [
        'Cao 90 cm',
        'Cao 90 cm + chậu',
        'Cao 100 cm',
        'Cao 100 cm + chậu',
    ];

    const handleImageChange = (src) => {
        setMainImage(src);
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleMouseMove = (event) => {
        if (imageRef.current && magnifierRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const scale = 3;
            const width = magnifierRef.current.offsetWidth;
            const height = magnifierRef.current.offsetHeight;

            const cx = x - width / 2;
            const cy = y - height / 2;

            magnifierRef.current.style.display = 'block';
            magnifierRef.current.style.left = `${x - width / 2}px`;
            magnifierRef.current.style.top = `${y - height / 2}px`;

            magnifierRef.current.style.backgroundImage = `url(${mainImage})`;
            magnifierRef.current.style.backgroundSize = `${imageRef.current.width * scale}px ${imageRef.current.height * scale}px`;
            magnifierRef.current.style.backgroundPosition = `-${cx * scale}px -${cy * scale}px`;
        }
    };

    const handleMouseOut = () => {
        if (magnifierRef.current) {
            magnifierRef.current.style.display = 'none';
        }
    };



    return (
        <main className="container mx-auto py-3">
            <section className="flex !bg-white p-4 rounded  justify-between">
                <aside className="flex w-1/2 h-[30rem]">
                    <div className="flex flex-col w-1/5 m-1 space-y-2 h-[100%] custom-scrollbar ">
                        {images.map((src, index) => (
                            <div key={index} className="box_image">
                                <img
                                    src={src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-auto cursor-pointer"
                                    onClick={() => handleImageChange(src)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="w-4/5 m-1 h-auto relative">
                        <img
                            id="myImage"
                            src={mainImage}
                            alt="Product"
                            className="w-full h-100"
                            ref={imageRef}
                            onMouseMove={handleMouseMove}
                            onMouseOut={handleMouseOut}
                        />
                        <div id="magnifier" className="magnifier" ref={magnifierRef}></div>
                    </div>
                </aside>
                <article className="w-1/2 px-4">
                    <h5 className="!text-orange-600 !font-bold">Cây để bàn</h5>
                    <h3 className="text-2xl  !text-green-900 line-clamp-2">
                        Cây bắt ruồi Hoa diệt trùng Cỏ lồng lớn Loài ăn thịt người hoa Côn trùng chống muỗi
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Cây bắt ruồi có khả năng bắt ruồi, kiến, là loại cây dễ trồng lại vô cùng lạ mắt. Hơn nữa,
                        nó còn có tác dụng trong đông ý, giúp giảm một số bệnh ở người. Cùng tìm hiểu loài cây
                        này cùng Bách hóa XANH ngay sau đây nhé!
                    </p>
                    <div className="mt-4 flex flex-row font-bold gap-3">
                        <h5 className="!text-orange-600 !font-semibold">120.000 vnđ</h5>
                        <h5 className="!text-green-900 line-through">150.000 vnđ</h5>
                    </div>
                    <div className="flex flex-col mt-2">
                        <h6 className="w-1/6 !font-semibold text-gray-700">Kích thước:</h6>
                        <div className="flex flex-wrap gap-2 max-h-[5rem] custom-scrollbar ">
                            {variants.map((variant, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    <span className='text-md'>{variant}</span>
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className="flex mt-3">
                        <h6 className="w-1/6 !font-bold text-gray-700">Số lượng:</h6>
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={decreaseQuantity}
                                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                <FiMinus />
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                readOnly
                                className="w-12 !py-2 text-center border-0 border-gray-200"
                            />
                            <button
                                type="button"
                                onClick={increaseQuantity}
                                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3 ">
                        <button className="flex items-center !px-14 py-2 !bg-green-900 text-white rounded hover:bg-gray-800">
                            <svg
                                className="cart mr-2"
                                fill="white"
                                viewBox="0 0 576 512"
                                height="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                            </svg>
                            Thêm giỏ hàng

                        </button>

                    </div>
                </article>
            </section>

            <section className="flex flex-col p-4 rounded !bg-white justify-between mt-6">
                <div>
                    <h4 className="text-xl font-semibold text-gray-700">CHI TIẾT SẢN PHẨM</h4>
                    {[
                        { label: 'Danh mục:', value: 'Cây để bàn' },
                        { label: 'Thương hiệu:', value: 'BLOOM' },
                        { label: 'Loại phân bón:', value: 'Hữu cơ' },
                        { label: 'Xuất xứ:', value: 'Đà lạt' },
                        { label: 'Gửi từ:', value: 'Cần Thơ' },
                    ].map((item, index) => (
                        <div key={index} className="flex mt-2">
                            <label className="w-1/6 font-semibold text-gray-700">{item.label}</label>
                            <p className="text-gray-600">{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className="w-5/6">
                    <h4 className="text-xl font-semibold text-gray-700">MÔ TẢ SẢN PHẨM</h4>
                    <p className="text-gray-600 mt-2">
                        Sen đá Ngọc Bích - Echeveria "Onslow" là một trong những cây sen đá quốc dân bởi vẻ đẹp
                        và sức sống mãnh liệt. Cây có màu xanh nhạt khi đủ già và đủ nắng sẽ lên được màu vàng
                        xanh. Onslow thích hợp trồng cả xứ lạnh và xứ nóng.
                        <br />
                        - Sen trung, size 10-12cm
                        <br />
                        - Tuổi: Trên 10 tháng
                        <br />
                        - Cây kèm bầu đất & chậu nhựa mỏng từ nhà vườn
                        <br />
                        - Xuất sứ: Đà Lạt
                        <br />
                        - Hàng được sản xuất theo tiêu chuẩn độc quyền.
                        <div className="mt-2">
                            <h5 className="font-semibold text-gray-700">HƯỚNG DẪN XỬ LÝ KHI MỚI MUA VỀ:</h5>
                            Trước khi chuyển hàng, sen đã được ngừng tưới 3-4 ngày để tránh tình trạng sốc nhiệt/
                            úng rễ khi gửi hàng xa. Vì thế khi nhận hàng bạn cần lưu ý các bước xử lý sau: <br />
                            <b>1.</b> Đối với những vùng có khí hậu núi cao tương tự Đà Lạt như Khu vực Tây Nguyên,
                            Sơn La, Mộc Châu... Bạn có thể mang trồng và tưới nước luôn không cần xử lý gì cả. Chỉ
                            khoảng 5-7 ngày là cây sẽ phát rễ và lớn rất nhanh <br />
                            <b>2.</b> Đối với các vùng khí hậu nóng/ nhiệt đới: Sài Gòn, các tỉnh Miền Tây, khu vực
                            Nam - Trung bộ.... bạn cần làm theo các bước sau:
                        </div>
                        <div className="mt-2">
                            <ul className="list-disc pl-5">
                                <li>
                                    Bước 1: Rũ bỏ giá thể cũ (có thể lấy vòi nước mạnh xịt cho bong giá thể). Tỉa các
                                    rễ nhỏ, cắt rễ lớn còn lại khoảng 2cm tính từ gốc
                                </li>
                                <li>
                                    Bước 2: Để chỗ mát tránh ánh nắng trực tiếp khoảng 3 ngày cho vết cắt khô lại, tránh
                                    nhiễm trùng
                                </li>
                                <li>
                                    Bước 3: Chuẩn bị giá thể (ưu tiên các loại giá thể chuyên dụng), tưới lượng nước
                                    nhỏ đủ ẩm
                                </li>
                                <li>Bước 4: Đặt cây vào và phủ đất kín phần rễ cây</li>
                                <li>
                                    Bước 5: Đặt cây vào chỗ thoáng mát (không đặt trong phòng điều hòa), tránh ánh nắng
                                    trực tiếp, không được di chuyển chậu hoặc lay gốc trong thời gian này
                                </li>
                                <li>
                                    Bước 6: Sau 2 tuần, khi thấy phần ngọn đã bắt đầu có dấu hiệu phát triển và lay nhẹ
                                    thấy phần gốc đã bám vào giá thể. Bạn có thể từ từ cho cây ra nắng và bắt đầu tưới
                                    nước bình thường.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-2">
                            <h5 className="font-semibold text-gray-700">BLOOM CAM KẾT:</h5>
                            <ul className="list-disc pl-5">
                                <li>100% Hình ảnh do đội ngũ Bloom tự sản xuất</li>
                                <li>Sản phẩm định lượng, đúng kích thước, đúng màu sắc</li>
                                <li>Giao hàng trên Toàn Quốc</li>
                                <li>Hàng có sẵn, giao ngay khi nhận đơn.</li>
                                <li>Hỗ trợ đổi trả theo quy định của Shopee</li>
                            </ul>
                            <h5 className="font-semibold text-gray-700 mt-2">VỀ BLOOM</h5>
                            Về Bloom: Bloom là đại lý phân phối các sản phẩm giá thể, cây mini, phân thuốc liên
                            quan đặc biệt phù hợp cho các khu vườn thành phố, vườn ban công... Mọi sản phẩm của
                            Bloom đều được đảm bảo đáp ứng chất lượng theo chuẩn cao nhất của ngành hàng.
                        </div>
                    </p>
                </div>
            </section>


        </main>
    );
};

export default DetailProduct;
