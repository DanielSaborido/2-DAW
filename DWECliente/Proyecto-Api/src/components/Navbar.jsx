import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    console.log(useContext(UserContext))
    const {log, setLog} = useContext(UserContext)

    const navigate = useNavigate()
    const cerrarSesion = () =>{
        setLog({
            id: 0,
            username: '',
            email: '',
            password: '',
            genreList: [],
            validation: false
          })
        navigate("/")
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark w-100">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/games" className="btn btn-outline-primary">Games</NavLink>
                    <NavLink to="/genres" className="btn btn-outline-primary">Genres/Tags</NavLink>
                    <NavLink to="/platforms" className="btn btn-outline-primary">Platforms</NavLink>
                    <NavLink to="/developers" className="btn btn-outline-primary">Developers</NavLink>
                    {log.validation ? (
                        <>
                            <NavLink to={`/recommended/${log.id}`} className="btn btn-outline-primary">Recommended</NavLink>
                            <NavLink to={`/favorites/${log.id}`} className="btn btn-outline-primary">Favorites</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-primary">Contact us</NavLink>

                            <button onClick={() => navigate("/modify")}>{log.username}</button>
                            <button onClick={() => cerrarSesion()}>Log Out</button>
                        </>
                        ) : (<button onClick={() => navigate("./loggin")}>Log in</button>)}
                </div>
            </nav>
        </div>
    )
}

export default Navbar