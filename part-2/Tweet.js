const Tweet = (props) => (
    //username, name, date, message
    <div>
        <p>{props.username}</p>
        <p>{props.name}</p>
        <p style={{color: "red"}}>{props.message}</p>
        <p>{props.date}</p>
    </div>
)