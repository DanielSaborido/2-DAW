import { useLoaderData, Link } from "react-router-dom"

const Tag = () => {
  console.log(useLoaderData())
  const { tag} = useLoaderData()

  return (
      <>
          <h1>Games of </h1>
          <ul>
              {
                  tag.length > 0 ? (
                    tag.map((game) => (
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

export default Tag

export const loaderTag = async({params, api_key}) => {
    console.log(params)
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&tags=${params.id}`)
        const response = await data.json()
        console.log(response)
        return { tag: response.results }
    } catch (error) {
        console.error("Error fetching tag:", error)
        return { tag: [] }
    }
}