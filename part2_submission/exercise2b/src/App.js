import { useState } from 'react'
import Person from './components/Person.js'
import Form from './components/Form.js'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone:123456 ,id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nextId, setNextId] = useState(2)
  const [searchQuery, setSearchQuery] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    const nameAlreadyExists = persons.some(person => person.name === newName)

    if (nameAlreadyExists){
      alert(`${newName} Already exists in the phonebook!`)
    }
    else {
      const nameObject = {
        name:newName,
        phone:newPhone,
        id: nextId
      }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNextId(nextId + 1);
  }
  }



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filterPerson = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ul>
        {filterPerson.map(person => (
          <Person key={person.id} name={person.name} phone={person.phone} />
        ))}
      </ul>
      <Form
        newName={newName}
        newPhone={newPhone}
        addPerson={addPerson}
        setNewName={setNewName}
        setNewPhone={setNewPhone} />
      <h2>Numbers</h2>
      <div>
          {persons.map(person => (
          <Person key={person.id} name={person.name} phone={person.phone}/>
          ))}
      </div>
    </div>
  )
}

export default App