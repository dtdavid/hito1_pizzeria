//import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Footer from './Footer/Footer'
//import Cart from './pages/Cart'
//import Register from './Register/Register'
//import Login from './Login/Login'

function App() {
  
  return (
    <div className = "flex flex-col min-h-screen">
      <Navbar />
      <div className = "flex-grow">
      <Home />
      {/* <Cart /> */}
      {/*<Register/>*/}
      {/*<Login />*/}
      </div>
      <Footer />
      
    </div>
  )
}

export default App
