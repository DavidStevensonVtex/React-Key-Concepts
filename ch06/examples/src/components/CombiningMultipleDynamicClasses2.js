import './CombiningMultipleDynamicClasses.css' ;

function CombiningMultipleDynamicClasses2( { children, isImportant } )
{
    let cssClasses = 'text-default text-expl' ;

    if (isImportant) {
        cssClasses = 'text-important' ;
    }

    return <p className={cssClasses}>{children}</p>
}

export default CombiningMultipleDynamicClasses2 ;