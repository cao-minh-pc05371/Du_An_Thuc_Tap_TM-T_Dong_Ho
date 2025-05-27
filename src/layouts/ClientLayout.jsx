import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ClientLayout = () => (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default ClientLayout;