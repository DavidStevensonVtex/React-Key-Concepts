import { useState } from 'react' ;

// Two-Way Binding example

function NewsletterField () {
    const [email, setEmail] = useState('');

    function changeEmailHandler(event) {
        setEmail(event.target.value) ;
    }

    return (
        <>
            <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={changeEmailHandler} />
        </>
    )
}