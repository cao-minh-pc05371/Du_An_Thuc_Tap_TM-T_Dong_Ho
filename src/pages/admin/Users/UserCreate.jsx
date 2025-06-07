import React from "react";
import { useForm } from "react-hook-form";
import "./UserCreate.css"; // Optional: để bạn có thể style riêng

const UserCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Thêm người dùng:", data);
    };

    return (
        <div className="category-form-wrapper">
            <h3 className="form-title">Thêm người dùng</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Tên người dùng */}
                <div className="form-group">
                    <label>Họ tên</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", { required: "Vui lòng nhập họ tên" })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        {...register("email", {
                            required: "Email không được để trống",
                            pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
                        })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                {/* Mật khẩu */}
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        {...register("password", {
                            required: "Vui lòng nhập mật khẩu",
                            minLength: { value: 6, message: "Ít nhất 6 ký tự" },
                        })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                {/* Số điện thoại */}
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        {...register("phone", {
                            required: "Vui lòng nhập số điện thoại",
                            pattern: { value: /^[0-9]{10,11}$/, message: "Số điện thoại không hợp lệ" },
                        })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>

                {/* Vai trò */}
                <div className="form-group">
                    <label>Vai trò</label>
                    <select
                        className={`form-select ${errors.role ? "is-invalid" : ""}`}
                        {...register("role", { required: "Vui lòng chọn vai trò" })}
                    >
                        <option value="">-- Chọn vai trò --</option>
                        <option value="super_admin">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Khách hàng</option>
                    </select>
                    {errors.role && <div className="invalid-feedback">{errors.role.message}</div>}
                </div>

                <button type="submit" className="btn-submit">Thêm người dùng</button>
            </form>
        </div>
    );
};

export default UserCreate;
