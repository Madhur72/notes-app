import React, { useEffect, useState } from "react";
import NoteContainer from "./NoteContainer/NoteContainer";
import Sidebar from "./SideBar/Sidebar";
import "./App.css";
function App() {
  const defaultNotes = [
    {
      id: Date.now() + Math.floor(Math.random() * 13),
      text: "",
      color: "#8062D6",
      time: Date.now(),
    },
  ];

  const notesFromLocalStorage = JSON.parse(localStorage.getItem("notes-app"));

  const [notes, setNotes] = useState(
    notesFromLocalStorage !== null && notesFromLocalStorage.length >0 ? notesFromLocalStorage : defaultNotes
  );
  function addNote(color) {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + Math.floor(Math.random() * 13),
      text: "",
      color: color,
      time: Date.now(),
    });
    setNotes(tempNotes);
  }
  function deleteNote(id) {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }
  function updateText(text,id)
  {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    tempNotes[index].text = text
    console.log("update triggered")
    setNotes(tempNotes);
  }
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="app">
      <Sidebar addNote={addNote} />
      <NoteContainer props={notes} deleteNote={deleteNote} updateText={updateText} />
    </div>
  );
}

export default App;

