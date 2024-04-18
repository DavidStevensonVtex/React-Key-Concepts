import { useState } from 'react' ;

function Counter() 
{
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler() {
        setCounter(counter + 1);
    }

    return (
        <>
            <p>Counter Value: {counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </>
    )
}