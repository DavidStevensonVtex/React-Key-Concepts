import { useState } from 'react' ;

function TermsOfUse() {
    const [showTerms, setShowTerms] = useState(false);

    function showTermsSummaryHandler() {
        setShowTerms(true);
    }

    const paragraph = showTerms ? 
        ( 
            <p>
                By continuing, you accept that we will not indemnify you 
                for any damage or harm caused by our products.
            </p>
        ) :
        null ;

    return (
        <section>
            <button onClick={showTermsSummaryHandler}>Show Terms of Use Summary</button>
            {paragraph}
        </section>
    )
}