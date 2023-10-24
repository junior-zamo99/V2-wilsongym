import {GetUsuario} from "../api/Usuario"

export async function loader({paramns}){
     const user= await GetUsuario(paramns.usuarioId)
      console.log(user)
      return {}
    }
const EditarUsuario = () => {
  return (
    <div>EditarUsuario</div>
  )
}

export default EditarUsuario