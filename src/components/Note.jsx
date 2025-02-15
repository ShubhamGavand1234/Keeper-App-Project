import React from "react";
import ReactDOM from "react-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
      <button onClick={handleClick}>
        {" "}
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
