import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Pages/LoginPage/Login";
import Register from "../components/Pages/RegisterPage/Register";
import ChefLayout from "../layouts/ChefLayout";
import ChefsDetails from "../ChefsDetails/ChefsDetails";

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
        path: "/chefs",
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element: <ChefsDetails></ChefsDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
            },
        ]
    },
]);

export default router;