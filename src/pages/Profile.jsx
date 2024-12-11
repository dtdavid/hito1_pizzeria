import React from 'react'

const Profile = () => {
  return (
    
    <main className="grid w-full h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8
     bg-cover bg-center"
     style ={{
        backgroundImage: "url('./img/pizza.jpg')",
        height: "calc(100vh - 107px)"
            }}>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form /*action="#" method="POST"*/ className="space-y-6"> 
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                    Email address
                    </label>
                <div className="mt-2">
                <input
                placeholder='nombre@dominio.com'
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 pl-2"
                />
                </div>
        </div>
    <div>
       {/*######################################Input Sign in ############################ */}
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Cerrar sesión
      </button>
    </div>
  </form>
</div>
</main>
  )
}

export default Profile
