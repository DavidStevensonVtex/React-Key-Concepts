import { useState } from 'react' ;

function ColoredText() {
    const [enteredColor, setEnteredColor] = useState('');

    function updateTextColorHandler(event) {
        setEnteredColor(event.target.value);
    }

    return (
        <>
        <input type="text" onChange={updateTextColorHandler} />
        <p style={{color: enteredColor}}>This text's color changes dynamically!</p>
        </>
    )
}