import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout'
import NuevoCliente,{action as nuevoCliente} from './pages/NuevoCliente'
import Index,{loader as loaderUsuario} from './pages/Index'
import PaginaError from './components/PaginaError'
import EditarUsuario,{loader as loaderEditUser} from './pages/EditarUsuario'


const router=createBrowserRouter([
{
  path:'/',
  element: <Layout/>,
  children:[
    {
      index:true,
      element: <Index/>,
      loader: loaderUsuario,
      errorElement:<PaginaError/>
    },
    {
      
        path:'/usuario/nuevo',
        element: <NuevoCliente/>,
        action: nuevoCliente
        
      
    },
    {
      path:'/usuario/:usuarioId/editar',
      element:<EditarUsuario/>,
      loader: loaderEditUser
    },
  ]
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)