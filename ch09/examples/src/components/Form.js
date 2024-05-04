import { useState, useCallback } from 'react' ;
import classes from "./Form.module.css" ;
import Error from "./Error.js" ;

// useCallback can be used to avoid unnecessary function recreations.

export default function Form() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    function updateEmailHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault() ;
        if (!enteredEmail.endsWith(".com")) {
            setErrorMessage("Email must end with .com");
        }
    }

    const clearErrorHandler = useCallback ( () => {
        console.log("clearErrorHandler");
        setErrorMessage(null);
    }, []);

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email"
                    value={enteredEmail}
                    onChange={updateEmailHandler} />
            </div>
            <Error message={errorMessage} onClearError={clearErrorHandler}/>
            <button>Sign up</button>
        </form>
    )
}