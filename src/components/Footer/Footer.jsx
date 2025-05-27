import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo + Mô tả */}
          <div className="col-md-4">
            <h5 className="fw-bold text-white">WatchStore</h5>
            <p className="text-light">
              Chuyên cung cấp đồng hồ chính hãng, đẳng cấp và tinh tế dành cho mọi đối tượng.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div className="col-md-4">
            <h5 className="fw-bold text-white">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Trang chủ</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Sản phẩm</Link></li>
              <li><Link to="/category/nam" className="text-light text-decoration-none">Đồng hồ nam</Link></li>
              <li><Link to="/category/nu" className="text-light text-decoration-none">Đồng hồ nữ</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="col-md-4">
            <h5 className="fw-bold text-white">Thông tin liên hệ</h5>
            <p className="text-light mb-1">📍 123 Đồng Hồ, Quận 1, TP.HCM</p>
            <p className="text-light mb-1">📞 0909 123 456</p>
            <p className="text-light mb-1">✉️ support@watchstore.vn</p>
          </div>
        </div>

        <hr className="border-light my-4" />

        <div className="text-center text-light">
          <small>
            © {new Date().getFullYear()} <strong className="text-white">WatchStore</strong>. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
