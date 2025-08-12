import axios from 'axios'
const baseURL = "/api/persons"

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addPerson = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data)
}

const updatePerson = (person) => {
    const request = axios.put(`${baseURL}/${person.id}`, person)
    return request.then(response => response.data)
}

const deletePerson = (person) => {
    console.log('=== DELETE DEBUG ===')
    console.log('Full person object:', person)
    console.log('Person ID:', person.id)
    console.log('Person ID type:', typeof person.id)
    console.log('URL being called:', `${baseURL}/${Number(person.id)}`)
    console.log('==================')
    console.log('delete person: ', person)
    const request = axios.delete(`${baseURL}/${person.id}`)
    return request.then(response => response.data)
}

export default {getAll, addPerson, updatePerson, deletePerson}
