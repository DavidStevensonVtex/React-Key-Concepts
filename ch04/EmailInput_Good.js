function EmailInput()
{
    let errorMessage = '' ;
    
    function evaluateEmail(event) {
        const enteredEmail = event.target.value ;
        if (enteredEmail.trim() == '' || !enteredEmail.includes('@')) {
            errorMessage = 'The entered email address is invalid.' ;
        } else { 
            errorMessage = '' ;
        }
    }

    return {
        <div>
            <input placeholder="Your email" type="email" />
            <p>The entered email address is invalid</p>
        </div>
    } ;
}