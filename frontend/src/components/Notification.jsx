const Notification = ({message, success}) => {
    if (!message) return null

    const generalStyle = {
        borderStyle: 'solid',
        borderRadius: '5px',
        background: 'lightgrey',
        fontSize: '20px',
        padding: '10px',
        marginBottom: '10px' 
    }

    const successStyle = {
        ...generalStyle,
        color: 'green'
    }

    const errorStyle = {
        ...generalStyle,
        color: 'red',
    }

    return (
        <div style={success ? successStyle : errorStyle}>
            {message}
        </div>
    )
}

export default Notification 