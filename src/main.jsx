import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout'
import NuevoCliente,{action as nuevoCliente, loader as loaderGetRol} from './pages/NuevoCliente'
import Index,{loader as loaderUsuario} from './pages/Index'
import PaginaError from './components/PaginaError'
import EditarUsuario, {loader as loaderEditarUsuario, action as actionEditarUsuario} from './pages/EditarUsuario'
import {action as actionDeleteUser} from "./components/Usuario"
import {action as actionDeleteFun } from './components/Funcionalidades'
import ListaFun,{loader as loaderListaFun} from './pages/ListaFun'
import NuevoFun,{action as actionNuevoFun} from './pages/NuevoFun'
import EditarFuncionalidad, {loader as  loaderEditFun, action as actionEditFun} from './pages/EditarFuncionalidad'
import NuevoRol,{action as actionNuevoRol} from './pages/NuevoRol'
import ListaRol,{loader as loaderListaRol} from './pages/ListaRol'
import {action as actionDeleteRol} from "./components/Rol"
import EditarRol, {loader as loaderEditRol, action as  actionEditRol} from './pages/EditarRol'
import VerFunRol, {loader as loaderVerFunRol} from './pages/VerFunRol'

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
        loader: loaderGetRol,
        action: nuevoCliente
        
      
    },
    {
      path:'/usuario/:usuarioId/editar',
      element:<EditarUsuario/>,
      loader: loaderEditarUsuario,
      action: actionEditarUsuario
    },
    {
      path:'/usuario/:usuarioId/eliminar',
      action: actionDeleteUser

    },
    {
      path:'/usuario/rol',
      element:<ListaRol/>,
      loader: loaderListaRol
      
    },
    {
      path:'/rol/nuevo',
      element:<NuevoRol/>,
      action:actionNuevoRol
    },
    {
      path:'/funcionalidad',
      element:<ListaFun/>,
      loader:loaderListaFun  
    },
    {
      path:'/funcionalidad/nuevo',
      element:<NuevoFun/>,
      action:actionNuevoFun
    },
    {
      path:'/funcionalidad/:funcionalidadId/eliminar',
      action: actionDeleteFun

    },
    {
      path:'/funcionalidad/:funcionalidadId/editar',
      element:<EditarFuncionalidad/>,
      loader:loaderEditFun,
      action:actionEditFun

    },
    {
      path:'/rol/:rolId/eliminar',
      action: actionDeleteRol

    },
    {
      path:'/rol/:rolId/editar',
      element:<EditarRol/>,
      loader:loaderEditRol,
      action:actionEditRol

    },
    {
      path:'/rol/:rolId/ver',
      element:<VerFunRol/>,
      loader:loaderVerFunRol
    }
   
   
   
    

  ]
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
