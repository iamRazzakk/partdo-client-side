import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MyCarousel from "../components/Banner";
import AddProduct from "../Router/Pages/AddProduct";
import Shop from "../Router/Pages/Shop";
import Footer from "../Router/Pages/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <MyCarousel></MyCarousel>
            <AddProduct></AddProduct>
            <Shop></Shop>
            <Footer></Footer>
        </div>
    );
};

export default Layout;