import { useState } from 'react' ;

function LoginForm() 
{
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function emailEnteredHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function passwordEnteredHandler(event) {
        setEnteredPassword(event.target.value);
    }

    // Below, props are split across multiple lines for better readability.
    // This is allowed when using JSX, just as it is allowed in standard HTML

    return (
        <form>
            <input
                type="email"
                placeholder="Your email"
                onBlur={emailEnteredHandler} />
            <input
                type="password"
                placeholder="Your password"
                onBlue={passwordEnteredHandler} />
        </form>
    ) ;
}