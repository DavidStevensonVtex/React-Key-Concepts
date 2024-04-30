import { useState } from 'react' ;
import './App.css';
import Alert from "./components/Alert";

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
      { showAlert && <Alert /> }
    </>
  );
}

export default App;
