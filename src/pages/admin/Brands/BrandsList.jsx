import { Link } from "react-router-dom";
import "./BrandsList.css";

const BrandList = () => {
    return (
        <div className="pm-container container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="pm-title">Quản lý thương hiệu</h1>
                <Link to="/admin/brands/create" className="btn btn-primary shadow-sm">
                    + Thêm thương hiệu
                </Link>
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
                        {/* Dữ liệu giả - thay bằng map() từ API */}
                        <tr>
                            <td>1</td>
                            <td className="text-start">Casio</td>
                            <td className="text-start">Thương hiệu đồng hồ nổi tiếng từ Nhật Bản</td>
                            <td>
                                <img
                                    src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                                    alt="logo"
                                    width="60"
                                    height="60"
                                    style={{ objectFit: "cover", borderRadius: "4px" }}
                                />
                            </td>
                            <td>
                                <span className="badge bg-success">Hiển thị</span>
                            </td>
                            <td>
                                <Link to="/admin/brands/1/edit" className="btn btn-sm btn-outline-warning me-2">
                                    Sửa
                                </Link>
                                <button className="btn btn-sm btn-outline-danger">Xóa</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td className="text-start">Seiko</td>
                            <td className="text-start">Phong cách cổ điển, bền bỉ, đẳng cấp</td>
                            <td>
                                <img
                                    src="https://res.cloudinary.com/dovmddijy/image/upload/v1745405130/vinoycnt3tmtzeh061tb.avif"
                                    alt="logo"
                                    width="60"
                                    height="60"
                                    style={{ objectFit: "cover", borderRadius: "4px" }}
                                />
                            </td>
                            <td>
                                <span className="badge bg-secondary">Ẩn</span>
                            </td>
                            <td>
                                <Link to="/admin/brands/2/edit" className="btn btn-sm btn-outline-warning me-2">
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

export default BrandList;
