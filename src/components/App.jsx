import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteCreation from "./NoteCreation";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(err => console.error("Failed to fetch notes:", err));
  }, []);

  const addNote = (newNote) => {
    fetch("http://localhost:5000/notes/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
    .then(response => response.json())
    .then(data => {
      setNotes(prevNotes => [...prevNotes, { ...newNote, _id: data._id }]);
    })
    .catch(err => console.error("Failed to add note:", err));
  };

  const deleteNote = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => {
      setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    })
    .catch(err => console.error("Failed to delete note:", err));
  };

  return (
    <div>
      <Header />
      <NoteCreation onAdd={addNote} />
      {notes.map(noteItem => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
