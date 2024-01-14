import { useLoaderData, Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import Swal from "sweetalert2"
import { modifyUser } from "../../dataBase/IndexDB"
import { loaderTag } from "../../context/Loaders"

const Tag = ({api_key, page_size}) => {
    const params = useParams()
  const { tag, selectedTagName } = useLoaderData()
  const {log ,setLog} = useContext(UserContext)
  const {favorites} = log
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [tagList, setTags] = useState(tag)

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
              const { tag: newTags } = await loaderTag({ params,api_key, page_size, pageNumber })
              setTags((prevTags) => [...prevTags, ...newTags])
              setLoading(false)
          } catch (error) {
              console.error("Error fetching tag:", error)
              setLoading(false)
          }
      }

      fetchData()
  }, [pageNumber, setTags,params, api_key, page_size])

  return (
      <>
          <h1>Games of {selectedTagName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    tagList.length > 0 ? (
                        tagList.filter((game, index, self) => index === self.findIndex((g) => g.id === game.id))
                        .map((game) => (
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

export default Tag