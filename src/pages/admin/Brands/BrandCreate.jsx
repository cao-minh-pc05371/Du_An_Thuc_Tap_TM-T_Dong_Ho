import React from "react";
import { useForm } from "react-hook-form";
import "./BrandCreate.css"; // Dùng chung CSS phong cách với Category

const BrandCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Thêm thương hiệu:", data);
        // TODO: Gửi dữ liệu về backend
    };

    return (
        <div className="category-form-wrapper"> {/* Dùng lại class name chung */}
            <h3 className="form-title">Thêm thương hiệu</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Tên thương hiệu */}
                <div className="form-group">
                    <label>Tên thương hiệu</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", { required: "Không được để trống tên thương hiệu" })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                {/* Mô tả */}
                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea
                        rows="3"
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        {...register("description", { required: "Vui lòng nhập mô tả" })}
                    />
                    {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
                </div>

                {/* Logo */}
                <div className="form-group">
                    <label>Logo thương hiệu</label>
                    <input
                        type="file"
                        className={`form-control ${errors.logo ? "is-invalid" : ""}`}
                        {...register("logo", { required: "Vui lòng chọn logo" })}
                    />
                    {errors.logo && <div className="invalid-feedback">{errors.logo.message}</div>}
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

                <button type="submit" className="btn-submit">Thêm thương hiệu</button>
            </form>
        </div>
    );
};

export default BrandCreate;
