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
        '38mm - Dây da',
        '40mm - Dây thép',
        '42mm - Dây da',
        '44mm - Dây thép',
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
                    <h5 className="!text-orange-600 !font-bold">Đồng hồ nam</h5>
                    <h3 className="text-2xl  !text-green-900 line-clamp-2">
                        Đồng hồ Automatic Chronograph dây da cao cấp chống nước 5ATM
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Đồng hồ với thiết kế tinh tế, mặt số Chronograph chức năng, bộ máy Automatic chính xác.
                        Dây da cao cấp bền bỉ với thời gian, khả năng chống nước lên đến 5ATM. Phụ kiện hoàn hảo
                        cho phong cách lịch lãm của quý ông hiện đại.
                    </p>
                    <div className="mt-4 flex flex-row font-bold gap-3">
                        <h5 className="!text-orange-600 !font-semibold">4.250.000 vnđ</h5>
                        <h5 className="!text-green-900 line-through">5.000.000 vnđ</h5>
                    </div>
                    <div className="flex flex-col mt-2">
                        <h6 className="w-1/6 !font-semibold text-gray-700">Phiên bản:</h6>
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
                        { label: 'Danh mục:', value: 'Đồng hồ nam' },
                        { label: 'Thương hiệu:', value: 'TIMEX' },
                        { label: 'Loại máy:', value: 'Automatic' },
                        { label: 'Xuất xứ:', value: 'Thụy Sĩ' },
                        { label: 'Bảo hành:', value: '5 năm' },
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
                        Đồng hồ Automatic Chronograph TIMEX là sự kết hợp hoàn hảo giữa công nghệ Thụy Sĩ và thiết kế
                        tinh tế. Với bộ máy Automatic chính xác, mặt số Chronograph đa chức năng, đây là phụ kiện không
                        thể thiếu cho người đàn ông hiện đại.
                        <br />
                        - Đường kính mặt: 40mm
                        <br />
                        - Độ dày: 12mm
                        <br />
                        - Chất liệu: Thép không gỉ 316L
                        <br />
                        - Mặt kính: Sapphire chống trầy
                        <br />
                        - Chống nước: 5ATM
                        <div className="mt-2">
                            <h5 className="font-semibold text-gray-700">ĐẶC ĐIỂM NỔI BẬT:</h5>
                            - Bộ máy Automatic Thụy Sĩ chính xác, tích hợp chức năng Chronograph
                            <br />
                            - Dây da cao cấp chống thấm nước, không bong tróc theo thời gian
                            <br />
                            - Mặt kính Sapphire chống trầy xước, độ trong suốt cao
                            <br />
                            - Thiết kế mặt số tối giản nhưng đầy tinh tế với kim dạ quang
                        </div>
                        <div className="mt-2">
                            <h5 className="font-semibold text-gray-700">HƯỚNG DẪN SỬ DỤNG:</h5>
                            <ul className="list-disc pl-5">
                                <li>
                                    Đồng hồ Automatic hoạt động bằng chuyển động cổ tay, nếu không đeo thường xuyên
                                    cần lên dây cót thủ công
                                </li>
                                <li>
                                    Tránh tiếp xúc với từ trường mạnh và nhiệt độ cao
                                </li>
                                <li>
                                    Không điều chỉnh lịch/giờ khi đồng hồ ở vị trí từ 21h-3h
                                </li>
                                <li>Vệ sinh dây da bằng vải mềm khô, tránh ngâm nước lâu</li>
                                <li>
                                    Bảo dưỡng định kỳ 2-3 năm/lần tại trung tâm bảo hành chính hãng
                                </li>
                            </ul>
                        </div>
                        <div className="mt-2">
                            <h5 className="font-semibold text-gray-700">TIMEX CAM KẾT:</h5>
                            <ul className="list-disc pl-5">
                                <li>100% chính hãng, nguyên seal</li>
                                <li>Bảo hành chính hãng 5 năm toàn cầu</li>
                                <li>Miễn phí giao hàng toàn quốc</li>
                                <li>Đổi trả trong 7 ngày nếu lỗi nhà sản xuất</li>
                                <li>Hỗ trợ trả góp 0% qua thẻ tín dụng</li>
                            </ul>
                            <h5 className="font-semibold text-gray-700 mt-2">VỀ TIMEX</h5>
                            TIMEX là thương hiệu đồng hồ cao cấp đến từ Thụy Sĩ với hơn 150 năm kinh nghiệm. Mỗi chiếc
                            đồng hồ TIMEX đều được chế tác thủ công với độ chính xác tuyệt đối, là biểu tượng của đẳng
                            cấp và phong cách sống sang trọng.
                        </div>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default DetailProduct;