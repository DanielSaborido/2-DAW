import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [log, setLog] = useState({
        id:0,
        username: '',
        email: '',
        phone: '',
        password: '',
        genreList: [],
        favorites: [],
        validation: false
      })

    return(
        <UserContext.Provider value={{log, setLog}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider