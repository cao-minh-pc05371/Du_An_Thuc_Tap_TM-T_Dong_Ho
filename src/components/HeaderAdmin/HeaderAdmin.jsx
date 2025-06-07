import React from "react";
import { Link } from "react-router-dom";
import "./HeaderAdmin.css";

const HeaderAdmin = () => {
  return (
    <header className="admin-header px-4 py-2 d-flex justify-content-between align-items-center border-bottom bg-white shadow-sm">
      <h5 className="mb-0 fw-semibold">Admin Dashboard</h5>
      <div>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2">Trang người dùng</Link>
        <Link to="/logout" className="btn btn-sm btn-danger">Đăng xuất</Link>
      </div>
    </header>
  );
};

export default HeaderAdmin;
