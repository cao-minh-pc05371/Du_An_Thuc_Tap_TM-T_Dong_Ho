const Dashboard = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Bảng điều khiển</h1>
      <p className="text-muted mb-4">
        Tóm tắt thông tin quản lý hệ thống WatchStore.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Sản phẩm</h5>
              <p className="card-text">Bạn có 120 sản phẩm đang hoạt động.</p>
              <a href="/admin/products" className="btn btn-primary btn-sm">Quản lý sản phẩm</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Đơn hàng</h5>
              <p className="card-text">12 đơn hàng đang chờ xử lý.</p>
              <a href="/admin/orders" className="btn btn-primary btn-sm">Quản lý đơn hàng</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Người dùng</h5>
              <p className="card-text">Có 580 người dùng đã đăng ký.</p>
              <a href="/admin/users" className="btn btn-primary btn-sm">Quản lý người dùng</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
