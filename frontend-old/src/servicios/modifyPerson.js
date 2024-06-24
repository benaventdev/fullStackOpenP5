import axios from "axios"

const modifyPerson = (newPerson, oldUser) => {
    
    if (window.confirm(`El número ${newPerson.number} ya está vinculado con ${oldUser.name}. \n
            Quieres agregar el número ${newPerson.number} a ${newPerson.name}?`)) {
                const url = 'http://localhost:3001/persons/'.concat(oldUser.id)
                return axios
                .put(url, {name: newPerson.name, number: newPerson.number, id: newPerson.id})
    }
}

export default modifyPerson