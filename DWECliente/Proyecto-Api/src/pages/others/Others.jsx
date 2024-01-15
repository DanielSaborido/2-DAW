import { useLoaderData, Link } from "react-router-dom"

const Others = () => {
  const { developers, familyPlatforms } = useLoaderData()

  return (
    <>
      <h1 className='text-center mb-3'>Platforms</h1>
      <div className="d-flex flex-wrap row-cols-md-6 g-2">
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
      <ul className="d-flex flex-wrap row-cols-md-6">
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