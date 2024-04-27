import { useState, useRef } from 'react' ;

// Using Refs For More Than DOM Access

// Refs are more than just "element connetion bridges"; they are objects that can
// be used to store all kinds of values -- not just pointers at DOM objects. You 
// can also store strings or numbers or any kind of value in a ref.

export default function Counters() {
    const [counter1, setCounter1] = useState(0);
    const counterRef = useRef(0) ;      // pass an initial value to useRef
    let counter2 = 0 ;

    function changeCountersHandler() {
        setCounter1(1);
        counter2 = 1 ;
        counterRef.current = 1;
    }

    return (
        <>
            <button onClick={changeCountersHandler}>Change Counters</button>
            <ul>
                <li>Counter 1: {counter1}</li>
                <li>Counter 2: {counter2}</li>
                <li>Counter 3: {counterRef.current}</li>
            </ul>
        </>
    )
}