import { useLoaderData, Link } from "react-router-dom"

const Home = () => {
    const { newGames } = useLoaderData()

    console.log(newGames)

    return (
        
        <>
            <h1>New Games</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    newGames.length > 0 ? (
                        newGames.map((game) => (
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

export default Home

export const loaderNews = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&ordering=-released`)
        const response = await data.json()
        return { newGames: response.results }
    } catch (error) {
        console.error("Error fetching newGames:", error)
        return { newGames: [] }
    }
}