import  { useContext } from 'react'
import { format } from '../utils/format'
import { GiShoppingCart } from "react-icons/gi"
import { PiEyesFill } from "react-icons/pi"
//import { GiPizzaSlice } from "react-icons/gi"
import { FaPizzaSlice } from "react-icons/fa"
import  { cartContext } from '../components/CartContext'
import { Link } from 'react-router-dom'
//import { FetchContext } from '../components/FetchContext'

const CardPizza = (props) => {
    //console.table(props)
    //traemos el handleAgregar de nuestro useContext para manejar el botón añadir
    const { handleAgregar } = useContext(cartContext)
    // acceder a las pizzas desde FetchContext
    //const {connect} = useContext(FetchContext)

  return (
    <div className=" max-w-md rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 my-6">
        <div className = "border border-gray-200">
            <img className="w-full" src={props.img} alt={props.name}/>
            <h2 className="font-bold text-xl mb-2 text-gray-800 py-2 px-3" >Pizza {props.name}</h2>
        </div>
        <div className="px-6 py-4 border border-gray-200 ">
            <p className="text-gray-600 text-base flex justify-center items-center gap-1">Ingredientes:</p>
            <ul role="list" className=" flex items-center justify-center flex-wrap space-x-1">
              <FaPizzaSlice className="text-yellow-500 h-4 w-4 mr-2" />
              {/*###########################Lista de ingredientes#################### */}

              {/*mapeamos la lista de ingredientes, para que no se rendericen pegados */}
              {props.ingredients.map((ingredient, index) => (  
              <li className = "text-gray-600 flex items-center" key={index}>{ingredient}
              {/*aquí le metemos una condición, para inserta una "," mientras el 
              indice sea menor al tamaño del array, así no se le pone la coma en
               el último elemento, aunque varíe de tamaño */}
              {index < props.ingredients.length - 1 && ", "}</li>
            ))}    
            </ul>
            {/* <p className="text-gray-600 text-base flex justify-center"><GiPizzaSlice className="mr-2" />{props.ingredients}</p> */}
        </div>
        <div className="px-6 py-4 flex justify-center flex-col border border-gray-200">
            <h1 className ="flex justify-center mb-4 text-xl font-semibold">Precio: ${format(props.price)}</h1>
            <footer className = "flex flex-row justify-around mb-2">
               <Link to={`/pizza/${props.id}`} state={props}> {/*pasamos con state las props de la pizza, así evitamos tener que usar la url*/}
            <button 
            className="bg-white text-black py-1 px-2 flex flex-row items-center gap-1
             rounded-lg border border-black">Ver Más<PiEyesFill /></button>
             </Link>
             {/* añadimos evento onClick al botón Añadir, para llamar a la función handleAgregar */}
            <button
             onClick = {()=> {
             //console.log("Añadiendo pizza con id:", props.id)
             handleAgregar({id:props.id, name: props.name, price: props.price, img: props.img, desc: props.desc })}}
             className="bg-black text-white py-1 px-2 flex flex-row items-center gap-1 rounded-lg ">Añadir<GiShoppingCart className="mr-2" size = {20} /></button>
             </footer>
        </div>
    </div>
  )
}

export default CardPizza
