import { useLoaderData, Link } from "react-router-dom"

const Developer = () => {
  console.log(useLoaderData())
  const { developer} = useLoaderData()

  return (
      <>
          <h1>Games of </h1>
          <ul>
              {
                  developer.length > 0 ? (
                    developer.map((game) => (
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

export default Developer

export const loaderDeveloper = async({params, api_key}) => {
    console.log(params)
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&developers=${params.id}`)
        const response = await data.json()
        console.log(response)
        return { developer: response.results }
    } catch (error) {
        console.error("Error fetching developer:", error)
        return { developer: [] }
    }
}