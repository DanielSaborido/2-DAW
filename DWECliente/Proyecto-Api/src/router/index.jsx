import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../layouts/LayoutPublic.jsx"
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"
import Home, { loaderNews } from "../pages/Home.jsx"
//juegos en general
import Games, { loaderGames } from "../pages/games/Games.jsx"
import Game, { loaderGame } from "../pages/games/Game.jsx"
//filtro por genros y tags
import Genres, { loaderGenres } from "../pages/genres/Genres.jsx"
import Genre, { loaderGenre } from "../pages/genres/Genre.jsx"
import Tag, { loaderTag } from "../pages/genres/Tag.jsx"
//filtro por plataforma de juego
import Platforms, {loaderPlatforms} from "../pages/platforms/Platforms.jsx"
import Console, { loaderConsole } from "../pages/platforms/Console.jsx"
//filtro de desarrolladores
import Developers, { loaderDevelopers } from "../pages/developers/Developers.jsx"
import Developer, { loaderDeveloper } from "../pages/developers/Developer.jsx"
//pagina de error
import NotFound from "../pages/NotFound.jsx"
//registro
import LoginForm from "../pages/account/Loggin.jsx"
import AccountCreationForm from "../pages/account/AccountCreation.jsx"
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
                        loader: () => loaderNews({ api_key })
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
                        element: <Genre />,
                        loader: ({ params }) => loaderGenre({params, api_key })
                    },
                    {
                        path:"/tags/:id",
                        element: <Tag />,
                        loader: ({ params }) => loaderTag({params, api_key })
                    },
                    {
                        path:"/platforms",
                        element: <Platforms />,
                        loader: () => loaderPlatforms({ api_key })
                    },
                    {
                        path:"/platforms/:id",
                        element: <Console />,
                        loader: ({ params }) => loaderConsole({params, api_key })
                    },
                    {
                        path:"/developers",
                        element: <Developers />,
                        loader: () => loaderDevelopers({ api_key })
                    },
                    {
                        path:"/developers/:id",
                        element: <Developer />,
                        loader: ({ params }) => loaderDeveloper({params, api_key })
                    },
                    {
                        path:"/loggin",
                        element: <LoginForm />
                    },
                    {
                        path:"/loggin/create-account",
                        element: <AccountCreationForm />,
                        loader: () => loaderGenres({ api_key })
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