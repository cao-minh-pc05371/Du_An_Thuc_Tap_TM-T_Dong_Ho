import { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";

const CategoryList = () => {
  const [search, setSearch] = useState("");

  const categories = [
    {
      id: 1,
      name: "Đồng hồ nam",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      status: 1,
    },
    {
      id: 2,
      name: "Đồng hồ nữ",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      status: 0,
    },
    {
      id: 3,
      name: "Đồng hồ đôi",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405100/wk7rjfayv9pxoaqvwoqq.webp",
      status: 1,
    },
    {
      id: 4,
      name: "Đồng hồ trẻ em",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
      status: 1,
    },
    {
      id: 5,
      name: "Đồng hồ thông minh",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
      status: 1,
    },
    {
      id: 6,
      name: "Đồng hồ thể thao",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
      status: 1,
    },
    {
      id: 7,
      name: "Đồng hồ thời trang",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
      status: 1,
    },
    {
      id: 8,
      name: "Phụ kiện đồng hồ",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405054/oosx3vswxwweqykiffjs.webp",
      status: 1,
    }
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pm-container container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="pm-title">Quản lý danh mục</h1>
      </div>

      {/* Form tìm kiếm */}
      <div className="search-card mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Tìm theo tên danh mục</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên danh mục..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
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
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <tr key={cat.id}>
                  <td>{index + 1}</td>
                  <td className="text-start">{cat.name}</td>
                  <td>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      width="50"
                      height="50"
                      style={{ objectFit: "cover", borderRadius: "4px" }}
                    />
                  </td>
                  <td>
                    <span className={`badge ${cat.status ? "bg-success" : "bg-secondary"}`}>
                      {cat.status ? "Hiển thị" : "Ẩn"}
                    </span>
                  </td>
                  <td>
                    <Link to={`/admin/categories/${cat.id}/edit`} className="btn btn-sm btn-outline-warning me-2">
                      Sửa
                    </Link>
                    <button className="btn btn-sm btn-outline-danger">Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-muted">Không tìm thấy danh mục phù hợp.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
