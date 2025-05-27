import { Link } from "react-router-dom";
import "./Sidebar.css"; // nếu cần style riêng

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar vh-100" style={{ width: '300px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Admin Panel</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin" className="nav-link active" aria-current="page">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="nav-link text-dark">
            Quản lý sản phẩm
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="nav-link text-dark">
            Đơn hàng
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="nav-link text-dark">
            Người dùng
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="nav-link text-dark">
            Cài đặt
          </Link>
        </li>
      </ul>
      <hr />
      <div>
        <Link to="/logout" className="d-flex align-items-center text-danger text-decoration-none">
          Đăng xuất
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
