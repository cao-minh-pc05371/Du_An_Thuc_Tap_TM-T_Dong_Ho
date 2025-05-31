import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // Assuming you have a CSS file for styling

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="d-flex flex-column bg-white border-end vh-100 p-3" style={{ width: "260px" }}>
      <h4 className="mb-4">
        <span className="badge bg-dark me-2"> Quản lý hệ thống</span>
      </h4>

      <div className="accordion" id="sidebarAccordion">
        {/* Quản lý sản phẩm */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseProduct"
            >
              Quản lý sản phẩm
            </button>
          </h2>
          <div id="collapseProduct" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
            <div className="accordion-body py-1">
              <ul className="nav flex-column ms-3 small">
                <li><Link to="/admin/products" className={`nav-link ${isActive("/admin/products") ? "fw-bold text-primary" : ""}`}>Danh sách sản phẩm</Link></li>
                <li><Link to="/admin/products/create" className={`nav-link ${isActive("/admin/products/create") ? "fw-bold text-primary" : ""}`}>Thêm sản phẩm</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quản lý thương hiệu */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBrand"
            >
              Quản lý thương hiệu
            </button>
          </h2>
          <div id="collapseBrand" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
            <div className="accordion-body py-1">
              <ul className="nav flex-column ms-3 small">
                <li><Link to="/admin/brands" className={`nav-link ${isActive("/admin/brands") ? "fw-bold text-primary" : ""}`}>Danh sách thương hiệu</Link></li>
                <li><Link to="/admin/brands/create" className={`nav-link ${isActive("/admin/brands/create") ? "fw-bold text-primary" : ""}`}>Thêm thương hiệu</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quản lý danh mục */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategory"
            >
              Quản lý danh mục
            </button>
          </h2>
          <div id="collapseCategory" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
            <div className="accordion-body py-1">
              <ul className="nav flex-column ms-3 small">
                <li><Link to="/admin/categories" className={`nav-link ${isActive("/admin/categories") ? "fw-bold text-primary" : ""}`}>Danh sách danh mục</Link></li>
                <li><Link to="/admin/categories/create" className={`nav-link ${isActive("/admin/categories/create") ? "fw-bold text-primary" : ""}`}>Thêm danh mục</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quản lý người dùng */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUser"
            >
              Quản lý người dùng
            </button>
          </h2>
          <div id="collapseUser" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
            <div className="accordion-body py-1">
              <ul className="nav flex-column ms-3 small">
                <li><Link to="/admin/users" className={`nav-link ${isActive("/admin/users") ? "fw-bold text-primary" : ""}`}>Danh sách người dùng</Link></li>
                <li><Link to="/admin/users/create" className={`nav-link ${isActive("/admin/users/create") ? "fw-bold text-primary" : ""}`}>Thêm người dùng</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Đơn hàng, đánh giá, blog, cài đặt */}
        <ul className="nav flex-column mt-3 small">
          <li>
            <Link
              to="/admin"
              className={`nav-link ${isActive("/admin") ? "fw-bold text-primary" : "text-dark"}`}
            >
              Thống kê
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className={`nav-link ${isActive("/admin/orders") ? "fw-bold text-primary" : "text-dark"}`}
            >
              Quản lý đơn hàng
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reviews"
              className={`nav-link ${isActive("/admin/reviews") ? "fw-bold text-primary" : "text-dark"}`}
            >
              Quản lý đánh giá
            </Link>
          </li>
          <li>
            <Link
              to="/admin/blogs"
              className={`nav-link ${isActive("/admin/blogs") ? "fw-bold text-primary" : "text-dark"}`}
            >
              Quản lý blog
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className={`nav-link ${isActive("/admin/settings") ? "fw-bold text-primary" : "text-dark"}`}
            >
              Cài đặt hệ thống
            </Link>
          </li>
        </ul>

      </div>

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
