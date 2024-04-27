import { useState } from 'react' ;
import classes from "./EmailForm.css" ;

export default function EmailForm() {
    const [enteredEmail, setEnteredEmail] = useState('');

    function UpdateEmailHandler(event) {
        setEnteredEmail ( event.target.value );
    }

    function submitFormHandler(event) {
        // could send entered email to backend server
        console.log("enteredEmail", enteredEmail);
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div><label htmlFor='email'>Your email</label></div>
            <div><input type="email" id="email" onChange={UpdateEmailHandler} /></div>
            <button>Save</button>
        </form>
    )
}