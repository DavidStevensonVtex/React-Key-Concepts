import { useState } from 'react';

let products = [ 
    { id: 1, name: 'React - The Complete Guide', productType: 'Course', price: 19.99 },
    { id: 2, name: 'Stylish Chair', price: 329.49 },
    { id: 3, name: 'Ergonomic Chair', price: 269.99 },
    { id: 4, name: 'History Video Game Collection', price: 99.99 }
];

function ProductList()
{
    return (
        <>
            <button type='button'>Add Product</button>
            { products.map( (p) => (
                <div key={'p' + p.id} className='product-list'>      
                    {p.name}&nbsp;{p.productType && '[' + p.productType + '] '}
                    {' ($' + p.price + ')'}
                </div>
                ))
            }
        </>
    );
}

export default ProductList ;