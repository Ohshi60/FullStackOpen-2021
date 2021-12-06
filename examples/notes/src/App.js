import React, {useState} from 'react'
import Note from './components/note'


const App = (props) =>  {
  
  const [notes,setNotes] = useState(props.notes)
  const [newNote,setNewNote] = useState('a new beginning')
  const [showAll, setShowAll] = useState(true)


  const addNote = (event) =>{
    event.preventDefault()
    const noteObject = {
      id:notes.length +1,
      content: newNote,
      date: new Date(),
      important: false,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  //event handler for the input field
  const handleNewNote = (event) => {
    console.log('handleNewNote', event.target.value)
    setNewNote(event.target.value)
  }
  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important===true) 

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }
  return (
    <div >
      <h1>Notes</h1>
      <button onClick={toggleShowAll}>{showAll ? 'showing all notes' : 'important only'}</button>
      <ul>
          {notesToShow.map(note => 
            //array index as key is antipattern
            //but notes.map((note,i)..) returns index as i
            <Note key={note.id} note={note}/>
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote}/>
        <button type="submit" >save</button>
      </form>
    </div>
  );
}

export default App;
