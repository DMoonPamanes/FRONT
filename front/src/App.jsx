import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notes from './Notes';
import List from './List';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#007bff',
    marginBottom: '20px',
  },
};

const baseUrl = 'http://localhost:3001/api/notes';

const App = () => {
  // Estado local para almacenar las notas
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notes App</h1>
      {/* Componente List para mostrar la lista de notas */}
      <List notes={notes} />
      {/* Componente Notes para agregar nuevas notas */}
      <Notes baseUrl={baseUrl} setNotes={setNotes} />
    </div>
  );
};

export default App;
