import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";

// Client Pages
import Home from "./pages/client/Home";
import Product from "./pages/client/Product";
import Contact from "./pages/client/Contact";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import UserManagement from "./pages/admin/UserManagement";

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
          <Route path="users" element={<UserManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
