import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Pages/LoginPage/Login";
import Register from "../components/Pages/RegisterPage/Register";

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
]);

export default router;