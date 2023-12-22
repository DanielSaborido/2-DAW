import { useLoaderData, Link } from "react-router-dom"

const Games = () => {
    console.log(useLoaderData())
    const { games} = useLoaderData()

    return (
        <>
            <h1>Games</h1>
            <ul>
                {
                    games.length > 0 ? (
                        games.map((game) => (
                            <li key={game.id}>
                                <Link to={`/games/${game.id}`}>{game.title}</Link>
                            </li>
                        ))
                    ) : (<h1>No hay datos</h1>)
                }
            </ul>
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