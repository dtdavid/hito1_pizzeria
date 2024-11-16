import React from 'react'
import { format } from '../utils/format'
import { GiShoppingCart } from "react-icons/gi"
import { PiEyesFill } from "react-icons/pi"
import { GiPizzaSlice } from "react-icons/gi"

const CardPizza = (props) => {
    console.log(props)
  return (
    <div className=" max-w-md rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 my-6">
        <div className = "border border-gray-200">
            <img className="w-full" src={props.img} alt={props.name}/>
            <h2 className="font-bold text-xl mb-2 text-gray-800 py-2 px-3" >Pizza {props.name}</h2>
        </div>
        <div className="px-6 py-4 border border-gray-200 ">
            <p className="text-gray-600 text-base flex justify-center items-center gap-1"><GiPizzaSlice className="mr-2" />Ingredientes:</p>
            <p className="text-gray-600 text-base flex justify-center">{props.ingredients}</p>
        </div>
        <div className="px-6 py-4 flex justify-center flex-col border border-gray-200">
            <h1 className ="flex justify-center mb-4 text-xl font-semibold">Precio: ${format(props.price)}</h1>
            <footer className = "flex flex-row justify-around mb-2">
            <button className="bg-white text-black py-1 px-2 flex flex-row items-center gap-1
             rounded-lg border border-black">Ver Más<PiEyesFill /></button>
            <button className="bg-black text-white py-1 px-2 flex flex-row items-center gap-1 rounded-lg ">Añadir<GiShoppingCart className="mr-2" size = {20} /></button>
             </footer>
        </div>
    </div>
  )
}

export default CardPizza
