import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import "slick-carousel/slick/slick.css";

// Client Pages
import Home from "./pages/client/Home";
import Product from "./pages/client/Product";
import Contact from "./pages/client/Contact";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import ProductManagement from "./pages/admin/Products/ProductList";
import UserList from "./pages/admin/Users/UserList";
import CategoryCreate from "./pages/admin/Categories/CategoryCreate";
import CategoryList from "./pages/admin/Categories/CategoryList";
import BrandList from "./pages/admin/Brands/BrandsList";
import BrandCreate from "./pages/admin/Brands/BrandCreate";
import ProductCreate from "./pages/admin/Products/ProductCreate";
import ProductDetail from "./pages/admin/Products/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Client */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Layout Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="users" element={<UserList />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/create" element={<CategoryCreate />} />
          <Route path="brands" element={<BrandList />} />
          <Route path="brands/create" element={<BrandCreate />} />
          <Route path="products/create" element={<ProductCreate />} />
          <Route path="products/:id" element={<ProductDetail />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
