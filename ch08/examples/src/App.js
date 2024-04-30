import { useState } from 'react' ;
import './App.css';
import Alert2 from "./components/Alert2";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  function showAlertHandler() {
    // state updating is done by passing a function to sestShowAlert
    // because the new state depends on the previous state (it's the opposite)
    setShowAlert( isShowing => !isShowing ) ;
  }
  return (
    <>
      <button onClick={showAlertHandler}>
        { showAlert ? 'Hide' : 'Show' }
      </button>
      { showAlert && <Alert2 /> }
    </>
  );
}

export default App;
