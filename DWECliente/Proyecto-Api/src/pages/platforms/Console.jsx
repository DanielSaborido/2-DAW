import { useLoaderData, Link } from "react-router-dom"

const Console = () => {
  console.log(useLoaderData())
  const { platform} = useLoaderData()

  return (
      <>
          <h1>Games for </h1>
          <ul>
              {
                  platform.length > 0 ? (
                    platform.map((game) => (
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

export default Console

export const loaderConsole = async({params, api_key}) => {
    console.log(params)
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&platforms=${params.id}`)
        const response = await data.json()
        console.log(response)
        return { platform: response.results }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { platform: [] }
    }
}