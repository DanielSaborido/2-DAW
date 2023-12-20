import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/games" className="btn btn-outline-primary">Games</NavLink>
                    <NavLink to="/genres" className="btn btn-outline-primary">Genres</NavLink>
                    <NavLink to="/tags" className="btn btn-outline-primary">Tags</NavLink>
                    <NavLink to="/platforms" className="btn btn-outline-primary">Platforms</NavLink>
                    <NavLink to="/recommended" className="btn btn-outline-primary">Recommended</NavLink>
                    <NavLink to="/favorites" className="btn btn-outline-primary">Favorites</NavLink>
                    <NavLink to="/contact" className="btn btn-outline-primary">Contact us</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar