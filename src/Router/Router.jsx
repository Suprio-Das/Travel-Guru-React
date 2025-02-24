import { createBrowserRouter } from "react-router-dom";
import '../../src/index.css'
import Main from "../Components/Main/Main";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <h1>This is main layout.</h1>
            }
        ]
    }
])

export default Router;