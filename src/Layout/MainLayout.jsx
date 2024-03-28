import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Helmet } from "react-helmet-async";


const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Partdo
                </title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;