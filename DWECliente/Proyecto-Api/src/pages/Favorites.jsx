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
          <h2 className='text-center mb-3'>Favorites Games</h2>
          <div className="d-flex flex-wrap row-cols-md-6 g-2">
              {
                  favorites.length > 0 ? (
                    favorites.map((game) => (
                          <div key={game.id} className="col">
                              <div className="card m-2">
                                  <Link to={`/games/${game.id}`}>
                                      <img src={game.background_image} className="card-img-top" alt={game.name} />
                                      <div className="card-body">
                                          <h5 className="card-title">{game.name}</h5>
                                      </div>
                                  </Link>
                                  <button onClick={() => removeFavorite(game.id)}
                                  className={`btn btn-danger`}>Remove from Favorites</button>
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