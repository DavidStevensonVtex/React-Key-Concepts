import './App.css';
import Addition from './components/Addition.js' ;
import Subtraction from './components/Subtraction.js' ;
import Multiplication from './components/Multiplication.js' ;
import Division from './components/Division.js' ;

function App() {
  return (
    <table>
      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </table>
  );
}

export default App;
