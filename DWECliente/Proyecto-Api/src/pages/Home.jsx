import { useLoaderData, Link } from "react-router-dom"

const Home = () => {
    const { games } = useLoaderData()

    // Función para obtener los 5 juegos más recientes
    const getNewestGames = () => {
        if (games.length > 0) {
            // Agrupar los juegos por familia de plataformas
            const gamesByPlatformFamily = {}
            games.forEach((game) => {
                game.platforms.forEach((platform) => {
                    const family = platform.platform_family
                    if (!gamesByPlatformFamily[family]) {
                        gamesByPlatformFamily[family] = []
                    }
                    gamesByPlatformFamily[family].push(game)
                })
            })
            // Obtener los 5 juegos más recientes de cada familia de plataformas
            const gamesByPlatformFamilyList = []
            for (const family in gamesByPlatformFamily) {
                const familyGames = gamesByPlatformFamily[family]
                const sortedFamilyGames = familyGames.sort((a, b) => new Date(b.released) - new Date(a.released))
                const fiveNewestFamilyGames = sortedFamilyGames.slice(0, 5)
                gamesByPlatformFamilyList.push(
                    <div key={family}>
                        <h2>{family}</h2>
                        <ul>
                            {fiveNewestFamilyGames.map((game) => (
                                <li key={game.id}>
                                    <Link to={`/games/${game.id}`}>{game.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
            return gamesByPlatformFamilyList
        } else {
            return <h1>No hay datos</h1>
        }
    }

    return (
        <>
            <h1>Newest Games</h1>
            {getNewestGames()}
        </>
    )
}

export default Home

export const loaderGames = async({api_key}) => {
    const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}`)
    const games = await data.json()
    return {games}
}