import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-light admin-content" style={{ overflowX: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
