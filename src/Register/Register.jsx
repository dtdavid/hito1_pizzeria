import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPas, setConfirmPas] = useState('')
    const [submit, setSubmit] = useState([])

     const validar = (e) => {
        e.preventDefault() //previene el envío automático del formulario
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]$/
        if(email.trim() =='' || !regexEmail.test(email)) {
            alert ("Campo email vacío o dirección no válida")
        } else if (password.trim() == '' || confirmPas.trim() == '' ) {
            alert("campos password o confirmar password vacíos")
        }
     }
    
  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Formulario de registro
          </h2>
        </div>

        {/* Formulario */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" /*method="POST"*/ className="space-y-6" onSubmit = {validar}> 

            {/*input email */}

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <h3>{email}</h3>
                <input
                  onChange={(e) => setEmail(e.target.value)}
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
            {/*Input password*/}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <h3>{password}</h3>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type= "text"   /* "password"*/
                  //required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
              </div>
            </div>

            {/* Input confirm password*/}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2">
                <h3>{confirmPas}</h3>
                <input
                  onChange={(e) => setConfirmPas(e.target.value)}
                  id="password"
                  name="password"
                  type= "text" /*"password"*/
                  //required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
              </div>
            </div>
             {/*Input Sign in */}
            <div>
                {/* <h3>{submit}</h3> */}
              <button
                // onClick={() => setSubmit(handleSubmit)}
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
