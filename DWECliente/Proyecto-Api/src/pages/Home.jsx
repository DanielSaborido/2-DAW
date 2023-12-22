import { useLoaderData, Link } from "react-router-dom"

const Home = () => {
    const { games } = useLoaderData()

    console.log(games)

    return (
        
        <>
            <h1>New Games</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`}>{game.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home

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