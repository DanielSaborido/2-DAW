import { useLoaderData, Link } from "react-router-dom"
import { useContext } from "react"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"
import { UserContext } from "../../context/UserContext"

const Console = () => {
  const { platform, selectedPlatformName } = useLoaderData()
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
          <h1>Games for {selectedPlatformName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    platform.length > 0 ? (
                        platform.map((game) => (
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

export default Console

export const loaderConsole = async({params, page_size, api_key}) => {
    console.log(params)
    try {
        const platformResponse = await fetch(`https://api.rawg.io/api/platforms/${params.id}?key=${api_key}`)
        const platformData = await platformResponse.json()
        const selectedPlatformName = platformData.name
        const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&platforms=${params.id}&page_size=${page_size}`)
        const gameData = await gameResponse.json()
        return { platform: gameData.results, selectedPlatformName }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { platform: [], selectedPlatformName: '' }
    }
}