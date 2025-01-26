import { useContext, useState } from 'react'
//import {pizzaCart} from '../data/pizzas'
import {format} from '../utils/format'
import { cartContext } from '../components/CartContext'
import { useToken } from '../components/TokenContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    // sustituimos el useState por el cartContext
    //####ESTO CAMBIA AHORA CON EL CONTEXTPROVIDER####
        const {cart, handleAgregar, handleQuitar, total} = useContext(cartContext)
        const { token } = useToken()
        //console.log(token)
        const [ mensajePago, setMensajePago ] = useState('') // vamos a crear un estado sólo para mostrar el mensaje de pago en caso de que realmente sea exitoso

        const pagar = async () => {
            //console.log("Token:", token)
            //console.log("Cart:", cart)

            //ME HA LLEVADO UN BUEN RATO ENCONTRAR EL ERROR DE "NOT FOUNT" QUE ME APARECÍA EN LA CONSOLA Y EL ERROR ERA QUE ME FALTABA LA S FINAL DE CHECKOUTS EN LA URL 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️
            try {
                const response = await fetch("http://localhost:5000/api/checkouts", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ cart }),
                });
                if(response.ok) {
                    setMensajePago('Pago realizado con éxito')
                    alert('Pago realizado con éxito')
                
                } else {
                    setMensajePago('')
                    alert('Error al procesar el pago')
                
                }
            } catch (error) {
                setMensajePago('')
                alert("Ocurrió un error al procesar el pago.", error)
                
            }
        }
            

    //const [cart, setCart] = useContext(cartContext)


    //const [cart, setCart] = useState(pizzaCart)
    //const [totalPrice, setTotalPrice] = useState(0)
    //console.log(cart)
    // ########### ESTA LÓGICA SE PASÓ TODA PARA EL CARTCONTEXT########

    /*const handleAgregar = (id) => {
        // cart[indice].count++
        // setCart([...cart])
        // cambiamos trabajando con prev

        setCart((prevCart) => 
            prevCart.map((pizza) =>  //utilizo prevCart y lo mapeo para crear
         un nuevo objeto cambiando la key count si se modifica
            pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza)
        )
    }*/

    /*const handleQuitar = (id) => {
        // cart[indice].count--
        // {//Este método, aunque elimina pizzas del array, no elimina la pizza que se está bajando a 0, no funciona bien }
        // setCart([...cart.filter((pizza) => pizza.count > 0)])
        setCart((prevCart) => 
            prevCart.map((pizza) =>
            pizza.id === id ? {...pizza, count: pizza.count -1} : pizza
            ).filter((pizza) => pizza.count > 0) //aquí filtramos que las pizzas tengan el contador por encima de 0
        )
    }*/
    /* recorremos el estado del carrito (cart) con el método reduce, para sumar "0" ("sumar" hace de acumulador y su valor inicial es "0
        ") con el precio de la pizza * el
        número de pizzas que eligió el usuario, que debería ser como mínimo "1" y 
        llamamos a la función desde el h1 donde se muestra "Total: $" */

        //const total = cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0)


        //No se renderiza bien o no se actualiza junto con los cambios en el carro. Voy a probar con useMemo
    
    //     const total = useMemo(() => {
    //         return cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0)
    // }, [cart])

    //     useEffect(() => {
    //     setTotalPrice(total)
    // }, [total])
    //console.log(total)

    /* Cambiamos a mayúscula la primera letra y llamamos a la función desde el párrafo con el pizza.name o copiamos esta línea directamente en el párrafo. */

    //ESTA FUNCIÓN YA NO LA USAMOS
    /*const capitalize = (pizza) => {
        return pizza.charAt(0).toUpperCase() + pizza.slice(1).toLowerCase()
    }*/
  return (
    <>
    <div className="max-w-xl mx-auto px-4">
    <ul role="list" className="divide-y divide-gray-100 flex flex-col items-start px-4">
        <h2 className="text-xl font-semibold text-gray-900 mt-10">Detalles del pedido:</h2>
        {cart.map((pizza) => (
        <li key={pizza.id} className="flex justify-between w-full py-5 items-center">
                       {/*pizza.img y pizza.name */}
            <div className="flex items-center gap-x-4">
                <img 
                alt={pizza.name} 
                src={pizza.img} 
                className="w-18 h-14 objet-cover bg-gray-50" />
                <p className="text-lg font-semibold text-gray-900">{/*capitalize(pizza.name)*/ pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1).toLowerCase()}</p>
            </div>
                {/*precio - botones - contador */}
            <div className="flex items-center gap-x-4">
                <p className="text-lg font-semibold ml-2"> ${format(pizza.price)}</p>
                <button className="w-8 h-8 border rounded-md border-red-600 text-red-600 text-lg items-center justify-center" onClick={() => handleQuitar(pizza.id)}>-</button>
                <span key= {pizza.id} className="text-lg font-semibold">{pizza.count}</span>
                <button className="w-8 h-8 border  rounded border-blue-600 text-blue-600 text-lg items-center justify-center" onClick={() => handleAgregar(pizza)}>+</button>   {/*cambiamos pizza x pizza.id para pasar el objeto completo y manejarlo en otro lado*/}
            </div>
        </li>
        ))}
        <h1 className = "text-xl font-bold mt-5">Total: ${format(total)}</h1>
        {mensajePago && <h3 className='text-green-600 m-4'>{mensajePago}</h3>} {/* Solo se muestra si se ha realizado el pago*/}
        { token ? //disabled={!token} Esto se podría hacer directamente con la propiedad disabled
         <button 
         onClick = {pagar}
         className = "mt-2 px-6 py-2 border rounded-md text-center text-white bg-black ">Pagar</button>
          : 
        <Link to="/login">
          <button className = "mt-2 px-6 py-2 border rounded-md text-center text-white bg-blue-400">Login</button>
        </Link>
        }
        
    </ul>
    </div>
    </>
  )
}

export default Cart
