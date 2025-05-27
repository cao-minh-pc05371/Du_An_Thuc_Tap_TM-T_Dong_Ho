import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState({
    product: false,
    user: false,
    brand: false,
    category: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div
      className="d-flex flex-column bg-white border-end vh-100 px-3 py-4"
      style={{ width: "260px" }}
    >
      <Link to="/" className="d-flex align-items-center mb-4 text-decoration-none">
        <span className="fs-4 fw-bold text-primary">WatchStore Admin</span>
      </Link>

      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <Link to="/admin" className={`nav-link ${location.pathname === "/admin" ? "active" : "text-dark"}`}>
            Dashboard
          </Link>
        </li>

        {/* Quản lý sản phẩm */}
        <li>
          <button
            onClick={() => toggleMenu("product")}
            className="nav-link btn btn-link text-start text-dark w-100 px-0"
          >
            Quản lý sản phẩm ▾
          </button>
          {openMenu.product && (
            <ul className="list-unstyled ps-3">
              <li>
                <Link to="/admin/products" className={`nav-link text-dark small ${isActive("/admin/products") ? "fw-bold" : ""}`}>
                  Danh sách sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/admin/products/create" className={`nav-link text-dark small ${isActive("/admin/products/create") ? "fw-bold" : ""}`}>
                  Thêm sản phẩm
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Quản lý thương hiệu */}
        <li>
          <button
            onClick={() => toggleMenu("brand")}
            className="nav-link btn btn-link text-start text-dark w-100 px-0"
          >
            Quản lý thương hiệu ▾
          </button>
          {openMenu.brand && (
            <ul className="list-unstyled ps-3">
              <li>
                <Link to="/admin/brands" className={`nav-link text-dark small ${isActive("/admin/brands") ? "fw-bold" : ""}`}>
                  Danh sách thương hiệu
                </Link>
              </li>
              <li>
                <Link to="/admin/brands/create" className={`nav-link text-dark small ${isActive("/admin/brands/create") ? "fw-bold" : ""}`}>
                  Thêm thương hiệu
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Quản lý danh mục */}
        <li>
          <button
            onClick={() => toggleMenu("category")}
            className="nav-link btn btn-link text-start text-dark w-100 px-0"
          >
            Quản lý danh mục ▾
          </button>
          {openMenu.category && (
            <ul className="list-unstyled ps-3">
              <li>
                <Link to="/admin/categories" className={`nav-link text-dark small ${isActive("/admin/categories") ? "fw-bold" : ""}`}>
                  Danh sách danh mục
                </Link>
              </li>
              <li>
                <Link to="/admin/categories/create" className={`nav-link text-dark small ${isActive("/admin/categories/create") ? "fw-bold" : ""}`}>
                  Thêm danh mục
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Quản lý người dùng */}
        <li>
          <button
            onClick={() => toggleMenu("user")}
            className="nav-link btn btn-link text-start text-dark w-100 px-0"
          >
            Quản lý người dùng ▾
          </button>
          {openMenu.user && (
            <ul className="list-unstyled ps-3">
              <li>
                <Link to="/admin/users" className={`nav-link text-dark small ${isActive("/admin/users") ? "fw-bold" : ""}`}>
                  Danh sách người dùng
                </Link>
              </li>
              <li>
                <Link to="/admin/users/create" className={`nav-link text-dark small ${isActive("/admin/users/create") ? "fw-bold" : ""}`}>
                  Thêm người dùng
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Các mục khác */}
        <li>
          <Link to="/admin/orders" className={`nav-link ${isActive("/admin/orders") ? "active" : "text-dark"}`}>
            Quản lý đơn hàng
          </Link>
        </li>

        <li>
          <Link to="/admin/reviews" className={`nav-link ${isActive("/admin/reviews") ? "active" : "text-dark"}`}>
            Quản lý đánh giá
          </Link>
        </li>

        <li>
          <Link to="/admin/blogs" className={`nav-link ${isActive("/admin/blogs") ? "active" : "text-dark"}`}>
            Quản lý blog
          </Link>
        </li>

        <li>
          <Link to="/admin/settings" className={`nav-link ${isActive("/admin/settings") ? "active" : "text-dark"}`}>
            Cài đặt hệ thống
          </Link>
        </li>
      </ul>

      <hr />

      <div>
        <Link to="/logout" className="text-danger text-decoration-none">
          Đăng xuất
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
