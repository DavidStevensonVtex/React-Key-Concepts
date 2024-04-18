import { useState } from 'react' ;

function Subtraction()
{
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    function input1Handler(event) {
        setInput1(Number(event.target.value));
    }

    function input2Handler(event) {
        setInput2(Number(event.target.value));
    }

    const difference = input1 - input2 ;

    return (
        <tr>
            <td><input type='number' value={input1} onChange={input1Handler} /></td>
            <td>-</td>
            <td><input type='number' value={input2} onChange={input2Handler} /></td>
            <td>=</td>
            <td>{difference}</td>
        </tr>
    ) ;
}

export default Subtraction ;