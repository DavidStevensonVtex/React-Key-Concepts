import { useState } from 'react' ;

function Division()
{
    const [inputs, setInputs] = useState( { first: 0, second: 0 });

    function firstNumberHandler(event) {
        setInputs( prevInputs => ({ first: Number(event.target.value), second: prevInputs.second}));
    }

    function secondNumberHandler(event) {
        setInputs( prevInputs => ({ first: prevInputs.first, second: Number(event.target.value)}));
    }

    const quotient = inputs.first / inputs.second ;

    return (
        <tr>
            <td><input type='number' value={inputs.first} onChange={firstNumberHandler} /></td>
            <td>/</td>
            <td><input type='number' value={inputs.second} onChange={secondNumberHandler} /></td>
            <td>=</td>
            <td>{quotient}</td>
        </tr>
    ) ;
}

export default Division ;