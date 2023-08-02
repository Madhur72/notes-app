import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
function NoteContainer({ props,deleteNote,updateText }) {
  const tempNotes = []
  for(let i = props.length-1;i>=0;i--)
  {
    tempNotes.push(props[i]);
  }
  return (
    <div className="note-container">
      <h1>Notes</h1>
      <div className="notes custom-scroll">
        {tempNotes.map((item, index) => {
          return <Note props={item} key={index} deleteNote={deleteNote} updateText={updateText} />;
        })}
      </div>
    </div>
  );
}

export default NoteContainer;
