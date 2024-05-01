import { useState } from 'react' ;
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  function incCounterHandler() {
    setCounter( (prevCounter) => prevCounter + 1 );
    if (!showCounter) {
      setShowCounter(true);
    }
  }

  return (
    <>
      <p>Click to increment + show or hide the counter</p>
      <button onClick={incCounterHandler}>Increment</button>
      { showCounter && <p>Counter: {counter}</p> }
    </>
  );
}

export default App;
