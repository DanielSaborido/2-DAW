import { useLoaderData, Link } from "react-router-dom"

const Genre = () => {
  console.log(useLoaderData())
  const { genre, selectedGenreName} = useLoaderData()

  return (
      <>
          <h1>Games of {selectedGenreName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    genre.length > 0 ? (
                        genre.map((game) => (
                            <div key={game.id} className="col">
                                <Link to={`/games/${game.id}`}>
                                    <div className="card h-100">
                                        <img src={game.background_image} className="card-img-top h-50" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No hay datos</h2> </div>)
                }
            </div>
      </>
  )
}

export default Genre

export const loaderGenre = async({params, api_key}) => {
    console.log(params)
    try {
        const genreResponse = await fetch(`https://api.rawg.io/api/genres/${params.id}?key=${api_key}`)
        const genreData = await genreResponse.json()
        const selectedGenreName = genreData.name
        const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${params.id}`)
        const gameData = await gameResponse.json()
        return { genre: gameData.results, selectedGenreName }
    } catch (error) {
        console.error('Error fetching genre:', error)
        return { genre: [], selectedGenreName: '' }
    }
}