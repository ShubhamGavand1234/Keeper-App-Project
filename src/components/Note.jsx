import React from "react";
import ReactDOM from "react-dom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
      <button onClick={handleClick}> DELETE</button>
    </div>
  );
}

export default Note;
