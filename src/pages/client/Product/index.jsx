import React, { useState } from 'react';
import CardProduct from '../../../components/ProductCard';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Product = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = [
        { name: 'Đồng hồ Thụy Sĩ', count: 12 },
        { name: 'Đồng hồ Nhật Bản', count: 8 },
        { name: 'Đồng hồ Thể thao', count: 15 },
        { name: 'Đồng hồ Sang trọng', count: 10 },
        { name: 'Đồng hồ Thông minh', count: 20 },
        { name: 'Đồng hồ Điện tử', count: 7 },
        { name: 'Đồng hồ Cổ điển', count: 5 },
        { name: 'Đồng hồ Giới hạn', count: 3 },
    ];

    const stats = [
        { number: '500+', name: 'Sản phẩm' },
        { number: '50+', name: 'Thương hiệu' },
        { number: '1000+', name: 'Bình luận' },
        { number: '5000+', name: 'Lượt truy cập' },
    ];

    const products = Array(11).fill({
        image: '../../../../public/image/products/facebook-dynamic-nuoc-hoa-nu-narciso-rodriguez-for-her-edp-30ml-1711530320_img_385x385_622873_fit_center.jpg',
        originalPrice: '25,660,000 đ',
        salePrice: '22,570,800 đ',
        name: 'Rolex Submariner',
        description: 'Đồng hồ nam Rolex Submariner Date Oystersteel - Thiết kế sang trọng, chống nước 300m, phù hợp mọi hoạt động từ công sở đến thể thao.',
        discount: '-12%',
    });

    return (
        <div>
            <section className="!bg-white shadow-[10px_10px_30px_#e8e8e8,-10px_-10px_30px_#ffffff] ">
                <div className="container mx-auto flex">
                    <div
                        className="w-2/3 bg-no-repeat bg-bottom-right bg-white"
                        style={{ backgroundImage: "url('../../../../public/image/main/image-removebg-preview (5).png')" }}
                    >
                        <div className="ml-[5%]">
                            <p
                                className={`text-[11rem] !text-green-900 ${styles.titleAnimation}`}
                            >
                                BLOOM
                            </p>
                            <p
                                className={`text-3xl  text-orange-500 !mt-[-5%] ${styles.sloganAnimation}`}
                            >
                                Đẳng cấp thời gian
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 relative bg-green-900 shadow-[-10px_0_100px_0_rgba(0,0,0,0.5)] h-[32rem]">
                        <img
                            src="../../../../public/image/main/image-removebg-preview2.png"
                            alt="Banner"
                            className={`absolute bottom-[0%] w-full h-auto drop-shadow-[15px_15px_20px_rgba(0,0,0,0.66)] ${styles.moveImage}`}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-orange-500 py-6 ">
                <div className="container mx-auto flex justify-between">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-1/4 text-center">
                            <p className="text-4xl font-semibold !text-green-900">{stat.number}</p>
                            <p className="text-lg font-semibold !text-green-900">{stat.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <main className="container mx-auto flex">
                <aside className="w-1/4 pb-4">
                    <h4 className="!text-3xl !font-semibold !text-green-900 mb-4">Danh mục</h4>
                    <div className="w-[90%]">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to="#"
                                className="flex justify-between !text-green-900 items-center !no-underline !hover:underline"
                            >
                                <p className="w-5/6 !text-green-900 font-medium text-lg truncate">
                                    {category.name}
                                </p>
                                <p className="w-1/6 !text-orange-600">({category.count})</p>
                            </Link>
                        ))}
                    </div>
                </aside>

                <article className="w-3/4 pb-4">
                    <nav className="bg-green-900 p-2">
                        <div
                            className="relative w-max ml-auto"
                            onMouseEnter={() => setIsFilterOpen(true)}
                            onMouseLeave={() => setIsFilterOpen(false)}
                        >
                            <div className="text-white flex items-center">
                                <FaBars size={24} />
                            </div>
                            <div
                                className={`absolute right-0 z-100 bg-white shadow-md rounded-md w-24 
                                    text-center transition-all duration-500 ${isFilterOpen ?
                                        'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                    }`}
                            >
                                <Link to="#" className="block px-2 py-1 rounded-md !text-green-900 !no-underline hover:bg-green-200 ">
                                    A-Z
                                </Link>
                                <Link to="#" className="block px-2 py-1 rounded-md !text-green-900 !no-underline hover:bg-green-200">
                                    Z-A
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-wrap -mx-2 p-1">
                        {products.map((product, index) => (
                            <CardProduct
                                key={index}
                                image={product.image}
                                hoverImage={product.hoverImage}
                                originalPrice={product.originalPrice}
                                salePrice={product.salePrice}
                                name={product.name}
                                description={product.description}
                                discount={index % 3 === 0 ? product.discount : null}
                            />
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
};

export default Product;