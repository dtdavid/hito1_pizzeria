import React from 'react'
import { format } from '../utils/format'
import { GiShoppingCart } from "react-icons/gi" 
import { GiPizzaSlice } from "react-icons/gi"
import { AiFillLock, AiOutlineLock, AiFillUnlock } from "react-icons/ai"

const Navbar = () => {
    const total = 2500
    const token = true
  return (
    <div className = 'flex flex-row items-center justify-between px-4 py-2 bg-gray-800 shadow-md'>
      <div className = 'flex items-center space-x-4'>
        <p className = "flex items-center space-x-2 text-white">Pizzería Mamma Mia!</p>
        <button className = "bg-black text-white py-1 px-4 rounded-lg flex items-center border border-white"><GiPizzaSlice className="mr-2" />Home</button>  
        {token ? (
          <>
          <button className="flex items-center border-2 border-white-500 text-white py-1 px-4 rounded-lg bg-black"><AiFillLock className="mr-2" />Login</button>
          <button class="bg-black text-white py-1 px-4 rounded-lg flex items-center border border-white-500">
          <AiFillLock className="mr-2" />Register</button>
          </>) :( 
          <>
          <button className="bg-black text-white py-1 px-4 rounded-lg flex border border-white-500 items-center"><AiFillUnlock className="mr-2" />
          Profile</button>
          <button className='flex items-center px-4 py-1 bg-black shadow-md text-white border border-white-500 rounded-lg'><AiFillLock className="mr-2" />Logout</button>
          </>)}
      </div>
      <div className = 'flex items-center'>
        <button className = 'flex items-center px-5 py-1 border-2 border-cyan-600 text-cyan-600 bg-black rounded-lg font-bold'> <GiShoppingCart className="mr-2 text-2xl" />${format(total)}</button>
      </div>
</div>
  )
}

export default Navbar
