import { useLoaderData, Link } from "react-router-dom"

const Home = () => {
    const { newGames } = useLoaderData()

    console.log(newGames)

    return (
        
        <>
            <h2 className='text-center mb-3'>New Games</h2>
            <div className="d-flex flex-wrap row-cols-md-5">
                {
                    newGames.length > 0 ? (
                        newGames.map((game) => (
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