import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}

export default LayoutPublic