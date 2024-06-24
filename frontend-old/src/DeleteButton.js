import deletePerson from './servicios/deletePerson'

const DeleteButton = ({ person }) => {
    const handleDelete = (event) => {
        event.preventDefault()
        if (window.confirm(`Delete ${person.name}?`)) {
            deletePerson(person.id)
        }
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteButton