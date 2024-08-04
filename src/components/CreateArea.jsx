import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [show, setShow] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submintNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setShow(false);
  }

  function handleClick() {
    setShow(true);
  }
  return (
    <div>
      <form className="create-note">
        {show ? (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
            rows="1"
            // onFocus={handleFocus}
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows={show ? 3 : 1}
          value={note.content}
          onClick={handleClick}
        />
        <Zoom in={show}>
          <Fab onClick={submintNote}>
            {" "}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
