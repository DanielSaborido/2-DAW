import { useContext, useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const LayoutPrivate = () => {
    const {user} = useContext(UserContext)

    /*Opcion uno
    const navigate = useNavigate()
    useEffect(() => {
        !user && navigate("/")
    }, [user])*/

    return (
        <>
            {
            user? 
                <Outlet /> : 
                <Navigate to="/" />
                //<h1>No estas logueado</h1>
            }
        </>
    )
}

export default LayoutPrivate