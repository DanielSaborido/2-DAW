const Recommended = () => {
  return (
    <div>Recommended</div>
  )
}

export default Recommended

export const loaderRecommendations = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games?key=${api_key}&genres=`)
        const response = await data.json()
        return { games: response.results }
    } catch (error) {
        console.error("Error fetching games:", error)
        return { games: [] }
    }
}