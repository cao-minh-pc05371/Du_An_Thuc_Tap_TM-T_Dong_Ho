import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="col-10 m-auto">
      <div className="footer_top">
        <div className="footer_top_icon">
          <img src="../../../../public/image/icon/icon_footer_1.svg" alt="" width="100px" />
          <p>Thanh toán khi nhận hàng</p>
        </div>
        <div className="footer_top_icon">
          <img src="../../../../public/image/icon/icon_footer_2.svg" alt="" width="140px" />
          <p>Giao hàng nhanh miễn phí</p>
        </div>
        <div className="footer_top_icon">
          <img src="../../../../public/image/icon/icon_footer_3_200x200.png" alt="" width="100px" />
          <p>30 ngày đổi trả miễn phí</p>
        </div>
        <div className="footer_top_icon">
          <img src="../../../../public/image/icon/icon_footer_4.svg" alt="" width="100px" />
          <p>Thương hiệu uy tín toàn cầu</p>
        </div>
      </div>

      <div className="footer_bottom m-auto">
        <div className="col-8 row m-auto">
          <div className="col-4">
            <ul className="menu_footer">
              <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Về Bloom</Link>
              </li>
              <li><Link to="#">Giới thiệu Bloom</Link></li>
              <li><Link to="#">Tuyển Dụng</Link></li>
              <li><Link to="#">Chính sách bảo mật</Link></li>
              <li><Link to="#">Điều khoản sử dụng</Link></li>
              <li><Link to="#">Liên hệ</Link></li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="menu_footer">
              <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Hỗ trợ khách hàng</Link>
              </li>
              <li><Link to="#">Gửi yêu cầu hỗ trợ</Link></li>
              <li><Link to="#">Hướng dẫn đặt hàng</Link></li>
              <li><Link to="#">Phương thức vận chuyển</Link></li>
              <li><Link to="#">Chính sách đổi trả</Link></li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="menu_footer">
              <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Nước Hoa</Link>
              </li>
              <li><Link to="#">Nước Hoa Nữ</Link></li>
              <li><Link to="#">Nước Hoa Nam</Link></li>
              <li><Link to="#">Xịt Thơm Toàn Thân</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
