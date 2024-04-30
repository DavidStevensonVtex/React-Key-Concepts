import { useState, useEffect } from 'react' ;

export default function Alert2()
{
    const [alertMsg, setAlertMsg] = useState('Expired!');

    function changeAlertMsgHandler(event) {
        setAlertMsg(event.target.value);
    }

    useEffect( 
        function() {
            function setAlert() {
                return setTimeout(function () {
                    console.log(alertMsg);
                }, 2000);
            }

            const timer = setAlert();

            return function () {
                clearTimeout(timer);
            }
        }, 
        [alertMsg]
    );

    return <p><input type="text" onChange={changeAlertMsgHandler} /></p>
}