import { Link, useLoaderData } from "react-router-dom"

const Recommended = () => {
    const { recommended } = useLoaderData()

    return (
        <>
            <h2 className='text-center mb-3'>Recommended Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    recommended.length > 0 ? (
                        recommended.map((game) => (
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
                    ) : (<div className="col"> <h2>No data found</h2> </div>)
                }
            </div>
        </>
    )
}

export default Recommended

export const loaderRecommendations = async({api_key, params}) => {
    try {
        const genres = params.id//log.genreList.join(',')
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${genres}`)
        const response = await data.json()
        return { recommended: response.results }
    } catch (error) {
        console.error("Error fetching recommended:", error)
        return { recommended: [] }
    }
}