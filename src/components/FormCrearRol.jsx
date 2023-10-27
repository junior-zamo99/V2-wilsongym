import React from 'react'
import { useState,useEffect } from "react"
const FormCrearRol = () => {

    const [funcionalidad, setfuncionalidad]=useState([])
    const [funcionalidadesSeleccionadas, setFuncionalidadesSeleccionadas] = useState([]);
    useEffect(()=>{
        obtenerDatos()
    },[])
  
    const obtenerDatos=async()=>{
        const respuesta= await fetch('http://localhost:3000/Funcionalidad')
    const resultado= await respuesta.json()
    
    setfuncionalidad(resultado)
    }
    const handleCheckboxChange = (funcionalidadId) => {
      if (funcionalidadesSeleccionadas.includes(funcionalidadId)) {
        // Deseleccionar una funcionalidad
        setFuncionalidadesSeleccionadas(funcionalidadesSeleccionadas.filter((id) => id !== funcionalidadId));
      } else {
        // Seleccionar una funcionalidad
        setFuncionalidadesSeleccionadas([...funcionalidadesSeleccionadas, funcionalidadId]);
      }
      
  
      console.log(funcionalidadesSeleccionadas)
    };
  
   
    return (
      <>
      <div className="mb-4">
             <label
                 className="text-gray-800"
                 htmlFor="nombre"
             >Nombre:</label>
             <input 
                 id="nombre"
                 type="text"
                 className="mt-2 block w-full p-3 bg-gray-50"
                 placeholder="Nombre de la Funcionalidad"
                 name="nombre"
                 
                
               
             />
            <div>
            <label
                 className="text-gray-800"
                 htmlFor="funcionalidad"
             >Nombre:</label>
            {funcionalidad.map((fun) => (
              <div key={fun.id}>
                <label>
                  <input 
                  
                  name='permiso'
                  id='permiso'
                    type="checkbox"
                    className=' form-checkbox checked:border-green-500 '
                    value={funcionalidadesSeleccionadas}
                    checked={funcionalidadesSeleccionadas.includes(fun.id)}
                    onChange={() => handleCheckboxChange(fun.id)}
                    
                    
                  />
                  {fun.nombre}
                </label>
              </div>
            ))}
           
          </div>
       </div>
        
  
  </>
    )
}

export default FormCrearRol
