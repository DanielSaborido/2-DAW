import { Link, useLoaderData } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { modifyUser } from "../dataBase/IndexDB"
import Swal from "sweetalert2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons' //npm install --save @fortawesome/free-solid-svg-icons

const GameCard = ({ game, addFavorite, favorites }) => (
  <div className="mb-3">
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
        <button
          onClick={() => addFavorite(game.id)}
          className={`btn ${favorites.includes(game.id) ? 'btn-danger' : 'btn-primary'} w-100`}
        >
          {favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  </div>
)

const PlatformSection = ({ title, games, addFavorite, favorites, platformId }) => (
  <>
    <h1 className='text-center m-3'>{title}</h1>
    <div className="d-flex flex-wrap row row-cols-1 row-cols-md-6 g-2">
      {games.length > 0 ? (
        games.map((game) => (
          <GameCard key={game.id} game={game} addFavorite={addFavorite} favorites={favorites} />
        ))
      ) : (
        <div className="col"> <h2>No hay datos</h2> </div>
      )}
      <div className="col">
        <div className="m-1 h-100 d-flex align-items-center justify-content-center">
          <Link to={`/platformParent/${platformId}`}>
            <div className="card-body">
              <FontAwesomeIcon icon={ faPlus } size="7x"/>
              <p className="card-text fs-5">More Games</p>
            </div>
          </Link>
        </div>
      </div>
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
        <PlatformSection title="New Nintendo Games" games={newNintendo} addFavorite={addFavorite} favorites={favorites} platformId={7}/>
        <PlatformSection title="New Android Games" games={newAndroid} addFavorite={addFavorite} favorites={favorites} platformId={8}/>
    </>
  )
}

export default Home