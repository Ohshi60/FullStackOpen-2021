import React, {useState} from 'react'
import Note from './components/note'


const App = ({notes}) =>  {

  return (
    <div >
      <h1>Notes</h1>
      <ul>
          {notes.map(note => 
            //array index as key is antipattern
            //but notes.map((note,i)..) returns index as i
            <Note key={note.id} note={note}/>
          )}
      </ul>
    </div>
  );
}

export default App;
