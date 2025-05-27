import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          WatchStore
        </Link>

        {/* Toggle Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Menu trái */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Sản phẩm</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Thể loại
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li><Link className="dropdown-item" to="/category/nam">Đồng hồ nam</Link></li>
                <li><Link className="dropdown-item" to="/category/nu">Đồng hồ nữ</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/category/phu-kien">Phụ kiện</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Liên hệ</Link>
            </li>
          </ul>

          {/* Tìm kiếm + biểu tượng */}
          <div className="d-flex align-items-center gap-3">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">Tìm</button>
            </form>
            <Link to="/cart" className="btn btn-outline-secondary position-relative">
              🛒
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </Link>
            <Link to="/login" className="btn btn-outline-secondary">👤</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
