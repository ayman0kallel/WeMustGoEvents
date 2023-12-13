import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Header } from 'antd/es/layout/layout';
import AppRoutes from './config/routes';


function App() {

  return (
    <>
        <AppRoutes/>
    </>
  )
}

export default App
