import { useState } from "react"

import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Button from "../Button"

const Formulario = (props)=>{
    const [name, setName] = useState()
    const [puesto, setPuesto] = useState()
    const [foto, setFoto] = useState()
    const [equip, setEquip] = useState("")

    const  eventPrevent = (e)=>{
        e.preventDefault()
        let dataSend = {
            name,
            puesto,
            foto,
            equip
        }
        props.addColaborador(dataSend)
    }

    return <section className="formulario">
        <form onSubmit={eventPrevent}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto title="Nombre" placeholder="Ingresar nombre" required value={name} setvalue={setName}/>
            <CampoTexto title="Puesto" placeholder="Ingresar puesto" required value={puesto} setvalue={setPuesto}/>
            <CampoTexto title="Foto" placeholder="Ingresar enlace de foto" required value={foto} setvalue={setFoto}/>
            <ListaOpciones equipos={props.equipos} value={equip} setvalue={setEquip}/>
            <Button>
                Crear
            </Button>
        </form>
    </section>
}

export default Formulario