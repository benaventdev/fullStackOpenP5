import DeleteButton from "./DeleteButton"

const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {persons
        .filter(person => {
          if (newFilter === "") return person
          else return person.name.toLowerCase().includes(newFilter.toLowerCase())
        })
        .map((person) => {
          return <div key={person.name}>
              {person.name} {person.number}
              <DeleteButton person={person} />
          </div>
        })}
    </div>
  )
}

export default Persons