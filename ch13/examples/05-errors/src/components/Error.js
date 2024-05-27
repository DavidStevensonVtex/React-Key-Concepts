import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log("Error", error);

  return (
    <>
      <h1>Oh no!</h1>
      <p>An error occurred</p>
      <p>{error.message}</p>
    </>
  );
}

export default Error;