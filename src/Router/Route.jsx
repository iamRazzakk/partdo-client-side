import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "./Pages/Home";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])

export default myCreatedRouter;