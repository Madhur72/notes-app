import React from 'react'
import './Note.css'
function Note({props}) {
  return (
    <div className='note' style={{backgroundColor:"props.color"}}>
      <textarea className='note-text' value={props.text} />
      <p>{props.time}</p>
    </div>
  )
}

export default Note
