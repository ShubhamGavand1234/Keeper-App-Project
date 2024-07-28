import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"



function App() {
    return (<>
    <Header />
   { notes.map((note) => (
    <Note key={note.key} 
    heading={note.title}
    paragraph={note.content}
    />
   )
    
)}
    <Footer/>
    </>)
}

export default App;