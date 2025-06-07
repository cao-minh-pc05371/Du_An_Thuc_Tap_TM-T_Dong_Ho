import { Link, useLocation } from "react-router-dom";
import {
  FiBox, FiTag, FiLayers, FiUsers, FiSettings,
  FiBarChart2, FiShoppingCart, FiMessageSquare,
  FiEdit, FiLogOut
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  // Hàm kiểm tra active chính xác
  const isActive = (path, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

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
    <div className="sidebar-wrapper">
      <h4 className="sidebar-title">Quản lý hệ thống</h4>

      {/* Các mục không có submenu */}
      {singleSections.map((item) => (
        <div className="accordion-item sidebar-section" key={item.id}>
          <h2 className="accordion-header">
            <Link to={item.to} className={`accordion-button sidebar-btn no-toggle ${isActive(item.to, true) ? "active" : ""}`}>
              <span className="sidebar-icon">{item.icon}</span>
              {item.title}
            </Link>
          </h2>
        </div>
      ))}

      {/* Các mục có submenu */}
      <div className="accordion" id="sidebarAccordion">
        {collapsibleSections.map((section) => (
          <div className="accordion-item sidebar-section" key={section.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed sidebar-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${section.id}`}
                aria-expanded={section.links.some(link => isActive(link.to, true))}
              >
                <span className="sidebar-icon">{section.icon}</span>
                {section.title}
              </button>
            </h2>
            <div
              id={`collapse${section.id}`}
              className={`accordion-collapse collapse ${section.links.some(link => isActive(link.to, true)) ? "show" : ""}`}
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body py-1">
                <ul className="nav flex-column ms-3 small">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className={`nav-link sidebar-link ${isActive(link.to, true) ? "active" : ""}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
