import personService from '../services/persons'

const Person = ({person, onDelete}) => {
  return (
      <p>{person.name} {person.number} <button onClick={() => onDelete(person)}>delete</button></p>
  )
}

const Numbers = ({filteredPersons, persons, setPersons}) => {
  const handleDeletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)){
      personService
        .deletePerson(person)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          alert(`${person.name} was already deleted!`)
          console.error('Delete failed:', error)
        })
    }
  }

  return (
    <div>
        <h3>Numbers</h3>
        {filteredPersons.map(person => 
          <Person key={person.id} person={person} onDelete={handleDeletePerson}/>
        )}
    </div>
  )
}

export default Numbers

