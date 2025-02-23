import { createBrowserRouter } from "react-router-dom";
import '../../src/index.css'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello, I am React Router</h1>
    }
])

export default Router;