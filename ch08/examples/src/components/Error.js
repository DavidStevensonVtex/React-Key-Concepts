import { useEffect } from 'react' ;

// Another common reason for unnecessary effect execution is 
// the usage of objects as dependencies.

export default function Error({ message }) {
    // const { message } = props ;

    useEffect(
        function () {
            // performing some error logging
            // in a real app, a HTTP request might be sent to some analytics API
            console.log('An error occurred!');
            console.log(message);
        },
        // [props] don't use the entire props object!
        [message]
    )

    return <p>{message}</p>
}