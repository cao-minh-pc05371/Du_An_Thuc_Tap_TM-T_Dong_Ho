import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const AdminLayout = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="admin-content">
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;