//import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Footer from './Footer/Footer'
import Pizza from './pages/Pizza'
//import './index.css'
//import Cart from './pages/Cart'
//import Register from './Register/Register'
//import Login from './Login/Login'

function App() {
  
  return (
    <div className = "w-full flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <div className = "flex-grow flex justify-center items-center w-full">
      {/* <Pizza /> */}
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
