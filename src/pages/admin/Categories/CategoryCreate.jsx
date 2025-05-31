import React from "react";
import { useForm } from "react-hook-form";
import "./CategoryCreate.css"; // Import file CSS mới

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dữ liệu gửi đi:", data);
  };

  return (
    <div className="category-form-wrapper">
      <h3 className="form-title">Thêm danh mục sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Tên danh mục */}
        <div className="form-group">
          <label>Tên danh mục</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "Không được để trống tên danh mục" })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        {/* Trạng thái */}
        <div className="form-group">
          <label>Trạng thái</label>
          <select
            className={`form-select ${errors.status ? "is-invalid" : ""}`}
            {...register("status", { required: "Vui lòng chọn trạng thái" })}
          >
            <option value="">-- Chọn trạng thái --</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
          </select>
          {errors.status && <div className="invalid-feedback">{errors.status.message}</div>}
        </div>

        {/* Ảnh */}
        <div className="form-group">
          <label>Ảnh danh mục</label>
          <input
            type="file"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            {...register("image", { required: "Vui lòng chọn ảnh" })}
          />
          {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
        </div>

        <button type="submit" className="btn-submit">Thêm danh mục</button>
      </form>
    </div>
  );
};

export default CategoryCreate;
