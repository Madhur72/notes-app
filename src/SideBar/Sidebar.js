import React, { useState } from 'react'
import Plus from "../assets/icons8-plus.svg"
import "./Sidebar.css"
function Sidebar({addNote}) {
  const colors = ["#8062D6","#C1ECE4","#FFE17B","#EF6262","#A2FF86"]
  const [listOpen,setListOpen] = useState(false)
  const colormap = colors.map((item,index)=>{
    return(<li key={index} className = "color" onClick = {()=> addNote(item)} style={{backgroundColor:item}}></li>);
  })
  return (
    <div className='sidebar'>
      <img className= "plus" src={Plus} alt='' onClick={()=> setListOpen(!listOpen)}/>
      <ul className={`color-list ${listOpen?"color-active":""}`}>{colormap}</ul>
    </div>
  )
}

export default Sidebar;
