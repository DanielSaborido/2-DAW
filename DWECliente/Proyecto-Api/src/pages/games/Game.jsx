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