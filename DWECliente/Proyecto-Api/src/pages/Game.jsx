import { useLoaderData } from 'react-router-dom'

const Game = () => {
    const {game} = useLoaderData()
  return (
    <div>
        <h1>{game.name}</h1>
        <p>{game.description}</p>
    </div>
  )
}

export default Game

export const loaderGame = async({params, api_key}) => {
    const data = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${api_key}`)
        if(!data.ok){
            throw new Error (`ERROR: ${data.status} - ${data.statusText}`)
        }
    const game = await data.json()
    return {game}
}