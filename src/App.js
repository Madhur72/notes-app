import React, { useState } from "react";
import NoteContainer from "./NoteContainer/NoteContainer";
import Sidebar from "./SideBar/Sidebar";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([{ text: "", color: "#8062D6", time: Date.now()}]);
  function addNote(color)
  {
    const tempNotes = [...notes]
    tempNotes.push({text:"",color:color,time:Date.now()})
    setNotes(tempNotes)
  }
  return (
    <div className="app">
      <Sidebar addNote = {addNote}/>
      <NoteContainer props={notes} />
    </div>
  );
}

export default App;
