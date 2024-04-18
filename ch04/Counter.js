import { useState } from 'react' ;

function Counter() 
{
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler() {
        setCounter(function(prevCounter) { return prevCounter + 1; })
        // alternatively, JS arrow functions could be used:
        // setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <>
            <p>Counter Value: {counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </>
    )
}