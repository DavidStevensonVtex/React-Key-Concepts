import { useState } from 'reacct' ;

export default function Demo() {
    const [a, setA] = useState(0);  // state updating functions aren't called
    const [b, setB] = useState(0);  // in this example

    useEffect(function() {
        console.log(a);
    }, [ a ]);

    useEffect(function() {
        console.log(b) ;
    }, [ b ]);

    return (
        <>
            <p>a: {a}</p>
            <p>b: {b}</p>
        </>
    )
}