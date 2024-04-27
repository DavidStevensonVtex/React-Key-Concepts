import classes from "./Form.css" ;
import Preferences from "./Preferences" ;

export default function Form() {
    function submitHandler(event) {
        event.preventDefault() ;
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.formControl}>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" />
            </div>
            <Preferences />
            <button>Submit</button>
        </form>
    )
}