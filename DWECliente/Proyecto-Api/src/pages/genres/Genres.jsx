import { useLoaderData, Link } from "react-router-dom"

const Genres = () => {
  const { genres, tags } = useLoaderData()

  console.log(genres)
  return (
    <>
      <h2 className='text-center mb-3'>Genres</h2>
      <div className="d-flex flex-wrap row-cols-md-5">
          {
              genres.length > 0 ? (
                  genres.map((genre) => (
                      <div key={genre.id} className="col">
                          <Link to={`/genres/${genre.id}`}>
                              <div className="card m-1">
                                  <img src={genre.image_background} className="card-img-top" alt={genre.name} />
                                  <div className="card-body">
                                      <h5 className="card-title">{genre.name}</h5>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  ))
              ) : (<div className="col"> <h2>No hay datos</h2> </div>)
          }
      </div>
      <h2 className='text-center mb-3'>Tags</h2>
      <div className="d-flex flex-wrap row-cols-md-5">
          {
              tags.length > 0 ? (
                  tags.map((tag) => (
                      <div key={tag.id} className="col">
                          <Link to={`/tags/${tag.id}`}>
                              <div className="card m-1">
                                  <img src={tag.image_background} className="card-img-top" alt={tag.name} />
                                  <div className="card-body">
                                      <h5 className="card-title">{tag.name}</h5>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  ))
              ) : (<div className="col"> <h2>No hay datos</h2> </div>)
          }
      </div>
    </>
  )
}

export default Genres

export const loaderGenres = async({api_key}) => {
    try {
        const dataGenre = await fetch(`https://api.rawg.io/api/genres?key=${api_key}`)
        const responseGenre = await dataGenre.json()
        const dataTags = await fetch(`https://api.rawg.io/api/tags?page_size=40&key=${api_key}`)
        const responseTags = await dataTags.json()
        return { genres: responseGenre.results, tags: responseTags.results }
    } catch (error) {
        console.error("Error fetching datas:", error)
        return { genres: [], tags: [] }
    }
}