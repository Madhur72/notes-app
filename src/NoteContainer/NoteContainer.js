import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
function NoteContainer({ props }) {
  return (
    <div className="note-container">
      <h1>Notes</h1>
      <div className="notes custom-scroll">
        {props.map((item, index) => {
          return <Note props={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default NoteContainer;
