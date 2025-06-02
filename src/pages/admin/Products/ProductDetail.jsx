import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Nút trái/phải tuỳ chỉnh
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow left" onClick={onClick}>
        <FaChevronLeft />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow right" onClick={onClick}>
        <FaChevronRight />
    </div>
);

const ProductDetail = () => {
    const product = {
        name: "Đồng hồ Casio MTP-V002",
        price: 1500000,
        brand: "Casio",
        category: "Đồng hồ nam",
        description: "Thiết kế cổ điển, dây da, chống nước tốt.",
        status: 1,
        stock: 24,
        images: [
            "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
            "https://res.cloudinary.com/dovmddijy/image/upload/v1745405100/wk7rjfayv9pxoaqvwoqq.webp",
            "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
        ],
    };

    const variants = [
        { id: 1, color: "Đen", color_code: "#000000", variant_price: 1450000, quantity: 10 },
        { id: 2, color: "Nâu", color_code: "#a0522d", variant_price: 1500000, quantity: 8 },
        { id: 3, color: "Xám", color_code: "#808080", variant_price: 1490000, quantity: 6 },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container py-5">
            {/* Thông tin sản phẩm */}
            <div className="card p-5 shadow-sm mb-5">
                <div className="row g-4 align-items-start">
                    <div className="col-md-5">
                        <div className="slider-wrapper position-relative">
                            <Slider {...sliderSettings}>
                                {product.images.map((img, i) => (
                                    <div key={i}>
                                        <img
                                            src={img}
                                            alt={`Ảnh ${i + 1}`}
                                            className="img-fluid rounded"
                                            style={{ height: "350px", objectFit: "cover", width: "100%" }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <h3 className="fw-bold mb-3">{product.name}</h3>
                        <p><strong>Thương hiệu:</strong> {product.brand}</p>
                        <p><strong>Danh mục:</strong> {product.category}</p>
                        <p className="text-danger fs-5 fw-semibold">{product.price.toLocaleString()}₫</p>
                        <p><strong>Mô tả:</strong> {product.description}</p>
                        <p>
                            <strong>Trạng thái:</strong>{" "}
                            <span className={`badge ${product.status ? "bg-success" : "bg-secondary"}`}>
                                {product.status ? "Hiển thị" : "Ẩn"}
                            </span>
                        </p>
                        <p><strong>Tồn kho:</strong> {product.stock} sản phẩm</p>
                        <Link to="/admin/products" className="btn btn-outline-secondary mt-3">
                            ← Quay lại danh sách
                        </Link>
                    </div>
                </div>
            </div>

            {/* Biến thể sản phẩm */}
            <div className="card p-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">Biến thể sản phẩm</h5>
                    <Link to={`/admin/products/${product.id}/variants/create`} className="btn btn-sm btn-primary">
                        + Thêm biến thể
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Màu</th>
                                <th>Mã màu</th>
                                <th>Giá biến thể</th>
                                <th>Tồn kho</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variants.length > 0 ? (
                                variants.map((v, index) => (
                                    <tr key={v.id}>
                                        <td>{index + 1}</td>
                                        <td>{v.color}</td>
                                        <td>
                                            <span
                                                className="d-inline-block rounded-circle border"
                                                style={{
                                                    backgroundColor: v.color_code,
                                                    width: "20px",
                                                    height: "20px",
                                                }}
                                                title={v.color_code}
                                            ></span>
                                        </td>
                                        <td>{v.variant_price.toLocaleString()}₫</td>
                                        <td>{v.quantity}</td>
                                        <td>
                                            <Link
                                                to={`/admin/products/${product.id}/variants/${v.id}/edit`}
                                                className="btn btn-sm btn-outline-info me-2"
                                            >
                                                Thêm số lượng
                                            </Link>
                                            <Link
                                                to={`/admin/products/${product.id}/variants/${v.id}/edit`}
                                                className="btn btn-sm btn-outline-warning me-2"
                                            >
                                                Sửa
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteVariant(v.id)}
                                                className="btn btn-sm btn-outline-danger"
                                            >
                                                Xoá
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-muted">Không có biến thể nào</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
