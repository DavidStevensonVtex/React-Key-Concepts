// import { useEffect, useState } from 'react';
import useKeyEvent from "./hooks/use-key-event.js" ;

function App() {
  const [pressedKey, setPressedKey] = useKeyEvent();

  let output = '';

  if (pressedKey === 's') {
    output = '😊';
  } else if (pressedKey === 'c') {
    output = '😭';
  } else if (pressedKey === 'p') {
    output = '🎉';
  }

  return (
    <main>
      <h1>Press a key!</h1>
      <p>
        Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
      </p>
      <p id="output">{output}</p>
    </main>
  );
}

export default App;
