
import { useLoaderData } from "react-router-dom"
import{GetRol} from "../api/Rol"
import { useState, useEffect } from "react"


export async function loader({params}){
    
    const user= await GetRol(params.rolId)
    
    return user
  }
  


const VerFunRol = () => {
const result=useLoaderData()

const[funcionalidad, setfuncionalidad]=useState([])
useEffect(()=>{
    obtenerDatos()
},[])

const obtenerDatos=async()=>{
    const respuesta= await fetch('http://localhost:3000/Funcionalidad')
const resultado= await respuesta.json()
setfuncionalidad(resultado)}

  return (
    <div className="max-w-lg mx-auto mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
     <h2 className="text-2xl font-semibold mb-4">
        Funcionalidades asociadas al rol: 
        <span className="text-blue-500">{result.nombre}</span>
      </h2>
      <ul className="list-disc pl-6">
        {funcionalidad.map((fun) => (
          result.permiso.includes(fun.id) && (
            <li key={fun.id} className="text-green-600">
              {fun.nombre}
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

export default VerFunRol
