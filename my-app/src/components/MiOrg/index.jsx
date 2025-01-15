import "./MiOrg.css"
import { useState } from "react"


const MiOrg = (props) => {

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="Add item" onClick={props.changeSeeForm}/>
    </section>
}

export default MiOrg