import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const LayoutPrivate = () => {
    const {log} = useContext(UserContext)

    return (
        <>
            {
            log.validation? 
                <Outlet /> : 
                <Navigate to="/loggin" />
            }
        </>
    )
}

export default LayoutPrivate