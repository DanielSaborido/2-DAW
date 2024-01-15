import { Link, useLoaderData } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { modifyUser } from "../dataBase/IndexDB"
import Swal from "sweetalert2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const GameCard = ({ game, addFavorite, favorites }) => (
  <div className="col">
    <div className="card m-1">
        <Link to={`/games/${game.id}`}>
            <img src={game.background_image} className="card-img-top" alt={game.name} />
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
            </div>
        </Link>
        <button
            onClick={() => addFavorite(game.id)}
            className={`btn ${favorites.includes(game.id) ? 'btn-danger' : 'btn-primary'}`}
        >
            {favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    </div>
  </div>
)

const PlatformSection = ({ title, games, addFavorite, favorites, platformId }) => (
  <>
    <h2 className='text-center mb-3'>{title}</h2>
    <div className="d-flex flex-wrap row-cols-md-6">
      {games.length > 0 ? (
        games.map((game) => (
          <GameCard key={game.id} game={game} addFavorite={addFavorite} favorites={favorites} />
        ))
      ) : (
        <div className="col"> <h2>No hay datos</h2> </div>
      )}
        <Link to={`/platformParent/${platformId}`}>
          <FontAwesomeIcon icon={ faPlus } size="lg" />
        </Link>
    </div>
  </>
)

const Home = () => {
  const { newPC, newPlay, newXbox, newAndroid, newNintendo } = useLoaderData()
  const { log, setLog } = useContext(UserContext)
  const { favorites } = log

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
        <PlatformSection title="New PC Games" games={newPC} addFavorite={addFavorite} favorites={favorites} platformId={1}/>
        <PlatformSection title="New Playstation Games" games={newPlay} addFavorite={addFavorite} favorites={favorites} platformId={2}/>
        <PlatformSection title="New Xbox Games" games={newXbox} addFavorite={addFavorite} favorites={favorites} platformId={3}/>
        <PlatformSection title="New Android Games" games={newAndroid} addFavorite={addFavorite} favorites={favorites} platformId={7}/>
        <PlatformSection title="New Nintendo Games" games={newNintendo} addFavorite={addFavorite} favorites={favorites} platformId={8}/>
    </>
  )
}

export default Home