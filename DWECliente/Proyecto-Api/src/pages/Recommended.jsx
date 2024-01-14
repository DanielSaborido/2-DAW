import { Link, useLoaderData } from "react-router-dom"
import { modifyUser } from "../dataBase/IndexDB"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Swal from "sweetalert2"

const Recommended = () => {
    const { recommended } = useLoaderData()
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
            <h2 className='text-center mb-3'>Recommended Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    recommended.length > 0 ? (
                        recommended.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .map((game) => (
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
                    ) : (<div className="col"> <h2>There are no games to recommend to you</h2> </div>)
                }
            </div>
        </>
    )
}

export default Recommended