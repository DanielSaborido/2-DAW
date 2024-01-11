import { useLoaderData, Link } from "react-router-dom"

const Console = () => {
  console.log(useLoaderData())
  const { platform, selectedPlatformName } = useLoaderData()

  return (
      <>
          <h1>Games for {selectedPlatformName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    platform.length > 0 ? (
                        platform.map((game) => (
                            <div key={game.id} className="col">
                                <Link to={`/games/${game.id}`}>
                                    <div className="card h-100">
                                        <img src={game.background_image} className="card-img-top h-50" alt={game.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (<div className="col"> <h2>No data found</h2> </div>)
                }
            </div>
      </>
  )
}

export default Console

export const loaderConsole = async({params, page_size, api_key}) => {
    console.log(params)
    try {
        const platformResponse = await fetch(`https://api.rawg.io/api/platforms/${params.id}?key=${api_key}`)
        const platformData = await platformResponse.json()
        const selectedPlatformName = platformData.name
        const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&platforms=${params.id}&page_size=${page_size}`)
        const gameData = await gameResponse.json()
        return { platform: gameData.results, selectedPlatformName }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { platform: [], selectedPlatformName: '' }
    }
}