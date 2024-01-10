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

import CarCollection from "../Pages/CarCollection";
import Error from "../Pages/Error/Error";
import SingleCard from "../Pages/SingleCard";
import EverCarDetail from "../Pages/EverCarDetail";
import Cart from "../Pages/Cart";
import PrivateRoute from "../Pages/PrivateRoute";
// import SingleCard from "../Pages/SingleCard";
// import CarDetail from "../Pages/CarDetail/CarDetail";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/car',
                element: <Car></Car>,
                loader: ({ params }) => fetch(`http://localhost:5001/brandcar/${params.brand}`)
            },
            {
                path: '/cardisplay/:brand',
                element: <SingleCard></SingleCard>
            },
            {
                path: '/addCar',
                element: <AddCar></AddCar>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
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
                path: '/updatecar/:id',
                element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/car/${params.id}`)
            },
            {
                path: '/carDetail/:id',
                element: <CarCollection></CarCollection>,
                loader: () => fetch('/carCard.json')

            },
            {
                path: '/singlecar/:carId',
                element: <EverCarDetail></EverCarDetail>
            },
            {
                path: '/addcart',
                element: <Cart></Cart>
            },
        ]
    }
]);

export default myCreatedRouter;