import Rol from "../components/Rol"
import{obtenerRol} from "../api/Rol"
import { useLoaderData, useNavigate } from "react-router-dom"

export function loader(){
  const get=obtenerRol()
  
  return get
}

const ListaRol = () => {

  const roles=useLoaderData()

  return (
    <div>
        <h1 className="font-black text-4xl text-center text-blue-900">Lista de Roles</h1>
        <p className=" text-center mt-3">Administra tus Roles</p>

          {roles.length?(
            <table className="w-full bg-white shadow mt-5 table-auto">
              <thead className="bg-blue-800 text-white">
                  <tr>
                      <th className="p-2">Nombre</th>
                      <th className="p-2">Accion</th>
                  </tr>
              </thead>
              <tbody>
                {roles.map(rol=>(
                    <Rol
                      rol={rol}
                      key={rol.id}
                    />
                ))}
                  
                  
              </tbody>
          </table>
          ):(
              <p>
              No hay Rol aun
              </p>
          )}
        
    
      </div>
  )  
}

export default ListaRol