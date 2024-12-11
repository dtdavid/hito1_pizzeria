//import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Footer from './Footer/Footer'
import Pizza from './pages/Pizza'
//import './index.css'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'

import {Routes, Route} from "react-router-dom"
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {
  
  return (
    <div className = "w-full flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <div className = "flex-grow flex justify-center items-center w-full">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          {/* Esta ruta se renderiza directamente desde el navegador con /pizza/p001 */}
          <Route path="/pizza/p001" element={<Pizza />}></Route> 
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route> 
        </Routes>
      </div>
      <Footer />      
    </div>
  )
}

export default App
