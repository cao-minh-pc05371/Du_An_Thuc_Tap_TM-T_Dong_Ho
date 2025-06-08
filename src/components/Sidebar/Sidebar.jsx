import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiBox, FiTag, FiLayers, FiUsers, FiSettings,
  FiBarChart2, FiShoppingCart, FiMessageSquare,
  FiEdit
} from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [openMenuId, setOpenMenuId] = useState(null);

  const isActive = (path, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const singleSections = [
    { id: "Overview", title: "Thống kê", to: "/admin", icon: <FiBarChart2 /> },
    { id: "Order", title: "Quản lý đơn hàng", to: "/admin/orders", icon: <FiShoppingCart /> },
    { id: "Review", title: "Quản lý đánh giá", to: "/admin/reviews", icon: <FiMessageSquare /> },
  ];

  const collapsibleSections = [
    {
      id: "Category",
      title: "Quản lý danh mục",
      icon: <FiLayers />,
      links: [
        { to: "/admin/categories", label: "Danh sách danh mục" },
        { to: "/admin/categories/create", label: "Thêm danh mục" },
      ],
    },
    {
      id: "Brand",
      title: "Quản lý thương hiệu",
      icon: <FiTag />,
      links: [
        { to: "/admin/brands", label: "Danh sách thương hiệu" },
        { to: "/admin/brands/create", label: "Thêm thương hiệu" },
      ],
    },
    {
      id: "Product",
      title: "Quản lý sản phẩm",
      icon: <FiBox />,
      links: [
        { to: "/admin/products", label: "Danh sách sản phẩm" },
        { to: "/admin/products/create", label: "Thêm sản phẩm" },
      ],
    },
    {
      id: "User",
      title: "Quản lý người dùng",
      icon: <FiUsers />,
      links: [
        { to: "/admin/users", label: "Danh sách người dùng" },
        { to: "/admin/users/create", label: "Thêm người dùng" },
      ],
    },
    {
      id: "Blog",
      title: "Quản lý blog",
      icon: <FiEdit />,
      links: [
        { to: "/admin/blogs", label: "Danh sách blog" },
        { to: "/admin/blogs/create", label: "Thêm blog" },
      ],
    },
    {
      id: "Setting",
      title: "Cài đặt hệ thống",
      icon: <FiSettings />,
      links: [
        { to: "/admin/settings", label: "Cấu hình & thiết lập" },
      ],
    },
  ];

  return (
    <aside className="w-[280px] min-h-screen bg-white px-4 py-6 border-r shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Quản lý hệ thống</h2>

      {/* Static Sections */}
      <nav className="space-y-1">
        {singleSections.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={`no-underline flex items-center gap-3 px-4 py-2 rounded-lg text-[15px] font-medium transition duration-150 ${
              isActive(item.to, true)
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            <span className="text-[17px]">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Collapsible Sections */}
      <div className="mt-6 space-y-3">
        {collapsibleSections.map((section) => {
          const isOpen =
            openMenuId === section.id ||
            section.links.some((link) => isActive(link.to, true));

          return (
            <div key={section.id}>
              <button
                onClick={() => toggleMenu(section.id)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-white text-[15px] font-semibold transition duration-200 ${
                  isOpen ? "bg-blue-700" : "bg-blue-800 hover:bg-blue-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[17px]">{section.icon}</span>
                  {section.title}
                </div>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {isOpen && (
                <ul className="pl-8 mt-1 border-l-2 border-blue-200 space-y-1">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className={`no-underline block px-3 py-1.5 rounded-md text-sm font-medium transition duration-150 ${
                          isActive(link.to, true)
                            ? "text-blue-700 bg-blue-50"
                            : "text-blue-900 hover:bg-blue-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
