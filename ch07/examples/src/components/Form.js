import classes from "./Form.css" ;
import Preferences from "./Preferences" ;
import { useRef } from 'react' ;

export default function Form() {
    const preferencesRef = useRef({});

    function submitHandler(event) {
        event.preventDefault() ;
        console.log("preferencesRef.current.selectedPreferences", preferencesRef.current.selectedPreferences);
        preferencesRef.current.reset();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.formControl}>
                <label htmlFor="email">Your email</label>
                <br />
                <input type="email" id="email" />
            </div>
            <Preferences ref={preferencesRef} />
            <button>Submit</button>
        </form>
    )
}