import { useState } from 'react' ;
import "./LoginForm.css" ;

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
        <form className='text-center' onSubmit={onFormSubmit}>
            <div>
                <label htmlFor='email' className={emailIsValid ? '' :  'invalid-label'}>Your email</label>
                <br />
                <input id="email" type='text' onBlur={changeEmail} className={emailIsValid ? '' : 'invalid-input'} />
            </div>
            <div>
                <label htmlFor="password" className={passwordIsValid ? '' : 'invalid-label'} >Your password</label>
                <br />
                <input id="password" type='password' onBlur={changePassword} className={passwordIsValid ? '' : 'invalid-input'} />
            </div>
            <div>
                <button type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}