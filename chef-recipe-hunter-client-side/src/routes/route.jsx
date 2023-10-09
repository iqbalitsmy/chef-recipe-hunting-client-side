import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Pages/LoginPage/Login";
import Register from "../components/Pages/RegisterPage/Register";
import ChefLayout from "../layouts/ChefLayout";
import ChefsDetails from "../ChefsDetails/ChefsDetails";
import PageNotFound from "../components/Pages/PageNotFound/PageNotFound";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import Blogs from "../components/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/home",
        element: <Main></Main>,
    },
    {
        path: "/services",
        element: <UnderConstruction></UnderConstruction>,
    },
    {
        path: "/contact",
        element: <UnderConstruction></UnderConstruction>,
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: "/chefs",
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element: <ChefsDetails></ChefsDetails>,
                // loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
                loader: ({ params }) => fetch(`https://chef-recipe-hunting-server-side-iqbalitsmy.vercel.app/chefs/${params.id}`)
            },
        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>,
    },
]);

export default router;