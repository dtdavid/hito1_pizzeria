import { useState } from 'react'
import { useToken } from '../components/TokenContext'


const Register = () => {
    const { register } = useToken()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPas, setConfirmPas] = useState('')
    //const [submit, setSubmit] = useState([])

     const validar = async (e) => {
        //console.log(email, password, confirmPas)
        e.preventDefault() //previene el envío automático del formulario
        
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ /*Al menos un caracter antes
        del @ que no sea un espacio vacío ni un @, un @, al menos 1 caracter que no
        sea espacio vacío o un @, un . y al menos un caracter que no sea espacio vacío
        o un @  */
        const regexPassword = /^.{6,}$/  // como mínimo 6 caracteres
        //console.log(email)

        /* comprobación del campo email que no esté vacío y que cumpla con la expresión 
        RegExp*/
        if(email.trim() ==='' || !regexEmail.test(email)) {
            alert ("Campo email vacío o dirección no válida")
            return
        }
        //comprobamos que los campos password no estén vacíos
        if (password.trim() === '' || confirmPas.trim() === '' ) {
            alert("campos password o confirmar password vacíos")
            return
        }
        //comprobamos que el campo password tenga al menos 6 caracteres
        if (!regexPassword.test(password)) {
            alert("campo mínimo de 6 caractéres!")
            return
        }
        //comprobamos que password y confirPas sean iguales
        if(password !== confirmPas) {
            alert("el password no está confirmado")
            return
        }
        /*Se ha enviado el formulario con éxito*/
        alert("¡ SEND SUCCESFULL!")
        await register(email, password) // una vez comprobado que todo está bien, capturamos en el register el email y el password
        // vaciamos el formulario en caso de que todo esté bien
        setEmail('')
        setPassword('')
        setConfirmPas('')
     }
    
  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Formulario de registro
          </h2>
        </div>

        {/* ################################Formulario ####################################*/}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" /*method="POST"*/ className="space-y-6" onSubmit = {validar}> 

            {/*###############################input email ###################################*/}

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                {/*<h3>{email}</h3>*/}
                <input
                  onChange={(e) => setEmail(e.target.value)} // obligatorio para capturar el valor del campo y proporcionarlo al setEmail
                  value={email} // el value tiene el valor a capturar y pasar al setEmail
                  id="email"
                  name="email"
                  type= "text" /*"email"*/
                  placeholder = "usuario@dominio.com"
                  /*required*/
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
              </div>
            </div>
            {/*#####################Input password#########################*/}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                {/*<h3>{password}</h3>*/} 
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type= "password"
                  //required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
              </div>
            </div>

            {/*############################ Input confirm password#######################################*/}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2">
                
                <input
                  value={confirmPas}
                  onChange={(e) => setConfirmPas(e.target.value)}
                  id="confirm-password"
                  name="confirm-password"
                  type= "confirm-password"
                  //required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
              </div>
            </div>
             {/*#############################Input Sign in######################################## */}
            <div>
                {/* <h3>{submit}</h3> */}
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

export default Register
