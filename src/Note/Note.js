import React from "react";
import "./Note.css";
import deleteIcon from "../assets/icons8-delete.svg"
function Note({ props,deleteNote,updateText}) {
  let timer = 500,timeout;
  const formatDate = (item)=>
  {
    const date = new Date(item);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours()
    hrs = hrs?hrs:"12"
    let ampm = hrs>12?"PM":"AM"
    hrs = hrs>12?hrs-12:hrs
    let mins = date.getMinutes();
    mins = mins>10?mins:"0"+mins
    let day = date.getDate()
    let month = monthNames[date.getMonth()]
    return `${hrs}:${mins} ${ampm} ${day} ${month}`;
  }
  const debounce = (func)=>
  {
    clearTimeout(timeout)
    timeout = setTimeout(func,timer)
  }
  
  return (
    <div className="note" style={{ backgroundColor: props.color }}>
      <textarea className="note-text" defaultValue={props.text} onChange={(event)=> debounce(()=>updateText(event.target.value,props.id))}/>
      <div className="note-time">
        <p>{formatDate(props.time)}</p>
        <img src={deleteIcon} alt="" onClick={()=> deleteNote(props.id)}  />
      </div>
    </div>
  );
}

export default Note;
