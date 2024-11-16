import React from 'react'

const Header = () => {
  return (
    <header 
    className='bg-cover bg-center h-64'
    style = {{
      backgroundImage: "url('./img/Header.jpg ')"
    }}>
      <div className = "flex flex-col justify-center items-center h-full text-white">
      <h1 className = "text-4xl font-bold">¡Pizzería Mamma Mía!</h1>
      <p className = "text-xs">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  )
}

export default Header
