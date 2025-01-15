import { useState } from "react";
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import MiOrg from './components/MiOrg';
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";



function App() {

  const [seeForm, setSeeForm] = useState(true)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      name:"pablo",
      puesto:"Instructor",
      foto: "https://github.com/maybe9999.png",
      equip: "Movil"
    },
    {
      id: uuid(),
      name:"pablo",
      puesto:"Instructor",
      foto: "https://github.com/maybe9999.png",
      equip: "Movil"
    },
    {
      id: uuid(),
      name:"pablo",
      puesto:"Instructor",
      foto: "https://github.com/maybe9999.png",
      equip: "Movil"
    },
    {
      id: uuid(),
      name:"pablo",
      puesto:"Instructor",
      foto: "https://github.com/maybe9999.png",
      equip: "Movil"
    },
    {
      id: uuid(),
      name:"Jack Sparrow",
      puesto:"Captain",
      foto: "https://github.com/maybe9999.png",
      equip: "Programación"
    },
    {
      id: uuid(),
      name:"Jack Sparrow",
      puesto:"Captain",
      foto: "https://github.com/maybe9999.png",
      equip: "Front End"
    },
    {
      id: uuid(),
      name:"Jack Sparrow",
      puesto:"Captain",
      foto: "https://github.com/maybe9999.png",
      equip: "Data Science"
    },
    {
      id: uuid(),
      name:"Jack Sparrow",
      puesto:"Captain",
      foto: "https://github.com/maybe9999.png",
      equip: "Devops"
    }
  ])

  const [listEquipos, setListEquipos] = useState([
    {
      id: uuid(),
      title: "Programación",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      title: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      title: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }])

  const changeSeeForm = () =>{
    setSeeForm(!seeForm)
  }

  const setColorPrimario = (color, id) =>{
    const equiposUpdate = listEquipos.map(equipo => {
      console.log(equipo.id, id)
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    });
    setListEquipos(equiposUpdate)
  }

  const addColaborador = (newColaborador) => {
    setColaboradores([...colaboradores, newColaborador])
  }
  const deleteColaborador = (id) => {
    const colaboradoresUpdate = colaboradores.filter( (colobarodor) => colobarodor.id != id)

    setColaboradores(colaboradoresUpdate)
  }

  return (
    <div>
      <Header/>

      {
        seeForm ? <Formulario 
          equipos={listEquipos.map((equipo)=> equipo.title)}
          addColaborador={addColaborador}
          /> : <></>
      }

      <MiOrg changeSeeForm={changeSeeForm}/>

      {
        listEquipos.map( (equipo, index) => <Equipo 
        data={equipo} 
        key={index}
        colaboradores={colaboradores.filter( colaborador => colaborador.equip === equipo.title)}
        deleteColaborador={deleteColaborador}
        setColorPrimario={setColorPrimario}/>
        )
      }    

        <Footer/>
    </div>
  );
}

export default App;
