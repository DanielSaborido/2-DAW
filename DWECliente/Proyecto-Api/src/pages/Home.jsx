import { useLoaderData, Link } from "react-router-dom"

const Home = () => {
    const { news } = useLoaderData()

    console.log(news)

    return (
        
        <>
            <h1>New Games</h1>
            <ul>
                {news.map((newgame) => (
                    <li key={newgame.id}>
                        <Link to={`/games/${newgame.id}`}>{newgame.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home

export const loaderNews = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}`)
        const response = await data.json()
        return { news: response.results }
    } catch (error) {
        console.error("Error fetching news:", error)
        return { news: [] }
    }
}