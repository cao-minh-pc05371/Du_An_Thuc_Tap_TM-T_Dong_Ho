import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin/FooterAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <HeaderAdmin />

        {/* Main content */}
        <main className="flex-grow p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <FooterAdmin />
      </div>
    </div>
  );
};

export default AdminLayout;
