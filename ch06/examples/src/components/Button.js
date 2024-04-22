// Building Components with Customizable Styles
import './Button.css' ;

function Button( { children, config, className } )
{
    return <button {...config} className={`btn ${className}`}>{children}</button> ;
}

export default Button ;