import { useState } from 'react' ;
import './App.css';
import DateCalculator from "./components/DateCalculator" ;

function App() {
   const [showDateCalc, setShowDateCalc] = useState(false) ;

  function openDateCalcHandler() {
    setShowDateCalc(true);
  }

  return (
    <>
      <p>This app might be doing all kinds of things.</p>
      <p>
        But you can also open a claculator which calculcates the difference
        between two dates.
      </p>
      <button onClick={openDateCalcHandler}>Open Calculator</button>
      { showDateCalc && <DateCalculator /> }
    </>
  );
}

export default App;
