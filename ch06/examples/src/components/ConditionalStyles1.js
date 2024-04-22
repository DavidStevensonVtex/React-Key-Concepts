import './ConditionalStyles1.css' ;

function ConditionalStyles1( { isValid, isRecommended, inputConfig } )
{
    let cssClass = 'input-default' ;

    if (isRecommended) {
        cssClass = 'input-recommended' ;
    }

    if (! isValid) {
        cssClass = 'input-invalid' ;
    }

    return <input className={cssClass} {...inputConfig} />
}

export default ConditionalStyles1 ;