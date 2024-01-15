import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../layouts/LayoutPublic.jsx"
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"
import Home from "../pages/Home.jsx"
//juegos en general
import Games from "../pages/games/Games.jsx"
import Game from "../pages/games/Game.jsx"
//filtro por genros y tags
import Genres from "../pages/genres/Genres.jsx"
import Genre from "../pages/genres/Genre.jsx"
import Tag from "../pages/genres/Tag.jsx"
//filtro por plataforma de juego y desarrolladores
import Others from "../pages/others/Others.jsx"
import Platform from "../pages/others/Platform.jsx"
import Console from "../pages/others/Console.jsx"
import Developer from "../pages/others/Developer.jsx"
//pagina de error
import NotFound from "../pages/NotFound.jsx"
//registro
import LoginForm from "../pages/account/Loggin.jsx"
import AccountCreationForm from "../pages/account/AccountCreation.jsx"
//paginas de usuario registrado
import Recommended from "../pages/Recommended.jsx"
import Favorites from "../pages/Favorites.jsx"
import Contact from "../pages/Contact.jsx"
import ModifyAccount from "../pages/account/ModifyAccount.jsx"
//data loaders
import { loaderConsole, loaderDeveloper, loaderFavorites, loaderGame, loaderGames, loaderGenre, loaderGenres, loaderNews, loaderOthers, loaderPlatform, loaderRecommendations, loaderTag } from "../context/Loaders.jsx"

const api_key = "37dea5560e494058945502465024de6a"
const page_size = 30
const pageNumber = 1

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
                        path:"/platformParent/:id",
                        element: <Platform api_key={api_key} page_size={page_size} />,
                        loader: ({ params }) => loaderPlatform({params, api_key, page_size, pageNumber })
                    },
                    {
                        path:"/games",
                        element: <Games api_key={api_key} page_size={page_size} />,
                        loader: () => loaderGames({ api_key, page_size, pageNumber })
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
                        element: <Genre api_key={api_key} page_size={page_size} />,
                        loader: ({ params }) => loaderGenre({params, api_key, page_size, pageNumber })
                    },
                    {
                        path:"/tags/:id",
                        element: <Tag api_key={api_key} page_size={page_size} />,
                        loader: ({ params }) => loaderTag({params, api_key, page_size, pageNumber })
                    },
                    {
                        path:"/others",
                        element: <Others />,
                        loader: () => loaderOthers({ api_key })
                    },
                    {
                        path:"/platforms/:id",
                        element: <Console api_key={api_key} page_size={page_size} />,
                        loader: ({ params }) => loaderConsole({params, api_key, page_size, pageNumber })
                    },
                    {
                        path:"/developers/:id",
                        element: <Developer api_key={api_key} page_size={page_size} />,
                        loader: ({ params }) => loaderDeveloper({params, api_key, page_size, pageNumber })
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
                                path:"/recommended/:id",
                                element: <Recommended api_key={api_key} page_size={page_size} />,
                                loader: ({ params }) => loaderRecommendations({ params ,api_key, page_size, pageNumber })
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