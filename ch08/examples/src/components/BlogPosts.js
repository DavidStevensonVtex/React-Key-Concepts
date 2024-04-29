import { useState, useEffect } from 'react' ;

import classes from './BlogPosts.module.css' ;

const DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts" ;
// const DEFAULT_URL = "posts.json" ;

async function fetchPosts(url) {
    const response = await fetch(url);
    const blogPosts = await response.json();
    return blogPosts;
}

function BlogPosts() {
    const [postsUrl, setPostsUrl] = useState(DEFAULT_URL);
    const [loadedPosts, setLoadedPosts] = useState([]);
 
    useEffect(function () {
        fetchPosts(postsUrl).then( (fetchedPosts) => { setLoadedPosts(fetchedPosts) }) ;
    }, [postsUrl]);

    function adjustUrlHandler(event) {
        console.log("url", event.target.value);
        setPostsUrl(event.target.value);
    }

    return (
        <>
            <input className={classes.input} type="text" onBlur={adjustUrlHandler} />
            <ul className={classes.posts}>
                {
                    loadedPosts.map( post => (
                        <li key={post.id}>{ post.title }</li>
                    ))
                }
            </ul>
        </>
    )
}

export default BlogPosts ;