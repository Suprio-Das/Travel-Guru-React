import { createBrowserRouter } from "react-router-dom";
import '../../src/index.css'
import Navbar from "../Components/Navbar/Navbar";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar></Navbar>
    }
])

export default Router;