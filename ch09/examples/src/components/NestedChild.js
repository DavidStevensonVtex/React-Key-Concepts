import { useState } from 'react' ;
import "./NestedChild.css"

function NestedChild() {
    console.log("<NestedChild /> is called");

    return <p id="nested-child">A component, deeply nested into the component tree.</p>
}

function Child() {
    console.log("<Child /> is called.");

    return (
        <div id="child">
            <p>
                A component, rendered inside another component, containing yet another component.
            </p>
            <NestedChild />
        </div>
    )
}

export default function Parent() {
    console.log("<Parent /> is called.");

    const [counter, setCounter] = useState(0) ;

    function incCounterHandler() {
        setCounter( (prevCounter) => prevCounter + 1 ) ;
    }

    return (
        <div id="parent">
            <p>A component, nested into App, containing another component (Child).</p>
            <p>Counter: {counter}</p>
            <button onClick={incCounterHandler}>Increment</button>
            <Child />
        </div>
    )
}