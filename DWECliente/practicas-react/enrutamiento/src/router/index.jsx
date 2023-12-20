import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Blog, { loaderBlogs } from "../pages/Blog.jsx"
import NotFound from "../pages/NotFound.jsx"
import LayoutPublic from "../layouts/LayoutPublic.jsx"
import Post, { loaderPosts } from "../pages/Post.jsx"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/blog",
                element: <Blog />,
                loader: loaderBlogs
            },
            {
                path:"/blog/:id",
                element: <Post />,
                loader: loaderPosts
            }]
    }
])