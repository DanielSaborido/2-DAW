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
            const response = await fetch(`https://api.rawg.io/api/games?key=37dea5560e494058945502465024de6a&search=${query}`)
            const data = await response.json()
            setSearchResults(data.results)
        } catch (error) {
            console.error('Error fetching search results:', error)
        }

        setShowResults(query.length > 0 && searchResults.length > 0)
    }

    const handleResultClick = (gameId) => {
        console.log(`Clicked on game with ID: ${gameId}`)
        setSearchQuery('')
        setShowResults(false)
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
            <nav className="navbar navbar-dark bg-dark w-100">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/games" className="btn btn-outline-primary">Games</NavLink>
                    <NavLink to="/genres" className="btn btn-outline-primary">Genres/Tags</NavLink>
                    <NavLink to="/others" className="btn btn-outline-primary">Others</NavLink>
                    <input
                        type="text"
                        placeholder="Search game..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="form-control mr-2"
                    />
                    {showResults && (
                        <ul className="search-results">
                            {searchResults.map((result) => (
                                <li key={result.id} onClick={() => handleResultClick(result.id)}>
                                    {result.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    {log.validation ? (
                        <>
                            <NavLink to={`/recommended/${log.id}`} className="btn btn-outline-primary">Recommended</NavLink>
                            <NavLink to={`/favorites/${log.id}`} className="btn btn-outline-primary">Favorites</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-primary">Contact us</NavLink>
                            <button onClick={() => navigate('/modify')}>{log.username}</button>
                            <button onClick={() => cerrarSesion()}>Log Out</button>
                        </>
                    ) : (
                        <button onClick={() => navigate('./loggin')}>Log in</button>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar