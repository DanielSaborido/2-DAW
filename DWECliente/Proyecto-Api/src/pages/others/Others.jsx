import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Others = () => {
  const { developers, familyPlatforms } = useLoaderData()

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
      <h1 className='text-center mb-3'>Developers</h1>
      <ul className="d-flex flex-wrap row-cols-md-5">
          {developers.map((developer) => (
              <li key={developer.id}  className="col">
                  <Link to={`/developers/${developer.id}`}>{developer.name}</Link>
              </li>
          ))}
      </ul>
    </>
  )
}

export default Others

export const loaderOthers = async ({ api_key }) => {
  try {
    const developersData = await fetch(`https://api.rawg.io/api/developers?key=${api_key}`);
    const developersResponse = await developersData.json();
    const platformsData = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${api_key}`);
    const platformsResponse = await platformsData.json();
    return { developers: developersResponse.results, familyPlatforms: platformsResponse.results };
  } catch (error) {
    console.error('Error fetching data for Others:', error);
    return { developers: [], familyPlatforms: [] };
  }
};