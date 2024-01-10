import { useLoaderData, Link } from "react-router-dom"

const GameCard = ({ game }) => (
    <div className="col">
      <Link to={`/games/${game.id}`}>
        <div className="card m-1">
          <img src={game.background_image} className="card-img-top" alt={game.name} />
          <div className="card-body">
            <h5 className="card-title">{game.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
  
  const PlatformSection = ({ title, games }) => (
    <>
      <h2 className='text-center mb-3'>{title}</h2>
      <div className="d-flex flex-wrap row-cols-md-5">
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <div className="col"> <h2>No hay datos</h2> </div>
        )}
      </div>
    </>
  );
  
const Home = () => {
    const { newPC, newPlay, newXbox, newAndroid, newNintendo } = useLoaderData()
    
    return (
      <>
          <PlatformSection title="New PC Games" games={newPC} />
          <PlatformSection title="New Playstation Games" games={newPlay} />
          <PlatformSection title="New Xbox Games" games={newXbox} />
          <PlatformSection title="New Android Games" games={newAndroid} />
          <PlatformSection title="New Nintendo Games" games={newNintendo} />
      </>
    )
}
  

export default Home

export const loaderNews = async({api_key}) => {
    try {
        const fetchAndFilter = async (platform) => {
            const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&parent_platforms=${platform}&ordering=-released&page_size=10`)
            const response = await data.json()
            const filteredResults = response.results.filter(game => game.background_image !== null)
            return filteredResults
          }
      
          const fillEmptySlots = async (gamesArray, requiredLength, platform) => {
            const emptySlots = requiredLength - gamesArray.length
            if (emptySlots > 0) {
              const additionalData = await fetch(`https://api.rawg.io/api/games?key=${api_key}&parent_platforms=${platform}&ordering=-released&page_size=${emptySlots+5}&page=2`)
              const additionalResponse = await additionalData.json()
              const additionalGames = additionalResponse.results.filter(game => game.background_image !== null)
              return [...gamesArray, ...additionalGames]
            }
            return gamesArray.slice(0, requiredLength)
          }
      
          const newPC = await fetchAndFilter(1)
          const newPlay = await fetchAndFilter(2)
          const newXbox = await fetchAndFilter(3)
          const newNintendo = await fetchAndFilter(7)
          const newAndroid = await fetchAndFilter(8)
      
          const finalPC = await fillEmptySlots(newPC, 5, 1)
          const finalPlay = await fillEmptySlots(newPlay, 5, 2)
          const finalXbox = await fillEmptySlots(newXbox, 5, 3)
          const finalNintendo = await fillEmptySlots(newNintendo, 5, 7)
          const finalAndroid = await fillEmptySlots(newAndroid, 5, 8)
      
          return { newPC: finalPC, newPlay: finalPlay, newXbox: finalXbox, newNintendo: finalNintendo, newAndroid: finalAndroid }
    } catch (error) {
        console.error("Error fetching newGames:", error)
        return { newPC: [], newPlay: [], newXbox: [], newNintendo: [], newAndroid: [] }
    }
}