import products from "../data/products.js" ;

function Products()
{
    // console.log("Products");
    return (
        <>
            <h2>Products</h2>
            <ul>
            { products.map( (product) => (
                <li key={product.id}>
                    {product.title}
                </li>
            ))}
            </ul>

        </>
    )
}

export default Products ;