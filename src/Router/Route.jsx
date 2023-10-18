import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "./Pages/Home";
import SingIn from "../components/SingIn";
import RegisterForm from "../components/RegisterForm";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import ContactForm from "./Pages/ContactForm";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<ContactForm></ContactForm>
            },
            {
                path: '/logIn',
                element: <SingIn></SingIn>
            },
            {
                path: '/register',
                element: <RegisterForm></RegisterForm>
            }
        ],
    }
])

export default myCreatedRouter;