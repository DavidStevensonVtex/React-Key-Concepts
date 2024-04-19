import { useState } from 'react' ;

function Button ( { isButton, config, children } ) {
    const Tag = isButton ? 'button' : 'a' ;
    return <Tag {...config}>{children}</Tag> ;
}