import { createContext, useEffect, useState } from "react";  //añadir useContext
//import { pizzaCart } from "../data/pizzas"; # NO HARÍA FALTA
//import { format } from "../utils/format"; # NO HARÍA FALTA
// definimos el contexto del carrito
export const cartContext = createContext()

// un CartContextProvider para envolver la aplicación del carrito
const CartContextProvider = ({children}) => {
    //useState se inicializa omo un [] si no hay nada en el localStorage
    const  [cart, setCart] = useState([])
        
{/*   
        () => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : [] 
    })  //el estado del carrito empieza vacío

        // useEffect para que se ejecute la carga(localStorage.setItem), cuando el estado del Cart cambie de estado
        // y se obtiene el dato con (localStorage.getItem)
        useEffect(()=>{
            localStorage.setItem('cart', JSON.stringify(cart))
        }, [cart])

    //### localStorage para guardar el carrito y probar si funciona####

*/} 

    // ######TRASLADAMOS LA LÓGICA DEL Cart.jsx PARA EL Context########

    // Y CAMBIAMOS LA LÓGICA DE handleAgregar PARA VERIFICAR ANTES SI EXISTE LA PIZZA, PARA AÑADIR UNA NUEVA O AUMENTAR EL CONTADOR###
    const handleAgregar = (pizza) => {
        console.log(`Añadido el producto con id: ${pizza.id}`)
        /* cambiamos la lógica del handleAgregar, por si ya existe la pizza
        que estamos agregando, para que solo sume 1 al carrito, no es necesario
        renderizar el resto*/
        setCart((prevCart) => {
            const pizzaExistente = prevCart.find((item) => item.id === pizza.id)
            if(pizzaExistente){
                //si existe la pizza aumentamos el contador
                return prevCart.map((item) =>  
                item.id === pizza.id ? {...item, count: item.count + 1} : item)
            } else {
                //si no existe añadimos la pizza con el contador a 1
                return [...prevCart, { ...pizza, count: 1 }]
            }       
        })
    }

    const handleQuitar = (id) => {
        setCart((prevCart) => 
            prevCart.map((pizza) =>
            pizza.id === id ? {...pizza, count: pizza.count -1} : pizza
            ).filter((pizza) => pizza.count > 0) //aquí filtramos que las pizzas tengan el contador por encima de 0
        )
    }
    const total = cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0)
    //##################################################################################//


    return (
        <cartContext.Provider value = {{cart, handleAgregar, handleQuitar, total} }>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider