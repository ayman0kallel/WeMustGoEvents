import {Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: "/",
            element :<Home/>
        },
        {
            path: "home",
            element :<Home/>
        },
        {
            path: "login",
            element :<SignIn/>
        },
        {
            path: "register",
            element :<SignUp/>
        }
    ]);
    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
}

export default AppRoutes;

