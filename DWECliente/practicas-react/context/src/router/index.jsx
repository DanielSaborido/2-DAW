import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Blog, { loaderBlogs } from "../pages/Blog.jsx"
import LayoutRoot from "../layouts/LayoutRoot.jsx"
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutRoot />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/dashboard",
                element: <Dashboard />
            },
            {
                path:"/blog",
                element: <Blog />,
                loader: loaderBlogs
            }]
    }
])