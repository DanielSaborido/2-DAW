import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Platforms = () => {
  const { platforms } = useLoaderData()

  console.log(platforms)
  return (
    <>
      <h1>Platforms</h1>
      <ul>
          {platforms.map((platform) => (
              <li key={platform.id}>
                  <Link to={`/platforms/${platform.id}`}>{platform.name}</Link>
              </li>
          ))}
      </ul>
    </>
  )
}

export default Platforms

export const loaderPlatforms = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${api_key}`)
        const response = await data.json()
        return { platforms: response.results }
    } catch (error) {
        console.error("Error fetching platforms:", error)
        return { platforms: [] }
    }
}