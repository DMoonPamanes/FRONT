import { useState, useEffect } from "react";
import axios from "axios";

const Notes = ({ baseUrl, setNotes }) => {
  // Estado local para almacenar el contenido del campo de entrada
  const [newNote, setNewNote] = useState("");

  // Función que maneja el cambio en el campo de entrada
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
    };

    // Función que maneja el envío del formulario
    const addNote = (event) => {
      event.preventDefault();
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        date: new Date().toISOString(),
      };
    
      // Realiza una solicitud POST al servidor para agregar la nueva nota
      axios
      .post(baseUrl, noteObject)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data]);
        setNewNote("");
      })
    };
    

  return (
    <form onSubmit={addNote}>
      <input  type="text" value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  );
};

export default Notes;