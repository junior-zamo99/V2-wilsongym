export async function obtenerRol(){
    

    const respuesta= await fetch(import.meta.env.VITE_API_URL_ROL)
    const resultado= await respuesta.json()
    return resultado
}

export async function agregarRol(datos){
    try {
        const respuesta= await fetch(import.meta.env.VITE_API_URL_ROL,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export async function GetRol(id){
   

    const respuesta= await fetch(`${import.meta.env.VITE_API_URL_ROL}/${id}`)
    const resultado= await respuesta.json()
    return resultado
}

export async function actualizarRol(id, datos)
{
    try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL_ROL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarRol(id){
    try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL_ROL}/${id}`,{
            method: 'Delete',
          
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}