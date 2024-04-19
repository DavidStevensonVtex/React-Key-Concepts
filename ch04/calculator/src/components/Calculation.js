// import { useState } from 'react' ;

function Calculation( { onFirstValueChanged, onSecondValueChanged, onOperationChanged })
{
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
    // The unary plus (+) operator precedes its operand and evaluates to its operand but 
    // attempts to convert it into a number, if it isn't already.

    function onFirstInputChanged(event) {
        // console.log("First Input:", event.target.value);
        onFirstValueChanged(+event.target.value);
    }

    function onSelectedOperationChanged(event) {
        // console.log("Operation:", event.target.value);
        onOperationChanged(event.target.value);
    }

    function onSecondInputChanged(event) {
        // console.log("Second Input:", event.target.value);
        onSecondValueChanged(+event.target.value);
    }

    return (
        <>
            <input type='number' onChange={onFirstInputChanged} />&nbsp;
            <select onSelect={onSelectedOperationChanged} onChange={onSelectedOperationChanged} >
                <option value='add'> + </option>
                <option value='subtract'> - </option>
                <option value='multiply'> x </option>
                <option value='divide'> / </option>
            </select>&nbsp;
            <input type='number' onChange={onSecondInputChanged} />&nbsp;
            =&nbsp;
        </>
    )
}

export default Calculation ;