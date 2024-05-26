import products from "../data/products.js" ;

function Products()
{
    // console.log("Products");
    return (
        <>
            <h2>Products</h2>
            <ul id="products-list">
            { products.map( (product) => (
                <li key={product.id}>
                    <a href={`/products/${product.id}`}>
                        {product.title}
                    </a>
                </li>
            ))}
            </ul>

        </>
    )
}

export default Products ;