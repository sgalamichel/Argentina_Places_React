import { Navigate, useParams } from "react-router-dom"
import data from "../datos/data";

const Comprar = () => {
    const {nombre}=useParams();
    const destinoEncontrado=data.find(dato=>dato.nombre===nombre)
    const navegacion=useNavigate();
    const volver=()=>{
        navegacion(-1)
    }

    if(!destinoEncontrado){
      return <Navigate to="/no/"/> 
    }
const contratar =()=>{

}

const anular =()=>{

}

    const imagen=`/images/${destinoEncontrado.imagen}`
  return (
    <>
    <div className="contenido">
        <h1>{nombre}</h1>
        <div className="servicios">{destinoEncontrado.imagen.servicio}</div>
        <div className="imagenGrande">
            <div className="precio">{destinoEncontrado.imagen.precio}$</div>
            <img src={imagen} alt="" /> 
            <button className="boton contratar" onClick={contratar}>Contratar</button>
            <button className="boton anular" onClick={anular}>Anular</button>
            <div className="botonVolver"><button onClick={volver}>Volver</button></div>
        </div>
    </div>
    </>
  )
}

export default Comprar
