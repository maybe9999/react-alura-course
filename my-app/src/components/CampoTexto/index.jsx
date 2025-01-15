import "./CampoTexto.css"
import { useState } from "react"

const CampoTexto = (props) => {
    const manejarCambio = (e) => {
        props.setvalue(e.target.value)
    }

    return <div className="campoTexto">
        <label>{props.title}</label>
        <input 
            type="text" 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.value}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto