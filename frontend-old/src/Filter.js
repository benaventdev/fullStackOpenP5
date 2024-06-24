const Filter = ({setNewFilter}) => {
    const handleFilter = (event) => {
        setNewFilter(event.target.value)
    }

    return <div>
        <input onChange={handleFilter}></input>
    </div>
}

export default Filter