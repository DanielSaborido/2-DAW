import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/dashboard" className="btn btn-outline-primary">Dashboard</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar