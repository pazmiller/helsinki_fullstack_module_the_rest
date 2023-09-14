import { useEffect, useState } from 'react'
import axios from 'axios'
import Person from './components/Person.js'
import Form from './components/Form.js'
import Filter from './components/Filter.js'
import personService from './services/persons.js'
import Notification from './components/Notification.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  // const [nextId, setNextId] = useState(2)
  const [searchQuery, setSearchQuery] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect( ()=>{
    personService
      .getAll()
      .then((initialPersons) =>{
        setPersons(initialPersons)
      })
      .catch(error =>{
        console.log('Error:', error)
      })
  }, [] )


  const addPerson = (event) => {
    event.preventDefault()
    const nameAlreadyExists = persons.find(person => person.name === newName)
    if (nameAlreadyExists){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number
      with a new one?`)){
      updatePerson(nameAlreadyExists.id, nameAlreadyExists.name)
    }
  }
    else {
      const nameObject = {
        name:newName,
        phone:newPhone
      }
      personService
      .create(nameObject)
      .then(returnedPerson =>{
        console.log(returnedPerson.data)
        setPersons(persons.concat(returnedPerson))
        setMessage({isMessageError:false, text:`Added new person: ${returnedPerson.name}`})
        setTimeout(() => {
          setMessage({})},5000
          )
        setNewName('')
        setNewPhone('')
      })
  } 
}

  const updatePerson = (id) => {
    const updatedPersonObject = {
      name:newName,
      phone:newPhone
    }
    console.log(personService)
    personService
      .update(id, updatedPersonObject)
      .then(replacedPerson =>{
        setPersons(persons.map(person =>
          person.id != id ? person : replacedPerson))
        setMessage({isMessageError:false,text:`Updated ${newName}`})

      })
      .catch((err) => {
        setPersons(persons.filter((person) => person.id !== id));
    
        setMessage({isMessageError:false, text:`Information of  has already been removed from the server`})
        setTimeout(() => {
          setMessage({});
        }, 5000);
      });
  };


  const deletePerson = (id, name) => {
    console.log(personService)
    if (!window.confirm(`Delete ${name}?`)) {
      return
    }
    personService
      .deleteThis(id)
      .then((response) => {
        setPersons(persons.filter((person)=> person.id !== id))
        setMessage({isMessageError:true, text:`Deleted ${name}`})
      })
      .catch((error) =>{
        console.log('Deletion failed, reason: ', error)
      })
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filterPerson = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} errorMessage={message} />
      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
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
          <Person
           key={person.id} name={person.name} phone={person.phone}
           deletePerson={() => deletePerson(person.id,person.name)}
           />
          ))}
      </div>
    </div>
  )
}

export default App