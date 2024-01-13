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
import Recommended, { loaderRecommendations } from "../pages/Recommended.jsx"
import Favorites, { loaderFavorites } from "../pages/Favorites.jsx"
import Contact from "../pages/Contact.jsx"
import ModifyAccount from "../pages/account/ModifyAccount.jsx"

const api_key = "37dea5560e494058945502465024de6a"
const page_size = 40 //por mas que añadas este es el maximo de una pagina

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
                        loader: () => loaderGames({ api_key, page_size })
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
                        loader: ({ params }) => loaderGenre({params, page_size, api_key })
                    },
                    {
                        path:"/tags/:id",
                        element: <Tag />,
                        loader: ({ params }) => loaderTag({params, page_size, api_key })
                    },
                    {
                        path:"/platforms",
                        element: <Platforms />,
                        loader: () => loaderPlatforms({ api_key })
                    },
                    {
                        path:"/platforms/:id",
                        element: <Console />,
                        loader: ({ params }) => loaderConsole({params, page_size, api_key })
                    },
                    {
                        path:"/developers",
                        element: <Developers />,
                        loader: () => loaderDevelopers({ api_key })
                    },
                    {
                        path:"/developers/:id",
                        element: <Developer />,
                        loader: ({ params }) => loaderDeveloper({params, page_size, api_key })
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
                        path:"/recommended/:id",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <Recommended />,
                                loader: ({ params }) => loaderRecommendations({ api_key, page_size, params })
                            }]
                    },
                    {
                        path:"/favorites/:id",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <Favorites />,
                                loader: ({ params }) => loaderFavorites({ api_key, params })
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
                    },
                    {
                        path:"/modify",
                        element: <LayoutPrivate />,
                        children:[
                            {
                                index:true,
                                element: <ModifyAccount />,
                                loader: () => loaderGenres({ api_key })
                            }]
                    }]
            }]
    }
])