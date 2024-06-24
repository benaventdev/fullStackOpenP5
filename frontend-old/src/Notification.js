const Notification = ({ message }) => {
    if (message.includes(`Error`)) {
        console.log("Posa error")
        return (
            <div className="error">
                {message}
            </div>
        )
    } else if (message.includes(`Añadido`)) {
        console.log("Posa QUE OK")
        return (
            <div className="added">
                {message}
            </div>
        )
    } else {
        return null
    }
}
export default Notification