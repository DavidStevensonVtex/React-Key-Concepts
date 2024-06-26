import { useState } from 'react' ;

function ProductsList( { products } )
{
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