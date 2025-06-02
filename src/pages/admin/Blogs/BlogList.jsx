import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: "Top 10 đồng hồ nam bán chạy 2025",
            short_description: "Khám phá những mẫu đồng hồ hot nhất năm nay...",
            user_name: "Nguyễn Văn A",
            status: 1,
            created_at: "2025-06-10",
        },
        {
            id: 2,
            title: "Phân biệt đồng hồ chính hãng & fake",
            short_description: "Bài viết cung cấp kiến thức giúp bạn nhận biết hàng giả.",
            user_name: "Trần Thị B",
            status: 0,
            created_at: "2025-06-01",
        },
    ];

    return (
        <div className="pm-container container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="pm-title">Quản lý bài viết</h1>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle text-center">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Tiêu đề</th>
                            <th>Mô tả ngắn</th>
                            <th>Người đăng</th>
                            <th>Ngày tạo</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((b, index) => (
                            <tr key={b.id}>
                                <td>{index + 1}</td>
                                <td className="text-start">{b.title}</td>
                                <td className="text-start">{b.short_description}</td>
                                <td>{b.user_name}</td>
                                <td>{b.created_at}</td>
                                <td>
                                    <span className={`badge ${b.status ? "bg-success" : "bg-secondary"}`}>
                                        {b.status ? "Hiển thị" : "Ẩn"}
                                    </span>
                                </td>
                                <td>
                                    <Link to={`/admin/blogs/${b.id}/edit`} className="btn btn-sm btn-outline-warning me-2">
                                        Sửa
                                    </Link>
                                    <button className="btn btn-sm btn-outline-danger">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogList;
