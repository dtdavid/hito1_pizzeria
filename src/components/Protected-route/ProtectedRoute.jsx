// Protector de ruta para Profile
import { useToken } from '../TokenContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ( { children }) => {
    const { token } = useToken()
  return token ? children : <Navigate to="/Login"/>
}

export default ProtectedRoute
