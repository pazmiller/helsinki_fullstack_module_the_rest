import { useState, useEffect} from 'react'
import React from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/'


const App = () => {
  const [notes, setNotes] = useState([])
  const[newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // useEffect(hook,[])
  // console.log('render', notes.length, 'notes')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])



const addNote = (event) =>{
  event.preventDefault()
  const noteObject = {
    content:newNote,
    important: Math.random()>0.5,
    id: notes.length+1
  }

    noteService
  .create(noteObject)
  .then(returnedNote => {
    setNotes(notes.concat(returnedNote))
    setNewNote('')
  })
}
  
const toggleImportanceOf = (id) => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  // Create an object for array manipulation
  const changedNote = {...note, important: !note.important}
    noteService
    .update(id,changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error =>{
      alert(
        `the note '${note.content}' was already deleted from server.`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
}

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesDisplay = showAll
    ? notes
    : notes.filter(note => note.important)
  

  return(
    <div>
      <h2>Notes</h2>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important':'all'}
        </button>
      </div>
      <ul>
        {notesDisplay.map(note =>
         <Note
          key={note.id} note={note}
          toggleImportance={()=> toggleImportanceOf(note.id)} />
        )} 
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App

