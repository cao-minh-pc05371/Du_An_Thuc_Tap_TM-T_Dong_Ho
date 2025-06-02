import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);

    const handleLogin = async (data) => {
     };

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="lg:w-full w-[95%] lg:max-w-md bg-white lg:p-9 p-3 my-[50px] rounded-xl shadow-xl mx-auto">
                <div className="text-center mb-6 mx-auto">
                    <Link to="/">
                        <img src="../../../../../public/vite.svg" className="w-[20] h-20 mx-auto" alt="logo" />
                    </Link>
                </div>

                <div className="flex lg:gap-4 lg:mb-6">
                    <button className="flex items-center justify-center w-full border border-gray-400 rounded py-2 hover:bg-gray-100">
                        <img src="../../../../../public/image/icon/google.png" alt="google" className="w-4 h-4 mr-2" />
                        <span>Đăng nhập bằng Google</span>
                    </button>
                </div>

                <div className="flex items-center justify-center my-4 lg:my-9">
                    <hr className="flex-grow border-t-2 border-gray-400" />
                    <span className="mx-4 text-gray-900">Hoặc đăng nhập bằng email</span>
                    <hr className="flex-grow border-t-2 border-gray-500" />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
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
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="peer w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Nhập mật khẩu"
                                {...register("password", {
                                    required: "Vui lòng nhập mật khẩu",
                                })}
                            />

                            <div
                                className={`w-5 absolute right-3 cursor-pointer opacity-70 ${showPassword ? 'hidden' : ''}`}
                                onClick={togglePassword}
                            >
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"
                                    ></path>
                                </svg>
                            </div>

                            <div
                                className={`w-5 absolute right-3 cursor-pointer opacity-70 ${showPassword ? '' : 'hidden'}`}
                                onClick={togglePassword}
                            >
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"
                                    ></path>
                                    <path
                                        d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#043175] text-white py-2 rounded hover:bg-[#031f4d] transition-colors"
                    >
                        Đăng nhập
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/dang-ky" className="text-blue-600 hover:underline">
                        Đăng ký
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


export default Login;
