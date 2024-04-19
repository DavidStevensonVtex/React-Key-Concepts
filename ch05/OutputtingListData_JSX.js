import { useState } from 'react' ;

const products = [
    { id: 'p1', title: 'A Book', price: 59.99 },
    { id: 'p2', title: 'A Carpet', price: 129.49 },
    { id: 'p3', title: 'Another Book', price: 39.99 }
] ;

function ProductList() {
    const productElements = [] ;

    for ( const product of products) {
        productElements.push((
            <li>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </li>
        ));
    }

    return (
        <ul>
            {productElements}
        </ul>
    ) ;
}

