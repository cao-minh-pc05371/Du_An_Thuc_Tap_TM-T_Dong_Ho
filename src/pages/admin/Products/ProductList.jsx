import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductManagement = () => {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const products = [
    {
      id: 1,
      name: "Đồng hồ Casio MTP-V002",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      price: 1500000,
      brand: "Casio",
      stock: 24,
    },
    {
      id: 2,
      name: "Đồng hồ Seiko SNK809",
      image: "https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif",
      price: 2990000,
      brand: "Seiko",
      stock: 10,
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchMin = !minPrice || p.price >= parseInt(minPrice);
    const matchMax = !maxPrice || p.price <= parseInt(maxPrice);
    return matchSearch && matchMin && matchMax;
  });

  return (
    <div className="pm-container container py-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="pm-title">Quản lý sản phẩm</h1>
      </div>

      {/* Form tìm kiếm */}
      <div className="card p-3 mb-3">
        <div className="row g-2 align-items-end">
          <div className="col-md-5">
            <label className="form-label">Tìm theo tên hoặc thương hiệu</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khoá..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Giá từ</label>
            <input
              type="number"
              className="form-control"
              placeholder="Tối thiểu"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Đến</label>
            <input
              type="number"
              className="form-control"
              placeholder="Tối đa"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Bảng danh sách */}
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td className="text-start">{p.name}</td>
                  <td>
                    <img
                      src={p.image}
                      alt={p.name}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "4px" }}
                    />
                  </td>
                  <td>{p.price.toLocaleString()}₫</td>
                  <td>{p.brand}</td>
                  <td>{p.stock}</td>
                  <td>
                    <Link to={`/admin/products/${p.id}`} className="btn btn-sm btn-outline-info me-2">
                      Chi tiết
                    </Link>
                    <Link to={`/admin/products/${p.id}/edit`} className="btn btn-sm btn-outline-warning me-2">
                      Sửa
                    </Link>
                    <button className="btn btn-sm btn-outline-danger">Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-muted">Không tìm thấy sản phẩm phù hợp.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
