import { useState } from 'react'
import { useToken } from '../components/TokenContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //creamos un useState para mostrar un mensaje de error
  const [error, setError] = useState('')
  //creamos un useState para mostrar un mensaje de exito
  const [exito, setExito] = useState('')

  const enviar = async (e) => {
    //console.log(email, password)
    e.preventDefault() // aquí evitamos el comportamiento del evento onSubmit y así podamos evaluar el formulario
    //usamos expresiones RexExp para validaciones simples del campo email y password
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    const regexPassword = /^.{6,}$/
    //validamos que los campos no se envíen vacíos
    if(email.trim() == "" || password.trim() == "") {
      //se mostrará el siguiente error
      setError('los campos email o password están vacíos')
      return
    }
    //validaremos que cumpla la expresión email
    if (!regexEmail.test(email)) {
      setError('el campo email no cumple los requisitos')
      return
    }
    //validamos la expresión del password
    if (!regexPassword.test(password)) {
      setError("campo mínimo de 6 caractéres!")
      return
    }
    //si cumple todo, mostramos un mensaje de éxito
      setExito('Envío satisfactorio!')
      await login(email, password)
      navigate('/profile')

    setEmail('')
    setPassword('')
    setError('')

    //tengo que ponerle un retardo al setExito para que muestre el error
    setTimeout(() =>{
    setExito('')}, 3000)
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

<div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
    Login
  </h2>
</div>

{/* ############################Formulario #########################################*/}

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form /*action="#" method="POST"*/ className="space-y-6" onSubmit = {enviar}> {/*onSubmit que llama a la función enviar*/}

    {/*##################################input email################################ */}

    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email address
      </label>
      <div className="mt-2">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value = {email}
          id="email"
          name="email"
          type="text"
          //required
          autoComplete="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
        />
      </div>
    </div>
    {/*##########################################Input password##########################*/}
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          Password
        </label>

      </div>
      <div className="mt-2">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value = {password}
          id="password"
          name="password"
          type="password"
          //required
          autoComplete="current-password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
        />
      </div>
      
    </div>
    
     {/*mostramos un condicional sencillo, para mostrar un span en caso de que hubiera un error 
     o salga bien el formulario*/}
     {error && (
     <span  className='w-full rounded-md border-0 my-1 py-1.5 text-red-600 shadow-sm'>{error}</span>
     )}
     {exito && (
     <span  className='w-full rounded-md border-0 my-1 py-1.5 text-green-600 shadow-sm'>{exito}</span>
     )}
    <div>

       {/*######################################Input Sign in ############################ */}
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </form>

</div>
</div>
    </>
  )
}

export default Login
