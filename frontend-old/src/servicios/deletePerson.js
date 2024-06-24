import axios from "axios"

const deletePerson = (id) => {
    const url = "http://localhost:3001/persons/".concat(id)
    console.log("La url es: ", url)
    return axios
        .delete(url)
}

export default deletePerson