import React from 'react'
import {pizzaCart} from '../data/pizzas'
import {format} from '../utils/format'
import { useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart)
    const handleAgregar = (indice) => {
        cart[indice].count++
        setCart([...cart])
    }
    const handleQuitar = (indice) => {
        cart[indice].count--
        {/*Este método, aunque elimina pizzas del array, no elimina la pizza que se está bajando a 0, no funciona bien */}
        setCart([...cart.filter((pizza) => pizza.count > 0)])
    }
    {/* recorremos el estado del carrito (cart) con el método reduce, para sumar "0" ("sumar" hace de acumulador y su valor inicial es "0
        ") con el precio de la pizza * el
        número de pizzas que eligió el usuario, que debería ser como mínimo "1" y 
        llamamos a la función desde el h1 donde se muestra "Total: $" */ }
    const total = () => {
        return cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0)
    }
    {/* Cambiamos a mayúscula la primera letra y llamamos a la función desde el párrafo con el pizza.name o copiamos esta línea directamente en el párrafo. */}
    const capitalize = (pizza) => {
        return pizza.charAt(0).toUpperCase() + pizza.slice(1).toLowerCase()
    }
  return (
    <>
    <div className="max-w-xl mx-auto px-4">
    <ul role="list" className="divide-y divide-gray-100 flex flex-col items-start px-4">
        <h2 className="text-xl font-semibold text-gray-900 mt-10">Detalles del pedido:</h2>
        {cart.map((pizza, index) => (
        <li key={index} className="flex justify-between w-full py-5 items-center">
                       {/*pizza.img y pizza.name */}
            <div className="flex items-center gap-x-4">
                <img 
                alt={pizza.name} 
                src={pizza.img} 
                className="w-18 h-14 objet-cover bg-gray-50" />
                <p className="text-sm font-semibold text-gray-900">{/*capitalize(pizza.name)*/ pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1).toLowerCase()}</p>
            </div>
                {/*precio - botones - contador */}
            <div className="flex items-center gap-x-4">
                <p className="text-sm font-semibold">${format(pizza.price)}</p>
                <button className="w-8 h-8 border rounded-md border-red-600 text-red-600 text-lg items-center justify-center" onClick={() => handleQuitar(index)}>-</button>
                <span key= {index} className="text-sm font-semibold">{pizza.count}</span>
                <button className="w-8 h-8 border  rounded border-blue-600 text-blue-600 text-lg items-center justify-center" onClick={() => handleAgregar(index)}>+</button>
            </div>
        </li>
        ))}
        <h1 className = "text-xl font-bold mt-5">Total: ${format(total())}</h1>
        <button className = "mt-2 px-6 py-2 border rounded-md text-center text-white bg-black ">Pagar</button>
    </ul>
    </div>
    </>
  )
}

export default Cart
