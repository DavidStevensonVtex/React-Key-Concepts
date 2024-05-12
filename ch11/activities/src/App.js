// import { useEffect, useState } from 'react';
import useKeyEvent from "./hooks/use-key-event.js" ;

function App() {
  const allowedKeys = [ 's', 'c', 'p', 'a', 'r', 'd' ] ;
  const [pressedKey, setPressedKey] = useKeyEvent(allowedKeys);

  // if (allowedKeys.includes('a')) {
  //   console.log("Key 'a' was allowed");
  // }

  let output = '';

  if (pressedKey === 's') {
    output = '😊';
  } else if (pressedKey === 'c') {
    output = '😭';
  } else if (pressedKey === 'p') {
    output = '🎉';
  } else if (pressedKey === 'a') {
    output = '👽' ;
  } else if (pressedKey === 'r') {
    output = '🤖' ;
  } else if (pressedKey === 'd') {
    output = '😈' ;
  }

  function inputs() {
    return (
      <>
      { allowedKeys.map ((data, index) => {
        return ( 
            <span key={data}>{ index !== 0 ? ", " : " " }<kbd>{data}</kbd></span>
        )
      })}
      </>
    )
  }

  return (
    <main>
      <h1>Press a key!</h1>
      <p>
        Supported keys: { inputs() }
      </p>
      <p id="output">{output}</p>
    </main>
  );
}

export default App;
