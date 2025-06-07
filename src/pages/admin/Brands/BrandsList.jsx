import { useState } from "react";
import { Link } from "react-router-dom";
import "./BrandsList.css";

const BrandList = () => {
  const [search, setSearch] = useState("");

  const brands = [
    {
      id: 1,
      name: "Casio",
      description: "Thương hiệu đồng hồ nổi tiếng từ Nhật Bản",
      logo: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      status: 1,
    },
    {
      id: 2,
      name: "Seiko",
      description: "Phong cách cổ điển, bền bỉ, đẳng cấp",
      logo: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      status: 0,
    },
  ];

  const filteredBrands = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pm-container container py-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="pm-title">Quản lý thương hiệu</h1>
      </div>

      {/* Form tìm kiếm */}
      <div className="search-card mb-3">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Tìm theo tên hoặc mô tả</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khoá..."
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
              <th>Tên thương hiệu</th>
              <th>Mô tả</th>
              <th>Logo</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands.length > 0 ? (
              filteredBrands.map((b, i) => (
                <tr key={b.id}>
                  <td>{i + 1}</td>
                  <td className="text-start">{b.name}</td>
                  <td className="text-start">{b.description}</td>
                  <td>
                    <img
                      src={b.logo}
                      alt="logo"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "4px" }}
                    />
                  </td>
                  <td>
                    <span className={`badge ${b.status ? "bg-success" : "bg-secondary"}`}>
                      {b.status ? "Hiển thị" : "Ẩn"}
                    </span>
                  </td>
                  <td>
                    <Link to={`/admin/brands/${b.id}/edit`} className="btn btn-sm btn-outline-warning me-2">
                      Sửa
                    </Link>
                    <button className="btn btn-sm btn-outline-danger">Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-muted">Không tìm thấy thương hiệu phù hợp.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandList;
