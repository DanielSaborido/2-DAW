import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Genres = () => {
  const { genres } = useLoaderData()

  console.log(genres)
  return (
    <>
      <h1>Genres</h1>
      <ul>
          {genres.map((genre) => (
              <li key={genre.id}>
                  <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
              </li>
          ))}
      </ul>
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