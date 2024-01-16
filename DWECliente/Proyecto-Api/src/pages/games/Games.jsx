import { useContext, useEffect, useState } from "react"
import { useLoaderData, Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"
import { loaderGames } from "../../context/Loaders"

const Games = ({api_key, page_size}) => {
    const { games } = useLoaderData()
    const {log ,setLog} = useContext(UserContext)
    const {favorites} = log
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [gamesList, setGames] = useState(games)

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

    useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
          ) {
            if (!loading) {
              setLoading(true)
              setPageNumber((prevPageNumber) => prevPageNumber + 1)
            }
          }
        }
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
    }, [loading])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { games: newGames } = await loaderGames({ api_key, page_size, pageNumber })
                setGames((prevGames) => [...prevGames, ...newGames])
                setLoading(false)
            } catch (error) {
                console.error("Error fetching games:", error)
                setLoading(false)
            }
        }

        fetchData()
    }, [pageNumber, setGames, api_key, page_size])

    return (
        <>
            <h2 className='text-center mb-3'>Games</h2>
            <div className="d-flex flex-wrap row-cols-md-6 g-2">
                {
                    gamesList.length > 0 ? (
                        gamesList.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .map((game) => (
                            <div key={game.id} className="col">
                                <div className="card m-1">
                                    <Link to={`/games/${game.id}`}>
                                        <img src={game.background_image} className="card-img-top" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                            <p className="card-text">
                                            <strong>Platforms:</strong> {game.platforms.map((platform) => platform.platform.name).join(', ')}
                                            </p>
                                            <h6 className="card-subtitle mb-2 text-muted">Release Date</h6>
                                            <p className="card-text">{game.released}</p>
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