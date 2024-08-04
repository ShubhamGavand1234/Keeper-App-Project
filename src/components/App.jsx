import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesArray from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(notesArray);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          heading={note.title}
          paragraph={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
