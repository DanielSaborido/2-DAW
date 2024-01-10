import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Platforms = () => {
  const { familyPlatforms } = useLoaderData()

  console.log(familyPlatforms)
  return (
    <>
      <h1 className='text-center mb-3'>Platforms</h1>
      <div className="d-flex flex-wrap row-cols-md-5">
        {familyPlatforms.map((platforms) => (
          <div key={platforms.id} className="col">
            <div className="m-1">
              <h2>{platforms.name}</h2>
              <ul>
                  {platforms.platforms.map((platform) => (
                      <li key={platform.id}>
                          <Link to={`/platforms/${platform.id}`}>{platform.name}</Link>
                      </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Platforms

export const loaderPlatforms = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${api_key}`)
        const response = await data.json()
        return { familyPlatforms: response.results }
    } catch (error) {
        console.error("Error fetching platforms:", error)
        return { familyPlatforms: [] }
    }
}