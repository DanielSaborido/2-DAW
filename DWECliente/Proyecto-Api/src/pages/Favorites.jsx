import { useContext } from 'react'
import { modifyUser } from '../dataBase/IndexDB'
import { UserContext } from '../context/UserContext'
import { Link, useLoaderData } from 'react-router-dom'

const Favorites = () => {
  const {log ,setLog} = useContext(UserContext)
  const { favorites } = useLoaderData()

  const removeFavorite = (id) => {
    setLog({
        ...log,
        favorites: log.favorites.filter((gameId) => gameId !== id)
    })
    modifyUser(log, log.id)
  }

  return (
      <>
          <h1 className='text-center m-3'>Favorites Games</h1>
          <div className="d-flex flex-wrap row row-cols-1 row-cols-md-6 g-2">
              {
                  favorites.length > 0 ? (
                    favorites.map((game) => (
                        <div key={game.id} className="mb-3">
                            <div className="card m-1 h-100 d-flex flex-column">
                                <Link to={`/games/${game.id}`}>
                                    <img src={game.background_image} className="card-img-top cover" alt={game.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{game.name}</h5>
                                        <p className="card-text">
                                            <strong>Platforms:</strong> {game.parent_platforms.map((platform) => platform.platform.name).join(', ')}
                                        </p>
                                        <h6 className="card-subtitle mb-2 text-muted">Release Date</h6>
                                        <p className="card-text">{game.released}</p>
                                    </div>
                                </Link>
                                <div className="mt-auto">
                                    <button onClick={() => removeFavorite(game.id)} className={`btn btn-danger w-100`}>Remove from Favorites</button>
                                </div>
                            </div>
                        </div>
                      ))
                  ) : (<div className="col"> <h2>You don't have favorites games</h2> </div>)
              }
          </div>
      </>
  )
}

export default Favorites