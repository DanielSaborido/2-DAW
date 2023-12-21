import { useLoaderData, Link } from "react-router-dom"

const Games = () => {
    console.log(useLoaderData())
    const { games} = useLoaderData()

    return (
        <div>
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
        </div>
    )
}

export default Games