import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import LayoutRoot from "../layouts/LayoutRoot.jsx"
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutRoot />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path:"/dashboard",
                element: <LayoutPrivate />,
                children:[
                    {
                        index:true,
                        element: <Dashboard />
                    }]
            }]
    }
])