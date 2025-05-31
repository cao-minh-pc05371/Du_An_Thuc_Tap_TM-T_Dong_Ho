const UserManagement = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Quản lý người dùng</h1>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên người dùng</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Vai trò</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu mẫu */}
          <tr>
            <th scope="row">1</th>
            <td>Nguyễn Văn A</td>
            <td>nguyenvana@example.com</td>
            <td>0909123456</td>
            <td>Khách hàng</td>
            <td><span className="badge bg-success">Hoạt động</span></td>
            <td>
              <button className="btn btn-sm btn-warning me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Trần Thị B</td>
            <td>tranthib@example.com</td>
            <td>0911222333</td>
            <td>Admin</td>
            <td><span className="badge bg-secondary">Vô hiệu</span></td>
            <td>
              <button className="btn btn-sm btn-warning me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
