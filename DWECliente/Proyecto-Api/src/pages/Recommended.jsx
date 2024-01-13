import { Link, useLoaderData } from "react-router-dom"
import { getUserById, modifyUser } from "../dataBase/IndexDB"
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

export const loaderRecommendations = async({api_key, page_size, params}) => {
    try {
        const log = await getUserById(parseInt(params.id, 10))
        const genresList = log.genreList.toString()
        const fetchAndFilter = async (genres) => {
            const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${genres}&ordering=-released&page_size=${page_size}`)
            const response = await data.json()
            const filteredResults = response.results.filter(game => game.background_image !== null)
            return filteredResults
          }
        const fillEmptySlots = async (gamesArray, requiredLength, genres) => {
            const emptySlots = requiredLength - gamesArray.length
            if (emptySlots > 0) {
                const additionalData = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${genres}&ordering=-released&page_size=${emptySlots}&page=2`)
                const additionalResponse = await additionalData.json()
                const additionalGames = additionalResponse.results.filter(game => game.background_image !== null)
                return [...gamesArray, ...additionalGames]
            }
            return gamesArray.slice(0, requiredLength)
        }
        const data = await fetchAndFilter(genresList)
        const newData = await fillEmptySlots(data, 40, genresList)
        return { recommended: newData }
    } catch (error) {
        console.error("Error fetching recommended:", error)
        return { recommended: [] }
    }
}