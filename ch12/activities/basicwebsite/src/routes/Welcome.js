import { Link } from 'react-router-dom';

function Welcome() 
{
    // console.log("Welcome!");
    return (
        <>
            <main>
                <h2>Welcome to our shop!</h2>
                <p>
                    Please explore {' '}
                    <Link to="/products">our products</Link>
                    {' '} or share this site with others.
                </p>
            </main>
        </>
    )
}

export default Welcome ;