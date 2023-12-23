import { useLoaderData, Link } from "react-router-dom"

const Genre = () => {
  console.log(useLoaderData())
  const { genre} = useLoaderData()

  return (
      <>
          <h1>Games of </h1>
          <ul>
              {
                  genre.length > 0 ? (
                    genre.map((game) => (
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

export default Genre

export const loaderGenre = async({params, api_key}) => {
    console.log(params)
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${params.id}`)
        const response = await data.json()
        console.log(response)
        return { genre: response.results }
    } catch (error) {
        console.error("Error fetching genre:", error)
        return { genre: [] }
    }
}