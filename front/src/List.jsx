import React from 'react';

const List = ({ notes }) => {
  const listItemStyle = {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={listItemStyle}>
          {note.content}
        </li>
      ))}
    </ul>
  );
};

export default List;
