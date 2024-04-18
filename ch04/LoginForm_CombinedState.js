import { useState } from 'react' ;

function LoginForm() 
{
    const [userData, setUserData] = useState( {
        email: '',
        password: ''
    }) ;

    function emailEnteredHandler(event) {
        setUserData ( { email: event.target.value, password: userData.password});
    }

    function passwordEnteredHandler(event) {
        setEnteredPassword({ email: userData.email, password: event.target.value });
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