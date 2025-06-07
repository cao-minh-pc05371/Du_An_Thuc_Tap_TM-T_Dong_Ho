import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin/FooterAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1 d-flex flex-column">
        <HeaderAdmin />
        <main className="flex-grow-1 p-3 bg-light">
          <Outlet />
        </main>
        <FooterAdmin />
      </div>
    </div>
  );
};

export default AdminLayout;
