import { useLoaderData, Link } from "react-router-dom"

const Tag = () => {
  const { tag, selectedTagName } = useLoaderData()

  return (
      <>
          <h1>Games of {selectedTagName}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    tag.length > 0 ? (
                        tag.map((game) => (
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

export default Tag

export const loaderTag = async ({ params, api_key }) => {
    try {
      const tagResponse = await fetch(`https://api.rawg.io/api/tags/${params.id}?key=${api_key}`)
      const tagData = await tagResponse.json()
      const selectedTagName = tagData.name
      const gameResponse = await fetch(`https://api.rawg.io/api/games?key=${api_key}&tags=${params.id}`)
      const gameData = await gameResponse.json()
      return { tag: gameData.results, selectedTagName }
    } catch (error) {
      console.error('Error fetching tag:', error)
      return { tag: [], selectedTagName: '' }
    }
}