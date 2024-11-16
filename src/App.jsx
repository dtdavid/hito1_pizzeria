//import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Footer from './Footer/Footer'

function App() {
  
  return (
    <div className = "flex flex-col min-h-screen">
      <Navbar />
      <div className = "flex-grow">
      <Home />
      </div>
      
      <Footer />
      
    </div>
  )
}

export default App
