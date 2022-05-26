import React, {useState} from 'react'

import styles from "./styles.module.css"
const Todoitem = ({Listdata, deleteData, displayComp}) => {
    const [Done, setDone] = useState(Listdata.Done)
  return (
    <div key={Listdata.id}>
        <input type="checkbox" checked={Done} onClick={()=>styles.line} onChange={((e)=>(e.target.checked ? displayComp(Listdata.id) : ""))}/>
        <label>{Listdata.text}</label>
        <button onClick={()=>deleteData(Listdata.id)}>Delete</button>

    </div>
  )
}

export default Todoitem