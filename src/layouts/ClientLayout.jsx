import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@/assets/scss/Client/index.scss';
import '../assets/scss/Client/index.css';
const ClientLayout = () => (
    <>
        <Header />
        <ToastContainer />
        <Outlet />
        <Footer />
    </>
);

export default ClientLayout;