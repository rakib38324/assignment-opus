import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Overview from "../Pages/Overview/Overview";
import Pages from "../Pages/Pages/Pages";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/overview',
                element: <Overview></Overview>
            },
            {
                path: '/page',
                element: <Pages></Pages>
            }
        ]
    }
])

export default router;