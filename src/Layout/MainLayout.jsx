import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Car from "../Pages/Car/Car";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;