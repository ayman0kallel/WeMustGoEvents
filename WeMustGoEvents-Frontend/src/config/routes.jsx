import { Suspense, lazy } from "react";
import { useRoutes } from "react-router";
import App from "../App";

const Signup = lazy(() => import("../containers/signup/Signup"))

const AppRoutes = () =>{
    const element = useRoutes([
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
    ]);
    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default AppRoutes;