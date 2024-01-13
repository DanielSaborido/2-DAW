import { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
  const { log, setLog } = useContext(UserContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const navigate = useNavigate()

  const handleSearchChange = async (e) => {
    const query = e.target.value
    setSearchQuery(query)

    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=37dea5560e494058945502465024de6a&search=${query}&page_size=10`)
      const data = await response.json()
      setSearchResults(data.results)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }

    setShowResults(query.length > 0 && searchResults.length > 0)
  }

  const handleResultClick = (gameId) => {
    setSearchQuery('')
    setShowResults(false)
    navigate(`/games/${gameId}`)
  }

  const cerrarSesion = () => {
    setLog({
      id: 0,
      username: '',
      email: '',
      password: '',
      genreList: [],
      validation: false
    })
    navigate('/')
  }

  useEffect(() => {
    return () => {
      setShowResults(false)
    }
  }, [])

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid my-2 d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <NavLink to="/" className="btn btn-outline-primary mr-2">Home</NavLink>
            <NavLink to="/games" className="btn btn-outline-primary mr-2">Games</NavLink>
            <NavLink to="/genres" className="btn btn-outline-primary mr-2">Genres/Tags</NavLink>
            <NavLink to="/others" className="btn btn-outline-primary">Others</NavLink>
            {log.validation && (
              <>
                <NavLink to={`/recommended/${log.id}`} className="btn btn-outline-primary mr-2">Recommended</NavLink>
                <NavLink to={`/favorites/${log.id}`} className="btn btn-outline-primary mr-2">Favorites</NavLink>
                <NavLink to="/contact" className="btn btn-outline-primary mr-2">Contact us</NavLink>
              </>
            )}
          </div>
          <div className="d-flex align-items-center position-relative">
            <input
              type="text"
              placeholder="Search game..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control mr-5"
            />
            {showResults && (
              <div className="bg-dark search-results position-absolute top-100 start-0 mt-2" style={{ zIndex: 1000 }}>
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => {
                      handleResultClick(result.id)
                      setShowResults(false)
                    }}
                    className="search-result-item"
                  >
                    {result.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {log.validation ? (
              <>
                <button onClick={() => navigate('/modify')}>{log.username}</button>
                <button onClick={() => cerrarSesion()}>Log Out</button>
              </>
            ) : (
              <button onClick={() => navigate('./loggin')}>Log in</button>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar