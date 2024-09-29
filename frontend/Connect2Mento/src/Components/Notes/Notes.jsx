import React from 'react';
import './Notes.css';

function Notes() {
  const notes = [
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
    { task: 'Prepare Question for DATABASE', due: '29 Aug, 2023' },
  ];

  return (
    <div className="notes">
      <h3>My Notes</h3>
      <ul className='ul'>
        {notes.map((note, index) => (
          <li key={index} className='listitem'>
            <span>{note.task}</span>
            <span>{note.due}</span>
          </li>
        ))}
      </ul>
      <button>Add Note</button>
    </div>
  );
}

export default Notes;
