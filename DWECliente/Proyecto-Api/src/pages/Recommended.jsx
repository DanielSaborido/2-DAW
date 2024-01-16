import { Link, useLoaderData, useParams } from "react-router-dom"
import { modifyUser } from "../dataBase/IndexDB"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Swal from "sweetalert2"
import { loaderRecommendations } from "../context/Loaders"

const Recommended = ({api_key, page_size}) => {
    const params = useParams()
    const { recommended } = useLoaderData()
    const {log ,setLog} = useContext(UserContext)
    const {favorites} = log
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [recommendedList, setRecommended] = useState(recommended)

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
                const { recommended: newRecommended } = await loaderRecommendations({params, api_key, page_size, pageNumber })
                setRecommended((prevRecommended) => [...prevRecommended, ...newRecommended])
                setLoading(false)
            } catch (error) {
                console.error("Error fetching recommended:", error)
                setLoading(false)
            }
        }

        fetchData()
    }, [pageNumber, setRecommended,params, api_key, page_size])

    return (
        <>
            <h2 className='text-center mb-3'>Recommended Games</h2>
            <div className="d-flex flex-wrap row-cols-md-6 g-2">
                {
                    recommendedList.length > 0 ? (
                        recommendedList.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .filter((game) => game.background_image !== null)
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
                    ) : (<div className="col"> <h2>There are no games to recommend to you</h2> </div>)
                }
            </div>
        </>
    )
}

export default Recommended