import { useContext, useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { FetchContext } from '../components/FetchContext'
//import { cartContext } from '../components/CartContext'
//import {pizzas} from '../data/pizzas'
const Home = () => {
  // utilizamos el useState para guardar la información de la API

  //#####CAMBIAMOS ESTA CONSTANTE POR LA DEL USEcONTEXT#####
  //const [pizza, setPizza] = useState([])
  const {connect} = useContext(FetchContext)
  //const {handleAgregar} = useContext(cartContext)
  //Renderizado de pizzas a partir de la API del backend

  //#####PASAMOS LA CONEXIÓN A UN NUEVO COMPONENTE FetchContextProvider#####
  // useEffect (() => {
  //   fetch('http://localhost:5000/api/pizzas')
  //   .then((res) => res.json())
  //   .then((data) => {
  //       setPizza(data)
  //       //console.log(data)
  //   })
    
  // }, [])

  //grid grid-cols-1
  return (
    <div className = "w-full">
        <Header />
        <main className = " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-2 px-4 justify-items-center ">
          {/*con grid activamos el CSS GRID, grid-cols-1 activa 1 columna por defecto y se va cambiando según el tamaño del dispositivo hasta llegar a 3 columnas */}
         {connect.map((singlePizza)=>{
          return  <CardPizza
          key = {singlePizza.id}
          id= {singlePizza.id}
          name={singlePizza.name}
          price={singlePizza.price}
          ingredients={singlePizza.ingredients}
          img={singlePizza.img}
          desc={singlePizza.desc}
        />
         })}
         
        {/* <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella, ", " tomates, ", " jamón, ", " orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella, ", " gorgonzola, ", " parmesano, ", " provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella, ", " pepperoni, ", " orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        /> */}
        </main>
    </div>
  )
}

export default Home
