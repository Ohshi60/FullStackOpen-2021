import React, { useState } from 'react'


const Person = ({person}) => {
  console.log('person', person)
  return (
    <div>
      <p>{person.name}</p>
    </div>
  )
}
const Persons = ({persons}) => {
  console.log('persons', persons)
  return (
    <div>
      {persons.map(person => <Person key={person.name} person={person}/>)}
      
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (event) =>{
    event.preventDefault()
    setNewName(event.target.value)
  }

  const submitNewName = () => {

    const newPerson = {
      name: newName
    }
    console.log('xx',newPerson)
    setPersons(persons.concat(newPerson))
  }
  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {persons.map(person => person.name)}</div>

      <h2>Phonebook</h2>
      <form onSubmit={submitNewName}>
        <div>
          name: <input onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Person person={person} />)}
    </div>
  )
}

export default App