import { useReducer } from "react"
import Context from "./Context"
import miReducer from "./miReducer"
import miReducer2 from "./mireducer2"
import types from "./types"

const init = () => {
    const user= localStorage.getItem('valor')
    return{
        logueado: !!user,
        usuario:user
    }
}
const valorInicial=[{sitio:""}]
const Provider = ({children}) =>{
    const [autentificacion,dispatch] = useReducer(miReducer,{}, init)
    const [contratacion, dispatch2]= useReducer(miReducer2,valorInicial)
    
    const loguearse=(user='')=>{
        const action={
            type: types.login,
            payload:user
        }
        localStorage.setItem('valor', user)
        dispatch(action)
    }

    const desloguearse=()=>{
        const action={
            type: types.logout,
            payload:null
        }
        localStorage.removeItem('valor')
        dispatch(action)
    }

    
    return (
    <Context.Provider value={{...autentificacion,loguearse,desloguearse}}>
        {children}
    </Context.Provider>
    )
}

export default Provider
