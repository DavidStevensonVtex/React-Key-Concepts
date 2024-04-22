function ConditionalStyles2 ( { isValid, isRecommended, inputConfig } )
{
    let bgColor = 'black' ;
    let color = 'white' ;
    
    if (isRecommended) {
        bgColor = 'blue' ;
    }

    if (!isValid) {
        bgColor = 'red' ;
    }

    return <input style={{backgroundColor: bgColor, color: color }} {...inputConfig} />
}

export default ConditionalStyles2 ;