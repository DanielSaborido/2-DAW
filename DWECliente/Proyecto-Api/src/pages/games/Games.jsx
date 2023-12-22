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
                                <Link to={`/games/${game.id}`}>{game.name}</Link>
                            </li>
                        ))
                    ) : (<h1>No hay datos</h1>)
                }
            </ul>
        </>
    )
}

export default Games