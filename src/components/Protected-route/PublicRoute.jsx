// protector de ruta para Login y Register
import { Navigate } from 'react-router-dom';
import { useToken } from '../TokenContext';

const PublicRoute = ( { children }) => {

    const { token } = useToken();

    return token ? <Navigate to="/"/> : children;
}

export default PublicRoute;
