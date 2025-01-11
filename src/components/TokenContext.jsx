import { createContext, useContext, useState } from "react";

const TokenContext = createContext()


export const TokenContextProvider = ( { children }) => {

    const [ token, setToken ] = useState(true)
    const logout = () => setToken(false)
    


    return (
    <TokenContext.Provider value = {{ token,  setToken, logout }}>
         { children }
    </TokenContext.Provider>
    )
}

export const useToken = () => useContext(TokenContext)