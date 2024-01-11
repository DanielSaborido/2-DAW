import { useLoaderData, Link } from "react-router-dom"

const Developer = () => {
  console.log(useLoaderData())
  const { developer, selectedDeveloperName } = useLoaderData()

  return (
      <>
          <h1>Games of {selectedDeveloperName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    developer.length > 0 ? (
                        developer.map((game) => (
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

export default Developer

export const loaderDeveloper = async({params, api_key, page_size}) => {
    console.log(params)
    try {
        const developerResponse = await fetch(`https://api.rawg.io/api/developers/${params.id}?key=${api_key}`)
        const developerData = await developerResponse.json()
        const selectedDeveloperName = developerData.name
        const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&developers=${params.id}&page_size=${page_size}`)
        const gameData = await gameResponse.json()
        return { developer: gameData.results, selectedDeveloperName }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { developer: [], selectedDeveloperName: '' }
    }
}