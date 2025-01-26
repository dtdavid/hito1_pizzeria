import { createContext, useContext, useState } from "react";

const TokenContext = createContext()


export const TokenContextProvider = ( { children }) => {

    const [ token, setToken ] = useState(()=> localStorage.getItem('token') || null)
    //const [ payload , setPayload ] = useState()
    const [ email, setEmail] = useState("")
    
    //console.log(setToken)
    const [ userData, setUserData ] = useState( { })

    // método para registrar usuarios ? para usar en Register.jsx
    const register = async (email, password) => {
        try {
            const ruta = 'http://localhost:5000/api/auth/register'
            const response = await fetch(ruta, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password })
            })

            if(response.ok) {  // está ok si está dentro del rando 200 - 299
                alert('Usuario registrado con éxito')
            } else {
                const error = await response.json()
                alert('Error al registrar', error)
            }
            const data = await response.json()
        } catch (error) {
            console.log('Error al registrar', error)
        }
        
    }

    // método para loguear usuarios ? para usar en Login.jsx

    const login = async (email, password) => {
        try {
            const ruta = 'http://localhost:5000/api/auth/login'
            const response = await fetch(ruta, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password })
            })
            const data = await response.json()
            if(response.ok) {  // está ok si está dentro del rando 200 - 299
                setToken(data.token)
                setEmail(data.email)
                localStorage.setItem('token', data.token)
                alert('Usuario logueado con éxito')
            } else {
                const error = await response.json()
                alert('Error al loguear', error)
            }
            
        } catch (error) {
            console.log('Error al loguear', error)
        }
        
    }

    // método para extraer el payload del token y con esto mostrar data en el perfil ? para traer todo lo que hay en el payload

    const getProfile = async () => {
        try {
            const ruta = 'http://localhost:5000/api/auth/me'
            const response = await fetch(ruta, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
                
            })
            
            if(response.ok) {  // está ok si está dentro del rando 200 - 299
                const data = await response.json()
                setUserData(data)
                //setEmail(data.email)
                
            } else {
                const error = await response.json()
                alert('Error: ', error)
            }
            
        } catch (error) {
            console.log('Error: ', error)
        }
        
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        setEmail("")
    }


    return (
    <TokenContext.Provider value = {{ token,  setToken, logout, register, login, email, getProfile, userData }}>
         { children }
    </TokenContext.Provider>
    )
}

export const useToken = () => useContext(TokenContext)