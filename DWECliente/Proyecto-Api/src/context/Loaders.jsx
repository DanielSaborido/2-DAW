import { getUserById } from "../dataBase/IndexDB"

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

export const loaderGames = async({api_key, page_size, pageNumber}) => {
    try {
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const response = await data.json()
        return { games: response.results }
    } catch (error) {
        console.error("Error fetching games:", error)
        return { games: [] }
    }
}

export const loaderGame = async({params, api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${api_key}`)
        const response = await data.json()
        return { game: response }
    } catch (error) {
        console.error("Error fetching game:", error)
        return { game: [] }
    }
}
  
export const loaderGenres = async ({ api_key }) => {
  try {
    const fetchAndExtract = async (url) => {
      const data = await fetch(url)
      const response = await data.json()
      return response.results || []
    }

    const genres = await fetchAndExtract(`https://api.rawg.io/api/genres?key=${api_key}`)
    const tags = await fetchAndExtract(`https://api.rawg.io/api/tags?page_size=40&key=${api_key}`)

    return { genres, tags }
  } catch (error) {
    console.error("Error fetching datas:", error)
    return { genres: [], tags: [] }
  }
}

export const loaderGenre = async({params, api_key, page_size, pageNumber}) => {
    try {
        const genreResponse = await fetch(`https://api.rawg.io/api/genres/${params.id}?key=${api_key}`)
        const genreData = await genreResponse.json()
        const selectedGenreName = genreData.name
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&genres=${params.id}&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&genres=${params.id}&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const gameData = await data.json()
        return { genre: gameData.results, selectedGenreName }
    } catch (error) {
        console.error('Error fetching genre:', error)
        return { genre: [], selectedGenreName: '' }
    }
}

export const loaderTag = async ({ params, api_key, page_size, pageNumber }) => {
    try {
      const tagResponse = await fetch(`https://api.rawg.io/api/tags/${params.id}?key=${api_key}`)
      const tagData = await tagResponse.json()
      const selectedTagName = tagData.name
      let apiUrl
      if (pageNumber === 1) {
          apiUrl = `https://api.rawg.io/api/games?key=${api_key}&tags=${params.id}&page_size=${page_size}`
      } else {
          apiUrl = `https://api.rawg.io/api/games?key=${api_key}&tags=${params.id}&page_size=${page_size}&page=${pageNumber}`
      }
      const data = await fetch(apiUrl)
      const gameData = await data.json()
      return { tag: gameData.results, selectedTagName }
    } catch (error) {
      console.error('Error fetching tag:', error)
      return { tag: [], selectedTagName: '' }
    }
}

export const loaderOthers = async ({ api_key }) => {
  try {
    const developersData = await fetch(`https://api.rawg.io/api/developers?key=${api_key}`)
    const developersResponse = await developersData.json()
    const platformsData = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${api_key}`)
    const platformsResponse = await platformsData.json()
    return { developers: developersResponse.results, familyPlatforms: platformsResponse.results }
  } catch (error) {
    console.error('Error fetching data for Others:', error)
    return { developers: [], familyPlatforms: [] }
  }
}

export const loaderPlatform = async({params, api_key, page_size, pageNumber }) => {
    try {
        const parentPlatformId = parseInt(params.id)
        const platformResponse = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${api_key}`)
        const platformData = await platformResponse.json()
        const parentPlatforms = platformData.results.find(parent => parent.id === parentPlatformId)
        const selectedPlatformName = parentPlatforms ? parentPlatforms.name : null
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&parent_platforms=${params.id}&ordering=-released&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&parent_platforms=${params.id}&ordering=-released&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const gameData = await data.json()
        return { platformParent: gameData.results, selectedPlatformName }
    } catch (error) {
        console.error("Error fetching parent Platform:", error)
        return { platformParent: [], selectedPlatformName: '' }
    }
}

export const loaderConsole = async({params, api_key, page_size, pageNumber }) => {
    try {
        const platformResponse = await fetch(`https://api.rawg.io/api/platforms/${params.id}?key=${api_key}`)
        const platformData = await platformResponse.json()
        const selectedPlatformName = platformData.name
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&platforms=${params.id}&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&platforms=${params.id}&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const gameData = await data.json()
        return { platform: gameData.results, selectedPlatformName }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { platform: [], selectedPlatformName: '' }
    }
}

export const loaderDeveloper = async({params, api_key, page_size, pageNumber }) => {
    try {
        const developerResponse = await fetch(`https://api.rawg.io/api/developers/${params.id}?key=${api_key}`)
        const developerData = await developerResponse.json()
        const selectedDeveloperName = developerData.name
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&developer=${params.id}&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&developer=${params.id}&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const gameData = await data.json()
        return { developer: gameData.results, selectedDeveloperName }
    } catch (error) {
        console.error("Error fetching console:", error)
        return { developer: [], selectedDeveloperName: '' }
    }
}

export const loaderFavorites = async({api_key, params}) => {
    try {
        const log = await getUserById(parseInt(params.id, 10))
        const favorites = log.favorites
        let favoritesGames = []
        await Promise.all((favorites || []).map(async (gameId) => {
          const data = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${api_key}`)
          const response = await data.json()
          const { id, name, background_image } = response
          favoritesGames.push({ id, name, background_image })
      }))
        return { favorites: favoritesGames }
    } catch (error) {
        console.error("Error fetching favorites:", error)
        return { favorites: [] }
    }
}

export const loaderRecommendations = async({params, api_key, page_size, pageNumber}) => {
    try {
        const log = await getUserById(parseInt(params.id, 10))
        const genresList = log.genreList.toString()
        let apiUrl
        if (pageNumber === 1) {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&genres=${genresList}&ordering=-released&page_size=${page_size}`
        } else {
            apiUrl = `https://api.rawg.io/api/games?key=${api_key}&genres=${genresList}&ordering=-released&page_size=${page_size}&page=${pageNumber}`
        }
        const data = await fetch(apiUrl)
        const gameData = await data.json()
        return { recommended: gameData.results }
    } catch (error) {
        console.error("Error fetching recommended:", error)
        return { recommended: [] }
    }
}