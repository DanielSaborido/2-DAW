import { createBrowserRouter } from "react-router-dom"
import Home, { loaderGames } from "../pages/Home.jsx"
import Contact from "../pages/Contact.jsx"
import Games, { loaderGames } from "../pages/Games.jsx"
import NotFound from "../pages/NotFound.jsx"
import LayoutPublic from "../layouts/LayoutPublic.jsx"
import Game, { loaderGame } from "../pages/Game.jsx"

const api_key = "37dea5560e494058945502465024de6a"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            { /// esta forma es propuesta por react pero no le gusta al profesor
                errorElement: <NotFound />,
                children:[
                    {
                        path:"/",
                        element: <Home />,
                        loader: loaderGames({ api_key })
                    },
                    {
                        path:"/games",
                        element: <Games />,
                        loader: loaderGames({ api_key })
                    },
                    {
                        path:"/games/:id",
                        element: <Game />,
                        loader: loaderGame({ api_key })
                    },
                    {
                        path:"/contact",
                        element: <Contact />
                    }]
            }]
    }
])