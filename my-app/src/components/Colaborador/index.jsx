import "./Colaborador.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

const Colaborador = (props) => {

    const { name, puesto, foto, equipo, id} = props.data
    const { colorPrimario, deleteColaborador } = props
    return <div className="colaborador">
        <IoMdCloseCircleOutline color="black" className="eliminar" onClick={()=>deleteColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={`Foto de ${name}`} />
        </div>
        <div  className="info">
            <h4>{name}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador