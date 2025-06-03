import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import "slick-carousel/slick/slick.css";

// Client Pages
import Home from "./pages/client/Home";
import Product from "./pages/client/Product";
import DetailProduct from "./pages/client/Product/Detail";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import Cart from "./pages/client/Cart";
import Login from "./pages/client/Authenticator/Login";
import Register from "./pages/client/Authenticator/Register";
import Password from "./pages/client/Authenticator/Register/Password";
import Checkout from "./pages/client/Checkout";

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
import UserCreate from "./pages/admin/Users/UserCreate";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Client */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="san-pham" element={<Product />} />
          <Route path="san-pham/:slug" element={<DetailProduct />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="gio-hang" element={<Cart />} />
          <Route path="thanh-toan" element={<Checkout />} />
        </Route>

        <Route>
          <Route path="dang-nhap" element={<Login />} />
          <Route path="dang-ky" element={<Register />} />
          <Route path="dat-lai-mat-khau" element={<Password />} />

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
          <Route path="users/create" element={<UserCreate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
