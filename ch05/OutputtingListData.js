import { useState } from 'react' ;

const products = [
    { id: 'p1', title: 'A Book', price: 59.99 },
    { id: 'p2', title: 'A Carpet', price: 129.49 },
    { id: 'p3', title: 'Another Book', price: 39.99 }
] ;

const transformedProducts = [] ;
for ( const product of products) {
    transformedProducts.push(product.title) ;
}