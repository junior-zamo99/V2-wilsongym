import {Outlet, Link, NavLink, useLocation} from 'react-router-dom'

const layout = () => {
const location=useLocation()

  return (
    <div className=' md:flex md:min-h-screen'>
      <aside className=' md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className=' text-4xl font-black text-center text-white'>Usuarios</h2>
        <nav>
         <Link className='text-2xl block mt-2 hover:text-blue-300  text-white' to="/">Usuario</Link>
         <Link className='text-2xl block mt-2 hover:text-blue-300  text-white' to="/usuario/nuevo">Nuevo Usuario</Link>
        </nav>
        <h2 className=' text-4xl font-black text-center text-white'>Usuarios</h2>
       
      </aside>
      

      <main className='md:w-3/4 md: h-screen p-10 overflow-scroll'>
        <Outlet/>
      </main>
    </div>
  )
}

export default layout
