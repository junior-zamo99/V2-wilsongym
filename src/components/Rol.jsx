import {  useNavigate, Form, redirect } from "react-router-dom"


const Rol = ({rol}) => {
  return (
    <tr  className="border-b ">
    <td className="p-6 space-y-2" >
          <p className="text-gray-800 uppercase font-bold">{rol.nombre}</p> 
    </td>
   

    <td className="p-6 flex gap-3">
          <button 
              type="button"
              className="text-blue-600 hover:text-blue-700 uppercase font-bold"
             
          >
              Editar
          </button>
          <Form
    
         
       
      >
          <button 
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold"
          >
            Eliminar
          </button>
      </Form>
          
      </td>
</tr>
  )
}

export default Rol
