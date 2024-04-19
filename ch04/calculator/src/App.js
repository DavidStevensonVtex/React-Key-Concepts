import { useState } from 'react' ;
import './App.css';
import Calculation from './components/Calculation.js' ;
import Result from './components/Result.js' ;

function App() {
  const [calculation, setCalculation] = 
      useState({ first: 0, second: 0, operation: 'add' });

    function onFirstValueChanged(value)
    {
      console.log("App: First input: ", value);
      setCalculation(prevCalc => ({ first: value, second: prevCalc.second, operation: prevCalc.operation }));
    }
  
    function onSecondValueChanged(value)
    {
      console.log("App: Second input: ", value);
      setCalculation(prevCalc => ({ first: prevCalc.first, second: value, operation: prevCalc.operation }));
    }
  
    function onOperationChanged(value)
    {
      console.log("App: Operation: ", value);
      setCalculation(prevCalc => ({ first: prevCalc.first, second: prevCalc.second, operation: value }));
    }

    let calculatedResult = 0;
    switch (calculation.operation) {
      case 'add':
        calculatedResult = calculation.first + calculation.second ;
        break;
      case 'subtract':
        calculatedResult = calculation.first - calculation.second ;
        break;
      case 'multiply':
        calculatedResult = calculation.first * calculation.second ;
        break;
      case 'divide':
        calculatedResult = calculation.first / calculation.second ;
        break;
      default:
        calculatedResult = undefined ;
        break;
    }

    // console.log("calculateResult: ", 
    //     " first: ", calculation.first,
    //     " second: ", calculation.second, 
    //     " operation: ", calculation.operation,
    //     " result: ", calculatedResult);

  return (
    <p>
      <Calculation 
        onFirstValueChanged={onFirstValueChanged} 
        onSecondValueChanged={onSecondValueChanged} 
        onOperationChanged={onOperationChanged}/>
      <Result result={calculatedResult} />
    </p>
  );
}

export default App;
