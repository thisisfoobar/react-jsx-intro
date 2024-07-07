const Person = ({name, age, hobbies}) => {
    const voteString = age >= 18 ? "Go vote!" : "you must be 18"
    const hobbiesList = hobbies.map(h => (<li>{h}</li>))

    return(
        <div>
            <p>Learn more about this person</p>
            <ul>
                <li>Name: {name.slice(0,6)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesList}
                </ul>
            </ul>
            <h3>{voteString}</h3>
        </div>
    )
    

}