import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Navbar />
            <div>
                {
                    navigation.state === "loading" && (
                        <div>Loading</div>
                    )
                }
            </div>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}

export default LayoutPublic