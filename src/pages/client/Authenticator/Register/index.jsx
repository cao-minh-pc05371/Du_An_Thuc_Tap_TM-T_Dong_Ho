import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; 
function Register() {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        mode: "onChange",
    });

    const password = watch("password", "");

    const handleRegister = async (data) => {
        
    };

    return (
        <main className="flex items-center justify-center ">
            <div className="lg:w-full w-[95%] max-w-md bg-white p-4 lg:p-9 my-[50px] rounded-xl shadow-xl mx-auto">
                <div className="text-center mb-6 !mx-auto">
                    <Link to="/">
                        <img src="../../../../../public/vite.svg" className="w-[20] !mx-auto h-20" alt="logo" />
                    </Link>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="flex items-center justify-center w-full border border-gray-400 rounded py-2 hover:bg-gray-100">
                        <img src="../../../../../public/image/icon/google.png" alt="google" className="w-4 h-4 mr-2" />
                        <span>Đăng ký bằng Google</span>
                    </button>
                </div>

                <div className="flex items-center justify-center my-4 lg:my-9">
                    <hr className="flex-grow border-t-2 border-gray-400" />
                    <span className="mx-4 text-gray-900">Đăng ký tài khoản</span>
                    <hr className="flex-grow border-t-2 border-gray-500" />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Họ và tên</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Nhập họ và tên"
                            {...register("name", { required: "Vui lòng nhập họ và tên" })}
                        />
                        {errors.name && <small className="text-red-600">{errors.name.message}</small>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Nhập email"
                            {...register("email", {
                                required: "Vui lòng nhập email",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email không hợp lệ",
                                },
                            })}
                        />
                        {errors.email && <small className="text-red-600">{errors.email.message}</small>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Nhập mật khẩu"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu",
                                minLength: {
                                    value: 6,
                                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                                },
                            })}
                        />
                        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Nhập lại mật khẩu"
                            {...register("confirmPassword", {
                                required: "Vui lòng nhập lại mật khẩu",
                                validate: value =>
                                    value === password || "Mật khẩu nhập lại không khớp",
                            })}
                        />
                        {errors.confirmPassword && <small className="text-red-600">{errors.confirmPassword.message}</small>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#043175] text-white py-2 rounded hover:bg-[#031f4d] transition-colors"
                    >
                        Đăng ký
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/dang-nhap" className="text-blue-600 hover:underline">
                        Đăng nhập
                    </Link>
                </p>
                <p className="text-center text-sm mt-1">
                    Quên mật khẩu?{" "}
                    <Link to="/dat-lai-mat-khau" className="text-blue-600 hover:underline">
                        Đặt lại mật khẩu
                    </Link>
                </p>
            </div>
        </main>
    );
}

 export default Register;
