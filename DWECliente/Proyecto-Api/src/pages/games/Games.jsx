import { useContext } from "react"
import { useLoaderData, Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"

const Games = () => {
    const { games} = useLoaderData()
    const {log ,setLog} = useContext(UserContext)
    const {favorites} = log

    const addFavorite = (id) => {
        if (log.validation) {
            setLog({
                ...log,
                favorites: favorites.includes(id)
                    ? favorites.filter((gameId) => gameId !== id)
                    : [...favorites, id]
            })
            modifyUser(log, log.id)
        } else {
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "You must be logged in to have favorites",
            })
        }
    }

    return (
        <>
            <h2 className='text-center mb-3'>Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    games.length > 0 ? (
                        games.map((game) => (
                            <div key={game.id} className="col">
                                <div className="card m-1">
                                    <Link to={`/games/${game.id}`}>
                                        <img src={game.background_image} className="card-img-top" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </Link>
                                    <button onClick={() => addFavorite(game.id)}
                                    className={`btn ${favorites.includes(game.id) ? 'btn-danger' : 'btn-primary'}`}>
                                        {favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No data found</h2> </div>)
                }
            </div>
        </>
    )
}

export default Games

export const loaderGames = async({api_key, page_size}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&page_size=${page_size}`)
        const response = await data.json()
        return { games: response.results }
    } catch (error) {
        console.error("Error fetching games:", error)
        return { games: [] }
    }
}