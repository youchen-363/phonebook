import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import Numbers from './components/Numbers'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState([null, true])

  useEffect(() => {
    personService.getAll().then(response => {
      console.log(response)
      setPersons(response)
    })
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification[0]} success={notification[1]}/>      
      <Filter newfilter={newFilter} setNewFilter={setNewFilter} />
      <NewPerson newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <Numbers filteredPersons={filteredPersons} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App