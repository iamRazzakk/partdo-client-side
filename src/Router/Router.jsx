import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";
import Car from "../Pages/Car/Car";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Product/Product";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import AddCar from "../Pages/AddCar/AddCar";
import CarDetail from "../Pages/CarCollection";
import CarCollection from "../Pages/CarCollection";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/car',
                element: <Car></Car>,
                loader: () => fetch('http://localhost:5000/car')
            },
            {
                path: '/car/:id',
                element: <CarDetail></CarDetail>
            },
            {
                path: '/addCar',
                element: <AddCar></AddCar>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/updateCar',
                element: <UpdateCar></UpdateCar>
            },
            {
                path: '/carDetail/:id',
                element: <CarCollection></CarCollection>,
                loader:()=>fetch('/carCard.json')

            }
        ]
    }
]);

export default myCreatedRouter;
