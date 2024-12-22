import {useState, useEffect} from 'react'
import { FaPizzaSlice } from "react-icons/fa"
//import { PiEyesFill } from "react-icons/pi"
import { format } from '../utils/format'
import { GiShoppingCart } from "react-icons/gi"

const Pizza = () => {

const [pizza, setPizza] = useState()

useEffect (() => {
    fetch('http://localhost:5000/api/pizzas/p001')
    .then((res)=> res.json())
    .then((data) => {
        setPizza(data)
        //console.log(data)
    })
    .catch((err) => console.error('Error fetching pizza:', err))
}, [])

 // Muestra un mensaje de carga mientras los datos se cargan
 // a veces no renderizaba nada!
  if (!pizza) {
     return <p>Cargando datos de la pizza...</p>;
  }

  return (
    <div className=" max-w-md rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 my-6">
        <div className = "border border-gray-200">
            <img className="w-full" src={pizza.img} alt={pizza.name}/>
            <h2 className="font-bold text-xl mb-2 text-gray-800 py-2 px-3" >Pizza {pizza.name}</h2>
        </div>
        <div className="px-6 py-4 border border-gray-200 ">
            <p className="text-gray-600 text-base flex justify-center items-center gap-1">Ingredientes:</p>
            <ul role="list" className=" flex items-center gap-2 justify-center"><FaPizzaSlice className="text-yellow-500 h-4 w-4" />
            {/*###########################Lista de ingredientes#################### */}

            {/*mapeamos la lista de ingredientes, para que no se rendericen pegados */}
            {pizza.ingredients.map((ingredient, index) => (  
              <li className = "text-gray-600" key={index}>{ingredient}
              {/*aquí le metemos una condición, para inserta una "," mientras el 
              indice sea menor al tamaño del array, así no se le pone la coma en
               el último elemento, aunque varíe de tamaño */}
              {index < pizza.ingredients.length - 1 && ", "}</li>
            ))}    
            </ul>
            
        </div>
        <div className="px-2 py-2 flex justify-center flex-col items-center border border-gray-200">
            <h1 className ="flex justify-center text-xl font-semibold my-2">Precio: ${format(pizza.price)}</h1>
        </div>
        <footer className = "flex flex-col justify-around py-3 px-4 gap-5 text-justify border border-gray-200">
            <h2 className="font-bold text-xl text-gray-800 pt-2 pl-2">Descripción:</h2>
            <p className="text-gray-600 text-base flex justify-center items-center px-2">{pizza.desc}</p>
            <button className="bg-black text-white py-1 px-2 flex flex-row items-center justify-center gap-2 rounded-lg w-28">Añadir<GiShoppingCart className="mr-2" size = {20} /></button>
        </footer>
        
    </div>
  )
}

export default Pizza
