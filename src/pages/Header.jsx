

const Header = () => {
  return (
    <header 
    className='w-full bg-cover bg-center h-56 '
    style = {{
      backgroundImage: "url('./img/Header.jpg ')"
    }}>
      <div className = "flex flex-col justify-center items-center h-full text-white bg-black bg-opacity-70">
      <h1 className = "text-4xl font-bold">¡Pizzería Mamma Mía!</h1>
      <p className = "text-xs">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="border-t border-gray-300 w-1/2 mt-4"/>
      </div>
    </header>
  )
}

export default Header
