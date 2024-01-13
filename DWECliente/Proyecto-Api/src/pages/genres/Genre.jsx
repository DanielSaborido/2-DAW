import { useLoaderData, Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"

const Genre = () => {
  const { genre, selectedGenreName} = useLoaderData()
  const {log ,setLog} = useContext(UserContext)
  const {favorites} = log

  const addFavorite = (id) => {
      if (log.validation) {
          setLog({
              ...log,
              favorites: favorites.includes(id)
                  ? favorites.filter((gameId) => gameId !== id)
                  : [...favorites, id]
          })
          modifyUser(log, log.id)
      } else {
          Swal.fire({
              icon: "error",
              title: "ERROR",
              text: "You must be logged in to have favorites",
          })
      }
  }

  return (
      <>
          <h1>Games of {selectedGenreName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    genre.length > 0 ? (
                        genre.map((game) => (
                            <div key={game.id} className="col">
                                <div className="card m-1">
                                    <Link to={`/games/${game.id}`}>
                                        <img src={game.background_image} className="card-img-top" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </Link>
                                    <button onClick={() => addFavorite(game.id)}
                                    className={`btn ${favorites.includes(game.id) ? 'btn-danger' : 'btn-primary'}`}>
                                        {favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No data found</h2> </div>)
                }
            </div>
      </>
  )
}

export default Genre

export const loaderGenre = async({params, api_key, page_size}) => {
    console.log(params)
    try {
        const genreResponse = await fetch(`https://api.rawg.io/api/genres/${params.id}?key=${api_key}`)
        const genreData = await genreResponse.json()
        const selectedGenreName = genreData.name
        const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=${params.id}&page_size=${page_size}`)
        const gameData = await gameResponse.json()
        return { genre: gameData.results, selectedGenreName }
    } catch (error) {
        console.error('Error fetching genre:', error)
        return { genre: [], selectedGenreName: '' }
    }
}