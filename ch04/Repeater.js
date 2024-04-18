import { useState } from 'react' ;

// Deriving Values From State

function Repeater() {
    const [userInput,setUserInput] = useState('');

    function inputHandler(event) {
        setUserInput(event.target.value);
    }

    return (
        <>
            <input type="test" onChange={inputHandler} />
            <p>You entered: {userInput}</p>
        </>
    )
}