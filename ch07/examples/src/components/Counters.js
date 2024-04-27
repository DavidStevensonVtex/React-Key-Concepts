import { useState, useRef } from 'react' ;

// page 174

// In this example, it might again look like refs can replace state, but the
// example actually shows very well why that is *not* the case. Try replacing
// counter1 with another ref (so that there is no state value left in the
// component) and clicking the button.

// Nothing will change on the page because, while the button click is registered 
// and the changeCountersHandler function is executed, no change state is initiated.
// And state changes (initiated via the setXYZ state updating function calls) are
// the triggers that cause React to re-evaluate a component. Changes to *ref* values
// do *not* do that.

export default function Counters() {
    const counterRef1 = useRef(0);
    const counterRef2 = useRef(0) ;      // pass an initial value to useRef
    let counter2 = 0 ;

    function changeCountersHandler() {
        counterRef1.current = 1;
        counter2 = 1 ;
        counterRef2.current = 1;
    }

    return (
        <>
            <button onClick={changeCountersHandler}>Change Counters</button>
            <ul>
                <li>Counter 1: {counterRef1.current}</li>
                <li>Counter 2: {counter2}</li>
                <li>Counter 3: {counterRef2.current}</li>
            </ul>
        </>
    )
}