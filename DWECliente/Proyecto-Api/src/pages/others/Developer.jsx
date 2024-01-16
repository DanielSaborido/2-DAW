import { useLoaderData, Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"
import { loaderDeveloper } from "../../context/Loaders"

const Developer = ({ api_key, page_size}) => {
    const params = useParams()
  const { developer, selectedDeveloperName } = useLoaderData()
  const {log ,setLog} = useContext(UserContext)
  const {favorites} = log
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [developerList, setDeveloper] = useState(developer)

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

  useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          if (!loading) {
            setLoading(true)
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
          }
        }
      }
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
  }, [loading])
  
  useEffect(() => {
      const fetchData = async () => {
          try {
              const { developer: newDeveloper } = await loaderDeveloper({ params, api_key, page_size, pageNumber })
              setDeveloper((prevDeveloper) => [...prevDeveloper, ...newDeveloper])
              setLoading(false)
          } catch (error) {
              console.error("Error fetching developer:", error)
              setLoading(false)
          }
      }

      fetchData()
  }, [pageNumber, setDeveloper,params, api_key, page_size])

  return (
      <>
          <h1 className='text-center m-3'>Games of {selectedDeveloperName}</h1>
          <div className="d-flex flex-wrap row row-cols-1 row-cols-md-6 g-2">
                {
                    developerList.length > 0 ? (
                        developerList.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .map((game) => (
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
                                        <button onClick={() => addFavorite(game.id)} className={`btn ${favorites.includes(game.id) ? 'btn-danger' : 'btn-primary'} w-100`}>
                                            {favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No data found</h2> </div>)
                }
            </div>
      </>
  )
}

export default Developer