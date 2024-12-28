import {createContext, useEffect, useState} from 'react'
//creación del contexto
export const FetchContext = createContext()

//creación del provider
const FetchContextProvider = ({children}) => {

    const [connect, setConnect] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
        .then((res) => res.json())
        .then((data) => {
            setConnect(data)
        })
        .catch((error) => console.error('Error fetching data:', error))
    }, [])


    return (
        <FetchContext.Provider value = {{connect}}>
            {children}
        </FetchContext.Provider>
    )
}
export default FetchContextProvider