import { useState } from 'react' ;
import classes from "./EmailForm.css" ;

// Should you always use refs instead of state?
// The clear answer to this question is "no".

// As soon as you need to change values and those changes must be relfected
// in the UI (for example, by rendering some conditional content), refs are
// out of the game.

export default function EmailForm() {
    const [enteredEmail, setEnteredEmail] = useState('');

    function UpdateEmailHandler(event) {
        setEnteredEmail ( event.target.value );
    }

    function submitFormHandler(event) {
        // could send entered email to backend server
        event.preventDefault();
        console.log("enteredEmail", enteredEmail);
        setEnteredEmail('');
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div><label htmlFor='email'>Your email</label></div>
            <div>
                <input 
                type="email" 
                id="email" 
                onChange={UpdateEmailHandler}
                value={enteredEmail} />
            </div>
            <button>Save</button>
        </form>
    )
}
