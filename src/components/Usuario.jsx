import {  useNavigate } from "react-router-dom"
import EditarUsuario from "../pages/EditarUsuario";

function Usuario({user}) {

    const nav=useNavigate();
  return (
   
        <tr  className="border-b ">
                  <td className="p-6 space-y-2" >
                        <p className="text-gray-600 "><span className="text-gray-800 uppercase font-bold">Nombre: </span>{user.nombre}</p>
                    <p className="text-gray-600 "><span className="text-gray-800 uppercase font-bold">Usuario: </span>{user.usuario}</p>
                    <p className="text-gray-600 "><span className="text-gray-800 uppercase font-bold">Carnet: </span>{user.ci}</p>
                  </td>
                  <td className="p-6">
                      <p className="text-gray-600 "><span className="text-gray-800 uppercase font-bold">Email: </span>{user.email}</p>
                      <p className="text-gray-600 "><span className="text-gray-800 uppercase font-bold">Telefono: </span>{user.telefono}</p>
                  </td>

                  <td className="p-6 flex gap-3">
                    <button 
                      type="button"
                      className="text-blue-600 hover:text-blue-700 uppercase font-bold"
                      onClick={()=> nav(`/usuario/${user.id}/editar`)}
                    >
                      Editar
                    </button>
                    <button 
                      type="button"
                      className="text-red-600 hover:text-red-700 uppercase font-bold"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
    
  )
}

export default Usuario