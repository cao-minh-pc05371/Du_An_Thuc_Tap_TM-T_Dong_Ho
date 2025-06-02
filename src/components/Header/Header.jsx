import { Link } from "react-router-dom";
import { FaShoppingCart,FaUser  } from 'react-icons/fa';


const Header = () => {
  return (
    <header class="banner">
      <div class="box_top_bottom">
        <div class="banner_top  border-1 d-flex justify-content-center">
        </div>

        <div class="banner_bottom ">
          <div class="menu d-flex  align-items-center col-10 m-auto">
            <div class="d-flex  align-items-center box col-6">
              <div class="logo">
                <img src="../../../../public/image/icon/Logo.png" width="100%" alt="logo" />
              </div>

              <div class="search">
                <div class="InputContainer">
                  <input placeholder="Search" id="input" class="input" name="text" type="text" />
                  <label class="labelforsearch" for="input">
                    <svg class="searchIcon" viewBox="0 0 512 512">
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                      </path>
                    </svg>
                  </label>
                </div>

              </div>
            </div>

            <div class="d-flex  align-items-center box col-6 justify-content-end ">
              <div class="account pt-2">
                <a href="/View/Client/Page/login.html" class="d-flex flex-row gap-2 account_title ">
                  <p>Tài khoản</p><FaUser size={20} />
                </a>
                <div class="account_dropdown d-flex flex-col gap-4">
                  <a class="Login" href="#">Đăng Nhập </a>
                  <a href="#" class="Register"> Đăng Ký </a>
                </div>
              </div>
              <a class="cart_shopping  " title="Giỏ hàng">
                <div style={{ position: 'relative' }}>
                  <FaShoppingCart size={24} />
                  <span style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-10px',
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px'
                  }}>3</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div class=" banner_menu_main d-flex  align-items-center">
        <ul class=" d-flex col-10  ">
          <li><a href="/View/Client/index.html">Trang chủ</a></li>
          <li><a href="/View/Client/Page/product.html">Sản phẩm</a></li>
          <li><a href="/View/Client/Page/about.html">Giới thiệu </a></li>
          <li><a href="">Liên hệ </a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
