import { useLoaderData, Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"
import { loaderGenre } from "../../context/Loaders"

const Genre = ({api_key, page_size}) => {
    const params = useParams()
  const { genre: initialGenre, selectedGenreName} = useLoaderData()
  const {log ,setLog} = useContext(UserContext)
  const {favorites} = log
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [genreList, setGenre] = useState(initialGenre)

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
              const { genre: newGenre } = await loaderGenre({ params, api_key, page_size, pageNumber })
              setGenre((prevGenre) => [...prevGenre, ...newGenre])
              setLoading(false)
          } catch (error) {
              console.error("Error fetching genre:", error)
              setLoading(false)
          }
      }

      fetchData()
  }, [pageNumber, setGenre, params, api_key, page_size])

  return (
      <>
          <h1 className='text-center m-3'>Games of {selectedGenreName}</h1>
          <div className="d-flex flex-wrap row row-cols-1 row-cols-md-6 g-2">
                {
                    genreList.length > 0 ? (
                        genreList.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
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

export default Genre