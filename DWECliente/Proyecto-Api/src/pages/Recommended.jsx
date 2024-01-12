import { Link, useLoaderData } from "react-router-dom"
import { getUserById } from "../dataBase/IndexDB"

const Recommended = () => {
    const { recommended } = useLoaderData()

    return (
        <>
            <h2 className='text-center mb-3'>Recommended Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    recommended.length > 0 ? (
                        recommended.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .map((game) => (
                            <div key={game.id} className="col">
                                <Link to={`/games/${game.id}`}>
                                <div className="card m-1">
                                    <img src={game.background_image} className="card-img-top" alt={game.name} />
                                    <div className="card-body">
                                    <h5 className="card-title">{game.name}</h5>
                                    </div>
                                </div>
                                </Link>
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