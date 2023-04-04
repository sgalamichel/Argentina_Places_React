import { Link } from "react-router-dom"

const Destino = ({nombre, imagen,situacion}) => {
    const ruta=`/images/${imagen}`
    return (
    <>
    <div className="destino">
        <div className="nombre">{nombre}</div>
        <div className="situacion">{situacion}</div>
        <img src={ruta} alt="" />
        <Link to={`/destino/${nombre}`}>Mas info</Link>
    </div>
    </>
    )
}

export default Destino
