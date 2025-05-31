import { Link } from "react-router-dom";
import "./CategoryList.css"; // Tạo file này nếu cần CSS riêng

const CategoryList = () => {
  return (
    <div className="pm-container container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="pm-title">Quản lý danh mục</h1>
        <Link to="/admin/categories/create" className="btn btn-primary shadow-sm">
          + Thêm danh mục
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Tên danh mục</th>
              <th>Ảnh</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* Dữ liệu giả - sẽ thay bằng map() từ API */}
            <tr>
              <td>1</td>
              <td className="text-start">Đồng hồ nam</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                  alt="Category"
                  width="50"
                  height="50"
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td>
                <span className="badge bg-success">Hiển thị</span>
              </td>
              <td>
                <Link to="/admin/categories/1/edit" className="btn btn-sm btn-outline-warning me-2">
                  Sửa
                </Link>
                <button className="btn btn-sm btn-outline-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="text-start">Đồng hồ nữ</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                  alt="Category"
                  width="50"
                  height="50"
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td>
                <span className="badge bg-secondary">Ẩn</span>
              </td>
              <td>
                <Link to="/admin/categories/2/edit" className="btn btn-sm btn-outline-warning me-2">
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

export default CategoryList;
