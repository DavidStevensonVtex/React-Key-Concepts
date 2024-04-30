import { useEffect } from 'react' ;

// Another common reason for unnecessary effect execution is 
// the usage of objects as dependencies.

export default function Error(props) {
    useEffect(
        function () {
            // performing some error logging
            // in a real app, a HTTP request might be sent to some analytics API
            console.log('An error occurred!');
            console.log(props.message);
        },
        [props]
    )

    return <p>{props.message}</p>
}