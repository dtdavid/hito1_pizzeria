import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import {pizzas} from '../data/pizzas'
const Home = () => {
    
  return (
    <>
        <Header />
        <main className = " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4 px-4 max-w-7xl mx-auto">
          {/*con grid activamos el CSS GRID, grid-cols-1 activa 1 columna por defecto y se va cambiando según el tamaño del dispositivo hasta llegar a 3 columnas */}
         {pizzas.map((pizza)=>{
          return  <CardPizza
          key = {pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
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
    </>
  )
}

export default Home
