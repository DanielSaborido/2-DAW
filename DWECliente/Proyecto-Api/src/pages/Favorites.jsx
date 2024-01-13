import React, { useContext } from 'react'
import { getUserById, modifyUser } from '../dataBase/IndexDB'
import { UserContext } from '../context/UserContext'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Favorites = () => {
  const {log ,setLog} = useContext(UserContext)
  const { favorites } = useLoaderData()

  const removeFavourite = (id) => {
      if (log.validation) {
          setLog({
              ...log,
              favorites: log.favorites.filter((gameId) => gameId !== id)
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
          <h2 className='text-center mb-3'>Favorites Games</h2>
          <div className="d-flex flex-wrap row-cols-md-5">
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
                                  <button onClick={() => removeFavourite(game.id)}
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

export const loaderFavorites = async({api_key, params}) => {
    try {
        const log = await getUserById(parseInt(params.id, 10))
        const favorites = log.favorites
        console.log(favorites)
        let favoritesGames = []
        await Promise.all((favorites || []).map(async (gameId) => {
          const data = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${api_key}`)
          const response = await data.json()
          const { id, name, background_image } = response
          favoritesGames.push({ id, name, background_image })
      }))
        return { favorites: favoritesGames }
    } catch (error) {
        console.error("Error fetching favorites:", error)
        return { favorites: [] }
    }
}