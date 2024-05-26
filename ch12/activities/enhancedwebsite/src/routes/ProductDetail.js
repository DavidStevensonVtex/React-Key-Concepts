import { useParams } from 'react-router-dom';
import products from "../data/products.js" ;

function ProductDetail()
{
    const params = useParams();
    const prodId = params.id;
    const product = products.find((product) => product.id === prodId);
  
    return(
        <>
            <h3>{product.title}</h3>
            <h1>${product.price}</h1>
            <p>{product.description}</p>
        </>
    )
}

export default ProductDetail ;