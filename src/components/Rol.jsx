import {  useNavigate, Form, redirect } from "react-router-dom"
import {eliminarRol} from "../api/Rol"

export async function action({params}){
  await eliminarRol(params.rolId)
 return redirect('/usuario/rol')
}

const Rol = ({rol}) => {
  const nav=useNavigate();

  return (
    <tr  className="border-b ">
    <td className="p-6 space-y-2" >
          <p className="text-gray-800 uppercase font-bold">{rol.nombre}</p> 
    </td>
   

    <td className="p-6 flex gap-3">
              <button 
                type="button"
                 className="text-blue-600 hover:text-blue-700 uppercase font-bold"
                 onClick={()=> nav(`/rol/${rol.id}/editar`)}
              >
               Editar
              </button>
          <Form
               method="post"
              action={`/rol/${rol.id}/eliminar`}
              onSubmit={(e)=>{
              if(!confirm('¡Deseas eliminar este rol?')){
                  e.preventDefault()
               }
               }}
               > 
                   <button 
                       type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold"
                  >
                  Eliminar
                  </button>
           </Form>
           <button 
                type="button"
                 className="text-green-600 hover:text-blue-700 uppercase font-bold"
                 onClick={()=> nav(`/rol/${rol.id}/ver`)}
                  >
                  Ver
                  </button>
          
      </td>
</tr>
  )
}

export default Rol
