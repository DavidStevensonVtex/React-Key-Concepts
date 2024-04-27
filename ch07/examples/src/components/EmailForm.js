import { useRef } from 'react' ;
import classes from "./EmailForm.css" ;

export default function EmailForm() {
    const emailRef = useRef();

    function submitFormHandler(event) {
        // could send entered email to backend server
        event.preventDefault();
        console.log("emailRef", emailRef.current.value);
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div><label htmlFor='email'>Your email</label></div>
            <div><input 
                ref={emailRef}
                type="email" 
                id="email"/></div>
            <button>Save</button>
        </form>
    )
}