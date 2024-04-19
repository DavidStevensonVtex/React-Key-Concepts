import { useState } from 'react' ;

function ProductsList( { products } )
{
    const productElements = products.map( product => (
        <li>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
        </li>
    ));

    return (
        <ul>
            {   products.map(product => (
                    <li>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </li>
                ))
            }
        </ul>
    ) ;
}