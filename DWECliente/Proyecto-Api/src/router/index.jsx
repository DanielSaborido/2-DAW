import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../layouts/LayoutPublic.jsx"
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"
import Home, { loaderGames } from "../pages/Home.jsx"
//juegos en general
import Games from "../pages/games/Games.jsx"
import Game, { loaderGame } from "../pages/games/Game.jsx"
//filtro por genros y tags
import Genres, { loaderGenres } from "../pages/genres/Genres.jsx"
import Genre from "../pages/genres/Genre.jsx"
import Tags, { loaderTags } from "../pages/genres/Tags.jsx"
import Tag from "../pages/genres/Tag.jsx"
//filtro por plataforma de juego
import Platforms, {loaderPlatforms} from "../pages/platforms/Platforms.jsx"
import Console from "../pages/platforms/Console.jsx"
//pagina de error
import NotFound from "../pages/NotFound.jsx"
//paginas de usuario registrado
import Recommended from "../pages/Recommended.jsx"
import Favorites from "../pages/Favorites.jsx"
import Contact from "../pages/Contact.jsx"

const api_key = "37dea5560e494058945502465024de6a"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            { 
                errorElement: <NotFound />,
                children:[
                    {
                        path:"/",
                        element: <Home />,
                        loader: () => loaderGames({ api_key })
                    },
                    {
                        path:"/games",
                        element: <Games />,
                        loader: () => loaderGames({ api_key })
                    },
                    {
                        path:"/games/:id",
                        element: <Game />,
                        loader: ({ params }) => loaderGame({params, api_key })
                    },
                    {
                        path:"/genres",
                        element: <Genres />,
                        loader: () => loaderGenres({ api_key })
                    },
                    {
                        path:"/genres/:id",
                        element: <Genre />
                    },
                    {
                        path:"/tags",
                        element: <Tags />,
                        loader: () => loaderTags({ api_key })
                    },
                    {
                        path:"/tags/:id",
                        element: <Tag />
                    },
                    {
                        path:"/platforms",
                        element: <Platforms />,
                        loader: () => loaderPlatforms({ api_key })
                    },
                    {
                        path:"/platforms/:id",
                        element: <Console />
                    },
                    {
                        path:"/recommended",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <Recommended />
                            }]
                    },
                    {
                        path:"/favorites",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <Favorites />
                            }]
                    },
                    {
                        path:"/contact",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <Contact />
                            }]
                    }]
            }]
    }
])