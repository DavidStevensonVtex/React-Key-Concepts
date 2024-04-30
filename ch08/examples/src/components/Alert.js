import { useState, useEffect } from 'react' ;

export default function Alert()
{
    const [alertDone, setAlertDDone] = useState(false);

    useEffect(function() {
        let timer ;

        console.log("Starting Alert Timer!");
        timer = setTimeout(function() {
            console.log('Timer expired!');
            setAlertDDone(true);
        }, 2000);

        return function() {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {! alertDone && <p>Relax, you still got some time!</p> }
            { alertDone && <p>Time to get up!</p> }
        </>
    )
}