import React, { useState,useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slidesData = {
  slider1: [
    "../../../../public/image/main/01pyixtjzfd0eibvn3d99o3832.jpg",
    "../../../../public/image/main/banner-2.jpeg",
    "../../../../public/image/main/OIP (1).jpg",
    "../../../../public/image/main/frasco-de-spray-de-perfume-no-banner-do-ceu-nublado_33099-2220.avif",
  ],
  slider2: [
    "../../../../public/image/category/1bdca5d0dd3ce9c02ee514d9039b07bc.jpg",
    "../../../../public/image/category/2d1728b12060798c1236ddc0da830393.jpg",
    "../../../../public/image/category/d47b82ec6b0ad4b045d7de38bf0e9c9b.jpg",
    "../../../../public/image/category/0077c108e69ea8461cd43f9c40005ceb.jpg",
    "../../../../public/image/category/34547b7a64a3b8f95b2bd7cdf9f234e4.jpg",
  ],
};

function Home() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);


  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % slidesData.slider1.length);
    }, 2000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev + 1) % slidesData.slider2.length);
    }, 2000);
    return () => clearInterval(interval2);
  }, []);

  const nextSlide1 = () => {
    setCurrentIndex1((prev) => (prev + 1) % slidesData.slider1.length);
  };
  const prevSlide1 = () => {
    setCurrentIndex1((prev) => (prev - 1 + slidesData.slider1.length) % slidesData.slider1.length);
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prev) => (prev + 1) % slidesData.slider2.length);
  };
  const prevSlide2 = () => {
    setCurrentIndex2((prev) => (prev - 1 + slidesData.slider2.length) % slidesData.slider2.length);
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const onMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };
  return (
    <>
      <section className="section_one d-flex">
        <div className="d-flex col-10 m-auto section_one_slide">
          <div className="slide col-7">
            <div className="slide_banner" id="slider1">
              <img
                className="slide-image h-full p-1"
                src={slidesData.slider1[currentIndex1]}
                alt=""
                width="100%"
                height="100%"
              />
        
            </div>  
                {/* <div className="btn_slide d-flex p-2">
                <button onClick={prevSlide1} className="material-symbols-outlined">
                  <ArrowBackIosIcon />
                </button>
                <button onClick={nextSlide1} className="material-symbols-outlined">
                  <ArrowForwardIosIcon />
                </button> 
              </div>*/}
          </div>

          <div className="box_img col-5">
            <img
              className="p-1"
              src="../../../../public/image/main/1721200384nowfree-3-846x250.jpg"
              alt=""
              width="100%"
            />
            <img
              className="p-1"
              src="../../../../public/image/main/z5959425286316_684c8469eb26dcb2112174d898c1cc71.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>

      <main className="col-10 m-auto">
        <div className="flash">
          <div className="box_title d-flex align-items-center justify-content-between p-3">
            <h3>Flash Deals</h3>
            <Link to="">Xem tất cả</Link>
          </div>
          <div
            ref={sliderRef}
            className="flash_box d-flex"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            style={{ overflowX: "auto", cursor: isDown ? "grabbing" : "grab" }}
          >
            {[...Array(10)].map((_, index) => (
              <Link key={index} className="card col-2" to="#">
                <div className="box_image">
                  <img
                    className="image"
                    src="../../../../public/image/products/facebook-dynamic-nuoc-hoa-nu-narciso-rodriguez-for-her-edp-30ml-1711530320_img_385x385_622873_fit_center.jpg"
                    alt=""
                    height="100%"
                  />
                  <img
                    className="image_hover"
                    src="../../../../public/image/products/narciso-rodriguez-x-hasakigiay-chung-nhan-dai-ly-chinh-hang1714041486_img_385x385_622873_fit_center.jpg"
                    alt=""
                  />
                </div>

                <div className="title">
                  <div className="price">2.566.00 đ</div>
                  <h4 className="name_product">Narciso Rodriguez</h4>
                  <p className="content">Nước Hoa Nữ Narciso Rodriguez For Her EDP 30ml</p>
                </div>
                <div className="sale">-12%</div>
              </Link>
            ))}
          </div>

          <div className="box_btn">
            <button onClick={scrollLeft} className="btn-left">
              <ArrowBackIosIcon />
            </button>
            <button onClick={scrollRight} className="btn-right">
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>

        <section className="row-cols-3 d-flex">
          <div className="col-4 col-md-1 col-lg-4 rounded-3 p-2 mt-3 img-box">
            <img
              className="rounded-3"
              height="100%"
              src="../../../../public/image/main/fragrance-photography_899451-440.avif"
              alt=""
              width="100%"
            />
          </div>
          <div className="col-4 col-md-1 col-lg-4 rounded-3 p-2 mt-3 img-box">
            <img
              className="rounded-3"
              height="100%"
              src="../../../../public/image/main/shower-gel-bottle-template-for-ads-or-magazine-background-3d-realistic-iillustration-free-vector.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div className="col-4 col-md-1 col-lg-4 rounded-3 p-2 mt-3 img-box">
            <img
              className="rounded-3"
              height="100%"
              src="../../../../public/image/main/3d-realistic-perfume-bottle-concept_313044-65.jpg"
              alt=""
              width="100%"
            />
          </div>
        </section>

        <section className="brand">
          <div className="box_title d-flex align-items-center justify-content-between">
            <h3>Thương hiệu</h3>
            <Link to="">Xem tất cả</Link>
          </div>
          <div className="d-flex box_category justify-content-center align-items-center">
            <div className="col-4 box_category_left">
              <div className="slide_banner" id="slider2">
                <img
                  className="slide-image p-1"
                  src={slidesData.slider2[currentIndex2]}
                  alt=""
                  width="100%"
                  height="100%"
                />
                <div className="btn_slide d-flex p-2 justify-content-between">
                  <button onClick={prevSlide2} className="material-symbols-outlined">
                    <ArrowBackIosIcon />
                  </button>
                  <button onClick={nextSlide2} className="material-symbols-outlined">
                    <ArrowForwardIosIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-8 box_category_right p-2">
              <ul className="flash_box slider_box_right">
                {brands.map((brand, index) => (
                  <li key={index} className="col-3 m-1">
                    <div className="card_category">
                      <Link to="#" className="">
                        <img src={brand.image1} alt="" width="100%" height="100%" />
                        <div className="name_brand">
                          <h2>{brand.name1}</h2>
                        </div>
                      </Link>
                    </div>
                    <div className="card_category">
                      <Link to="#" className="">
                        <img src={brand.image2} alt="" width="100%" height="100%" />
                        <div className="name_brand">
                          <h2>{brand.name2}</h2>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="box_btn_category">
                <button className="btn-left">
                  <span className="material-symbols-outlined"><ArrowBackIosIcon /></span>
                </button>
                <button className="btn-right">
                  <span className="material-symbols-outlined"><ArrowForwardIosIcon /></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="all_product">
          <div className="box_title d-flex align-items-center justify-content-between p-3">
            <h3>Sản phẩm</h3>
            <Link to="">Xem tất cả</Link>
          </div>

          <div className="row box_card col-12">
            {products.map((product, index) => (
              <Link key={index} className="card" to="#">
                <div className="box_image">
                  <img
                    className="image"
                    src="../../../../public/image/products/facebook-dynamic-nuoc-hoa-nu-narciso-rodriguez-for-her-edp-30ml-1711530320_img_385x385_622873_fit_center.jpg"
                    alt=""
                    height="100%"
                  />
                  <img
                    className="image_hover"
                    src="../../../../public/image/products/narciso-rodriguez-x-hasakigiay-chung-nhan-dai-ly-chinh-hang1714041486_img_385x385_622873_fit_center.jpg"
                    alt=""
                  />
                </div>

                <div className="title">
                  <div className="price">
                    <span>2.566.00 đ</span>
                    <span className="price_sales"> 2.257.080</span>
                  </div>
                  <h4 className="name_product">Narciso Rodriguez</h4>
                  <p className="content">Nước Hoa Nữ Narciso Rodriguez For Her EDP 30ml</p>
                </div>
                {product.onSale && <div className="sale">-12%</div>}
              </Link>
            ))}
          </div>

          <div className="title_all_product">
            <Link to="">Xem thêm</Link>
          </div>
        </section>
      </main>
    </>
  );
};

// Mock data - you should replace with real data from your API or state
const brands = [
  {
    image1: "../../../../public/image/category/3117f65e6e8aa3eff770862933bf49b7.jpg",
    name1: "roja",
    image2: "../../../../public/image/category/yves-saint-laurent-y-eau-de-parfum-1_42ad04f05afa4c8a9fe801822f2b87e5_master.jpg",
    name2: "KENPERFUME"
  },
  // Add more brand data as needed
];

const products = [
  { onSale: true },
  { onSale: true },
  { onSale: false },
  // Add more product data as needed
];

export default Home;