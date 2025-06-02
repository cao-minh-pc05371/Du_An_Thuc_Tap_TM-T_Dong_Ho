import { useState } from "react";
import { FaUserShield, FaUserTie, FaUser } from "react-icons/fa";
import "./UserList.css"; // Optional: file CSS tuỳ chỉnh

const UserList = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");

  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0909123456", role: "customer", status: 1 },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", phone: "0911222333", role: "admin", status: 0 },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com", phone: "0933445566", role: "staff", status: 1 },
    { id: 4, name: "Phạm D", email: "d@gmail.com", phone: "0912345678", role: "customer", status: 1 },
  ];

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search);
    const matchTab = tab === "all" || u.role === tab;
    return matchSearch && matchTab;
  });

  const getRoleLabel = (role) => {
    if (role === "admin") return "Quản trị viên";
    if (role === "staff") return "Nhân viên";
    return "Khách hàng";
  };

  const getRoleIcon = (role) => {
    if (role === "admin") return <FaUserShield className="text-danger me-1" />;
    if (role === "staff") return <FaUserTie className="text-warning me-1" />;
    return <FaUser className="text-primary me-1" />;
  };

  return (
    <div className="pm-container container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="pm-title">Quản lý người dùng</h1>
      </div>

      {/* Tabs */}
      <div className="d-flex gap-3 mb-3">
        <button className={`btn ${tab === "all" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setTab("all")}>Tất cả</button>
        <button className={`btn ${tab === "admin" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setTab("admin")}>Quản trị viên</button>
        <button className={`btn ${tab === "staff" ? "btn-warning" : "btn-outline-warning"}`} onClick={() => setTab("staff")}>Nhân viên</button>
        <button className={`btn ${tab === "customer" ? "btn-success" : "btn-outline-success"}`} onClick={() => setTab("customer")}>Khách hàng</button>
      </div>

      {/* Tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Tìm theo tên, email, SĐT..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Bảng người dùng */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>SĐT</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td>
                  <td className="text-start">{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{getRoleIcon(u.role)}{getRoleLabel(u.role)}</td>
                  <td>
                    <span className={`badge ${u.status ? "bg-success" : "bg-secondary"}`}>
                      {u.status ? "Hoạt động" : "Vô hiệu"}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning me-2">Sửa</button>
                    <button className="btn btn-sm btn-outline-danger">Xoá</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-muted">Không tìm thấy người dùng phù hợp.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
