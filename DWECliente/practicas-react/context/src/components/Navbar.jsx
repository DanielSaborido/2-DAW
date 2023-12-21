import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext.jsx'

const Navbar = () => {
    console.log(useContext(UserContext))
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()
    const cerrarSesion = () =>{
        setUser(false)
        navigate("/")
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    {user ? (
                        <>
                            <NavLink to="/dashboard" className="btn btn-outline-primary">Dashboard</NavLink>
                            <button onClick={() => cerrarSesion()}>Log Out</button>
                        </>
                        ) : (<button onClick={() => setUser(true)}>Log In</button>)}
                </div>
            </nav>
        </div>
    )
}

export default Navbar