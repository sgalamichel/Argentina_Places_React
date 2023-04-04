import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Context from "../contexto/Context"


const RutasPrivadas = ({ children }) => {
    const { logueado } = useContext(Context)
  return (logueado)
    ? children
    : <Navigate to ='/login'/>
}

export default RutasPrivadas
