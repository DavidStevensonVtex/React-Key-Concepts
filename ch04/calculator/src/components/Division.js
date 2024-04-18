import { useState } from 'react' ;

function Division()
{
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    function input1Handler(event) {
        setInput1(Number(event.target.value));
    }

    function input2Handler(event) {
        setInput2(Number(event.target.value));
    }

    const quotient = input1 / input2 ;

    return (
        <tr>
            <td><input type='number' value={input1} onChange={input1Handler} /></td>
            <td>*</td>
            <td><input type='number' value={input2} onChange={input2Handler} /></td>
            <td>=</td>
            <td>{quotient}</td>
        </tr>
    ) ;
}

export default Division ;