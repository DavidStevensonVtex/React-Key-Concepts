import { useState } from 'react' ;
import classes from "./Form.module.css" ;
import Error from "./Error.js" ;

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
            <Error message={errorMessage} />
            <button>Sign up</button>
        </form>
    )
}