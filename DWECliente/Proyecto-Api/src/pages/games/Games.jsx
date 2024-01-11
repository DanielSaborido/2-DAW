import { useLoaderData, Link } from "react-router-dom"

const Games = () => {
    console.log(useLoaderData())
    const { games} = useLoaderData()

    return (
        <>
            <h2 className='text-center mb-3'>Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    games.length > 0 ? (
                        games.map((game) => (
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