import { useContext } from 'react'
import { format } from '../utils/format'
import { GiShoppingCart } from "react-icons/gi" 
import { GiPizzaSlice } from "react-icons/gi"
import { AiFillLock, AiFillUnlock } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import { cartContext } from '../components/CartContext'
import { useToken } from '../components/TokenContext'


const Navbar = () => {
    //const total = 2500  // cambiamos esto por la línea de abajo
    const { total } = useContext(cartContext)
    //const token = true

    const { token, logout } = useToken()
    //console.log(token)
  return (
    <div className = 'w-full flex flex-row items-center justify-between px-4 py-2 bg-gray-800 shadow-md'>
      <div className = 'flex items-center space-x-4'>
        <p className = "flex items-center space-x-2 text-white">Pizzería Mamma Mia!</p>

        {/* Botón Home */}
        <NavLink to="/" className={ ({ isActive }) => isActive ? "active": "" }>
        
        <button className = "bg-black text-white py-1 px-4 rounded-lg flex items-center border border-white"><GiPizzaSlice className="mr-2" />Home</button> 
       
        </NavLink>
          {/* Botones que dependen de token  */}
        {
        token ? 
        (
          <>
            {/* Botón Profile */}
            <NavLink to="/Profile" className={ ({ isActive }) => isActive ? "active": "" }>
            
            <button className="bg-black text-white py-1 px-4 rounded-lg flex border border-white-500 items-center"><AiFillUnlock className="mr-2" />
            Profile
            </button>

            </NavLink>
            {/* Botón Logout */}
            <NavLink to="/" className={ ({ isActive }) => isActive ? "active": "" }>
            
            <button 
            onClick = { () => logout() }
            className='flex items-center px-4 py-1 bg-black shadow-md text-white border border-white-500 rounded-lg'><AiFillLock className="mr-2" />
            Logout
            </button>

            </NavLink>
          </>
          ) :
          ( 
          <>
            {/* Botón Login */}
            <NavLink to="/Login" className={ ({ isActive }) => isActive ? "active": "" }>
            
              <button className="flex items-center border border-white-500 text-white py-1 px-4 rounded-lg bg-black"><AiFillLock className="mr-2" />
              Login
              </button>

            </NavLink>
            {/* Botón Register */}
            <NavLink to="/Register" className={ ({ isActive }) => isActive ? "active": "" }>
            
              <button className="bg-black text-white py-1 px-4 rounded-lg flex items-center border border-white-500">
              <AiFillLock className="mr-2" />
              Register
              </button>

            </NavLink>
            
          </>
          )
          }
      </div>+
      <div className = 'flex items-center'>
       
      <Link to="/Cart">
        <button className = 'flex items-center px-5 py-1 border-2 border-cyan-600 text-cyan-600 bg-black rounded-lg font-bold'> <GiShoppingCart className="mr-2 text-2xl" />
        ${format(total)}
        </button>
      </Link>
     
      </div>
</div>
  )
}

export default Navbar
