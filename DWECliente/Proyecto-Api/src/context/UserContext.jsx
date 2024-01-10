import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [log, setLog] = useState()

    return(
        <UserContext.Provider value={{log, setLog}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider