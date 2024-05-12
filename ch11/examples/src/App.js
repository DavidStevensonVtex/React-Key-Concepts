import BlogPosts from './components/BlogPosts';
import useFetch from './hooks/use-fetch';

function App() {
  const [{ data, isLoading, error }, fetchPosts] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Load Posts button gives an error:

  // ERROR
  // Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
  // 1. You might have mismatching versions of React and the renderer (such as React DOM)
  // 2. You might be breaking the Rules of Hooks
  // 3. You might have more than one copy of React in the same app

  return (
    <>
      <header>
        <h1>Complex State Blog</h1>
        <button onClick={fetchPosts}>Load Posts</button>
      </header>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <BlogPosts posts={data} />}
    </>
  );
}

export default App;
