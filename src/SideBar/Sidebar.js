import React from 'react'
import Plus from "../assets/icons8-plus.svg"
import "./Sidebar.css"
function Sidebar() {
  const colors = ["#8062D6","#E48586"]
  const colormap = colors.map((item,index)=>{
    return(<li key={index} style={{backgroundColor:item}}></li>);
  })
  return (
    <div className='sidebar'>
      <img src={Plus} alt=''/>
      <ul className='color-list'>{colormap}</ul>
    </div>
  )
}

export default Sidebar;
