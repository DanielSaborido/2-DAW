import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutRoot = () => {
    const navigation = useNavigation()
    console.log(navigation)

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default LayoutRoot