import { useState } from 'react' ;
import './App.css';
import Form from "./components/Form";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  function showAlertHandler() {
    // state updating is done by passing a function to sestShowAlert
    // because the new state depends on the previous state (it's the opposite)
    setShowAlert( isShowing => !isShowing ) ;
  }
  return (
    <>
      <Form />
    </>
  );
}

export default App;
