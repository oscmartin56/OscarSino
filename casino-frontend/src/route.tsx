import { createBrowserRouter } from "react-router-dom";
import Register  from './Pages/Register';
import Login from './Pages/Login';

const router = createBrowserRouter(
[
    {
        path: "/",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

export default router;