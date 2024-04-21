import { useState } from 'react' ;

function Email()
{
    const [email, setEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState(false);
    let validationMessage = <span /> ;

    function emailChanged(event)
    {
        setEmail(event.target.value);
    }

    function buttonClicked()
    {
        setValidateEmail(true);
    }

    if ( validateEmail && !email.includes('@')) {
        validationMessage = <p>Invalid email address entered!</p> ;
    }

    return (
        <>
            <h2>Your email</h2>
            <input type='text' onBlur={emailChanged}/><br />
            <button type='button' onClick={buttonClicked}>Submit</button>
            {validationMessage}
        </>
    ) ; 
}

export default Email ;