import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Genres = () => {
  const { genres } = useLoaderData()

  console.log(genres)
  return (
    <>
      <h1>Genres</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
          {
              genres.length > 0 ? (
                  genres.map((genre) => (
                      <div key={genre.id} className="col">
                          <Link to={`/genres/${genre.id}`}>
                              <div className="card h-100">
                                  <img src={genre.image_background} className="card-img-top h-50" alt={genre.name} />
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
    </>
  )
}

export default Genres

export const loaderGenres = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/genres?key=${api_key}`)
        const response = await data.json()
        return { genres: response.results }
    } catch (error) {
        console.error("Error fetching genres:", error)
        return { genres: [] }
    }
}