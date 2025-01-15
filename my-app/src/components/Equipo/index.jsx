import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    const {title, colorPrimario, colorSecundario, id} = props.data
    const {colaboradores, deleteColaborador, setColorPrimario} = props

    const styleCardConteiner = {
        backgroundColor : hexToRgba(colorPrimario, '0.5'),
    }
    const styleTitle = {
        borderColor: colorPrimario
    } 
    
    return <>
        {
            colaboradores.length >0 && 
            <section className="equipo" style={styleCardConteiner}>
                <input 
                type="color" 
                className="input-color"
                value={colorSecundario}
                onChange={(e) => setColorPrimario(e.target.value, id)}
                />
                <h3 style={{styleTitle}}>{title}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        data={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        deleteColaborador={deleteColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo