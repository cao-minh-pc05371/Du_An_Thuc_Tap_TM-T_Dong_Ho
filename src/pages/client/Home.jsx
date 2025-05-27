import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold">Chào mừng đến với WatchStore</h1>
      <p className="lead text-muted">
        Khám phá các mẫu đồng hồ đẳng cấp, chính hãng, phù hợp với phong cách của bạn.
      </p>
      <Link to="/products" className="btn btn-primary btn-lg mt-3">
        Xem sản phẩm
      </Link>
    </div>
  );
};

export default Home;
