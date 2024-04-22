// Building Components with Customizable Styles
import './Button.css' ;

function Button2( { children, config, className } )
{
    let cssClasses = 'btn' ;

    if (className) {
        cssClasses = className ;
    }

    return <button {...config} className={cssClasses}>{children}</button> ;
}

export default Button2 ;