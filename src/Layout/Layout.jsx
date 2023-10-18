import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MyCarousel from "../components/Banner";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MyCarousel></MyCarousel>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;