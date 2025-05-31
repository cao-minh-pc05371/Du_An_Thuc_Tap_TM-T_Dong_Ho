import React from "react";
import { useForm } from "react-hook-form";
import "./ProductCreate.css"; // Tùy chọn, để đồng bộ giao diện

const ProductCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Thêm sản phẩm:", data);
        // TODO: Gửi dữ liệu về backend (đừng quên xử lý FormData nếu có ảnh)
    };

    return (
        <div className="category-form-wrapper">
            <h3 className="form-title">Thêm sản phẩm</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Tên sản phẩm */}
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", { required: "Không được để trống tên sản phẩm" })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                {/* Giá */}
                <div className="form-group">
                    <label>Giá sản phẩm (VNĐ)</label>
                    <input
                        type="number"
                        className={`form-control ${errors.price ? "is-invalid" : ""}`}
                        {...register("price", {
                            required: "Không được để trống giá",
                            min: { value: 1000, message: "Giá tối thiểu là 1.000₫" },
                        })}
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                </div>

                {/* Danh mục */}
                <div className="form-group">
                    <label>Danh mục</label>
                    <select
                        className={`form-select ${errors.category ? "is-invalid" : ""}`}
                        {...register("category", { required: "Vui lòng chọn danh mục" })}
                    >
                        <option value="">-- Chọn danh mục --</option>
                        <option value="dong-ho-nam">Đồng hồ nam</option>
                        <option value="dong-ho-nu">Đồng hồ nữ</option>
                    </select>
                    {errors.category && <div className="invalid-feedback">{errors.category.message}</div>}
                </div>

                {/* Thương hiệu */}
                <div className="form-group">
                    <label>Thương hiệu</label>
                    <select
                        className={`form-select ${errors.brand ? "is-invalid" : ""}`}
                        {...register("brand", { required: "Vui lòng chọn thương hiệu" })}
                    >
                        <option value="">-- Chọn thương hiệu --</option>
                        <option value="casio">Casio</option>
                        <option value="seiko">Seiko</option>
                        <option value="citizen">Citizen</option>
                    </select>
                    {errors.brand && <div className="invalid-feedback">{errors.brand.message}</div>}
                </div>

                {/* Ảnh sản phẩm */}
                <div className="form-group">
                    <label>Ảnh sản phẩm</label>
                    <input
                        type="file"
                        className={`form-control ${errors.image ? "is-invalid" : ""}`}
                        {...register("image", { required: "Vui lòng chọn ảnh" })}
                    />
                    {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
                </div>

                {/* Trạng thái */}
                <div className="form-group">
                    <label>Trạng thái</label>
                    <select
                        className={`form-select ${errors.status ? "is-invalid" : ""}`}
                        {...register("status", { required: "Vui lòng chọn trạng thái" })}
                    >
                        <option value="">-- Chọn trạng thái --</option>
                        <option value="1">Hiển thị</option>
                        <option value="0">Ẩn</option>
                    </select>
                    {errors.status && <div className="invalid-feedback">{errors.status.message}</div>}
                </div>

                <button type="submit" className="btn-submit">Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductCreate;
