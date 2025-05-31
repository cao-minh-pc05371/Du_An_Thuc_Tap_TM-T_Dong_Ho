import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductManagement = () => {
  return (
    <div className="pm-container container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="pm-title">Quản lý sản phẩm</h1>
        <Link to="/admin/products/create" className="btn btn-primary shadow-sm">
          + Thêm sản phẩm
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Thương hiệu</th>
              <th>Tồn kho</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="text-start">Đồng hồ Casio MTP-V002</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                  alt="Product"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td>1.500.000₫</td>
              <td>Casio</td>
              <td>24</td>
              <td>
                <Link to="/admin/products/1" className="btn btn-sm btn-outline-info me-2">
                  Chi tiết
                </Link>
                <Link to="/admin/products/1/edit" className="btn btn-sm btn-outline-warning me-2">
                  Sửa
                </Link>
                <button className="btn btn-sm btn-outline-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="text-start">Đồng hồ Seiko SNK809</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                  alt="Product"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td>2.990.000₫</td>
              <td>Seiko</td>
              <td>10</td>
              <td>
                <Link to="/admin/products/2" className="btn btn-sm btn-outline-info me-2">
                  Chi tiết
                </Link>
                <Link to="/admin/products/2/edit" className="btn btn-sm btn-outline-warning me-2">
                  Sửa
                </Link>
                <button className="btn btn-sm btn-outline-danger">Xóa</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
