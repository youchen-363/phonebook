import personService from '../services/persons'

const NewPerson = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setNotification}) => {
    const handleAddName = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName, 
            number: newNumber, 
        }
        const person = persons.find(person => person.name.toLowerCase() == newName.toLowerCase())
        if (person !== undefined) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                personService.updatePerson({...person, number:newNumber}).then(() => {
                    setPersons([...persons].map(p => p.id === person.id ? {...p, number:newNumber} : p))
                    setNewName('')
                    setNewNumber('')
                }).then(() => {
                    setNotification([`Updated ${newName}`, true])
                    setTimeout(() => {
                        setNotification([null, null])
                    }, 5000)
                }).catch(error => {
                    setNotification([`Information of ${person.name} has already been removed from server`, false])
                })
            }
        } else {   
            personService.addPerson(newPerson).then(()=>{
                personService.getAll().then(response => setPersons(response))
                setNewName('')
                setNewNumber('')
            }).then(() => {
                setNotification([`Added ${newName}`, true])
                setTimeout(() => {
                    setNotification([null, null])
                }, 5000)
            })
        }   
    }
    
    return (
        <div>
            <h3>add a new</h3>
            <form>
                <div>
                name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
                </div>
                <div>
                number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
                </div>
                <div>
                <button type="submit" onClick={handleAddName}>add</button>
                </div>
            </form>
        </div>
    )
}

export default NewPerson