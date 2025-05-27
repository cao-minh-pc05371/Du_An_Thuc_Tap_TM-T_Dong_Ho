import { Link } from "react-router-dom";

const ProductManagement = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Quản lý sản phẩm</h1>
        <Link to="/admin/products/create" className="btn btn-success">
          + Thêm sản phẩm
        </Link>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Thương hiệu</th>
            <th scope="col">Tồn kho</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu giả - sẽ thay bằng map() từ API */}
          <tr>
            <th scope="row">1</th>
            <td>Đồng hồ Casio MTP-V002</td>
            <td>1.500.000₫</td>
            <td>Casio</td>
            <td>24</td>
            <td>
              <Link to="/admin/products/1/edit" className="btn btn-sm btn-warning me-2">Sửa</Link>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Đồng hồ Seiko SNK809</td>
            <td>2.990.000₫</td>
            <td>Seiko</td>
            <td>10</td>
            <td>
              <Link to="/admin/products/2/edit" className="btn btn-sm btn-warning me-2">Sửa</Link>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
