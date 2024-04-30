import { useState } from 'react' ;
import classes from './NewPost.module.css';

const DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts" ;
// const DEFAULT_URL = "posts.json" ;

let blogPostNumber = 1000 ;

export const postBlogEntry = async (url, data) => {
  const body = JSON.stringify(data);
  console.log("body: ", body);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  const blogPosts = await response.json();
  console.log("blogPosts", blogPosts);
  // return blogPosts;
}


function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false) ;

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitting new blog post...");
    setIsSaving(true);
    setTimeout( () => {
      const newPost = {
        userId: 1, 
        id: blogPostNumber++,
        title: enteredTitle,
        body: "Omitted"
      } ;
  
      console.log("newPost", newPost);
  
      const abc = postBlogEntry(DEFAULT_URL, newPost);
      console.log("post new blog entry completed"); 
      setIsSaving(false);
    }, 5000);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>
        { isSaving ? "Saving..." : "Save" }
      </button>
    </form>
  );
}

export default NewPost;
