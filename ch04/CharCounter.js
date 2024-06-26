import { useState } from 'react' ;

// Deriving Values From State

function CharCounter() {
    const [userInput, setUserInput] = useState('');

    function inputHandler(event) {
        setUserInput(event.target.value);
    }

    const numChars = userInput.length ;

    return (
        <>
            <input type="text" onChange={inputHandler} />
            <p>Characters entered: {numChars}</p>
        </>
    )
}