// Avoiding Unnecessary Effect Executions
import { useState, useEffect, useCallback } from 'react' ;

export default function Alert() {
    const [enteredEmail, setEnteredEmail] = useState('') ;
    const [enteredPassword, setEnteredPassword] = useState('');

    function updateEmailHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function updatePasswordHandler(event) {
        setEnteredPassword(event.target.value);
    }

    const validateEmail = useCallback (
        function () {
            if ( enteredEmail && !enteredEmail.includes('@')) {
                console.log("enteredEmail", enteredEmail);
                console.log("Invalid email");
            }
        },
        [enteredEmail]
    ) ;
 

    useEffect( function() {
            validateEmail();
        }, 
        [validateEmail] 
    ) ;

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