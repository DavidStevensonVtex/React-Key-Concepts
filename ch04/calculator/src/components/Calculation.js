// import { useState } from 'react' ;

function Calculation()
{
    return (
        <>
            <input type='number' />&nbsp;
            <select>
                <option value='add'> + </option>
                <option value='subtract'> - </option>
                <option value='multiply'> x </option>
                <option value='divide'> / </option>
            </select>&nbsp;
            <input type='number' />&nbsp;
            =&nbsp;
        </>
    )
}

export default Calculation ;