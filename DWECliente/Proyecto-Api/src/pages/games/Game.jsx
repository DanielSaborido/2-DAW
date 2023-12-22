import { useLoaderData } from 'react-router-dom'

const Game = () => {
    const {game} = useLoaderData()
    console.log(game)
  return (
    <>
        <h1>{game.name}</h1>
        <div>{game.description}</div> 
    </>
  )
}

export default Game

export const loaderGame = async({params, api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${api_key}`)
        const response = await data.json()
        console.log(response)
        return { game: response }
    } catch (error) {
        console.error("Error fetching game:", error)
        return { game: [] }
    }
}