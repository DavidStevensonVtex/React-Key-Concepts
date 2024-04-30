// Avoiding Unnecessary Effect Executions
import { useState, useEffect } from 'react' ;

export default function Alert() {
    const [enteredEmail, setEnteredEmail] = useState('') ;
    const [enteredPassword, setEnteredPassword] = useState('');

    function updateEmailHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function updatePasswordHandler(event) {
        setEnteredPassword(event.target.value);
    }

    function validateEmail() {
        console.log("enteredEmail", enteredEmail);
        if ( enteredEmail && !enteredEmail.includes('@')) {
            console.log("Invalid email");
        }
    }

    useEffect( function() {
        validateEmail();
    }, [enteredEmail] ) ;

    return (
        <form>
            <div>
                <label>Email</label>
                <input type="email" onChange={updateEmailHandler} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={updatePasswordHandler} />
            </div>
            <button>Save</button>
        </form>
    )
}