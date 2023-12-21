import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutRoot = () => {
    const navigation = useNavigation()
    console.log(navigation)

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

export default LayoutRoot