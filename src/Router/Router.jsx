import { createBrowserRouter } from "react-router-dom";
import '../../src/index.css'
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;