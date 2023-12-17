import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Doctor from "../pages/Doctor/Doctor";
import Appointment from "../pages/Appointment/Appointment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/doctor',
                element: <PrivateRoute><Doctor></Doctor></PrivateRoute>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment></Appointment></PrivateRoute>
            }, {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
]);