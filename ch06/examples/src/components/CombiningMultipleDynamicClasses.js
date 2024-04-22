import './CombiningMultipleDynamicClasses.css' ;

function CombiningMultipleDynamicClasses( { children, isImportant } )
{
    const defaultClasses = 'text-default text-expl' ;

    return <p className={defaultClasses}>{children}</p>
}

export default CombiningMultipleDynamicClasses ;