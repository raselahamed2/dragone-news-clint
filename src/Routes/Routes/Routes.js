import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagory from "../../Pages/Cetagory/Catagory/Catagory";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register";
import News from "../../Pages/News/News/News";
import TramsAndCondition from "../../Pages/Others/TramsAndCondition/TramsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <TramsAndCondition/>
            }
        ]
    }
])