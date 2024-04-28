import { useState } from 'react' ;

import classes from './BlogPosts.module.css' ;

async function fetchPosts() {
    const response = await fetch('https://localhosts:3000/posts.json');
    const blogPosts = await response.json();
    return blogPosts;
}

function BlogPosts() {
    const [loadedPosts, setLoadedPosts] = useState([]);

    fetchPosts().then( (fetchedPosts) => setLoadedPosts(fetchPosts)) ;

    return (
        <ul className={classes.posts}>
            { loadedPosts.map( (post) => (
                <li key={post.id}>{ post.title }</li>
            ))}
        </ul>
    )
}