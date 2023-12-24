import { useLoaderData, Link } from "react-router-dom"

const Games = () => {
    console.log(useLoaderData())
    const { games} = useLoaderData()

    return (
        <>
            <h1>Games</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    games.length > 0 ? (
                        games.map((game) => (
                            <div key={game.id} className="col">
                                <Link to={`/games/${game.id}`}>
                                    <div className="card h-100">
                                        <img src={game.background_image} className="card-img-top h-50" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No hay datos</h2> </div>)
                }
            </div>
        </>
    )
}

export default Games

export const loaderGames = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}`)
        const response = await data.json()
        return { games: response.results }
    } catch (error) {
        console.error("Error fetching games:", error)
        return { games: [] }
    }
}