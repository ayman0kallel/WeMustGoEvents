import { Suspense, lazy } from "react";
import { useRoutes } from "react-router";
import App from "../App";
import { Signin } from "../containers";

const Signup = lazy(() => import("../containers/signup/Signup"))

const AppRoutes = () =>{
    const element = useRoutes([
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/homepage",
            element: <App/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/signin",
            element: <Signin/>
        },
    ]);
    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default AppRoutes;