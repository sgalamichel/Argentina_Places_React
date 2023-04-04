import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../contexto/Context";

const Login = () => {
  const {loguearme}=useContext(Context)
  const navegacion=useNavigate();
  const login=()=>{
    loguearme('Sofia')
    navegacion('/',{replace:true})
  }
  return (
    <>
    <div>
      Login
    </div>
    <button onClick={login}>Login</button>
    </>
  )
}

export default Login
