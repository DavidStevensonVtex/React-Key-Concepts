import { useState } from 'react' ;

function TermsOfUse() {
    const [showTerms, setShowTerms] = useState(false);

    function showTermsSummaryHandler() {
        setShowTerms(true);
    }

    let paragraphText ;

    if (showTerms) {
        paragraphText = <p>By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.</p> ;
    }
    return (
        <section>
            <button onClick={showTermsSummaryHandler}>Show Terms of Use Summary</button>
            {paragraphText}
        </section>
    )
}