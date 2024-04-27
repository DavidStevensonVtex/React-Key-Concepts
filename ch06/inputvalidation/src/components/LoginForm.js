import { useState } from 'react' ;
import classes from './LoginForm.module.css' ;

export default function LoginForm() {
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true) ;
    const [passwordIsValid, setPasswordIsValid] = useState(true) ;

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value) ;
    }

    function onFormSubmit(event) {
        console.log("onFormSubmit");
        event.preventDefault();
        console.log("email", email, "password", password) ;

        setEmailIsValid(email === "drs@abc.com");
        setPasswordIsValid(password === "password") ;
    }

    return (
        <form className={classes.textcenter} onSubmit={onFormSubmit}>
            <div>
                <label htmlFor='email' className={emailIsValid ? '' :  classes.invalidlabel}>Your email</label>
                <br />
                <input id="email" type='text' onBlur={changeEmail} className={emailIsValid ? '' : classes.invalidinput} />
            </div>
            <div>
                <label htmlFor="password" className={passwordIsValid ? '' : classes.invalidlabel} >Your password</label>
                <br />
                <input id="password" type='password' onBlur={changePassword} className={passwordIsValid ? '' : classes.invalidinput} />
            </div>
            <div>
                <button type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}