import { useEffect, useState } from 'react';

function useKeyEvent() {
    const [pressedKey, setPressedKey] = useState();

    useEffect(() => {
        function keyPressedHandler(event) {
          const pressedKey = event.key;
    
          if (!['s', 'c', 'p'].includes(pressedKey)) {
            alert('Invalid key!');
            return;
          }
          setPressedKey(pressedKey);
        }
    
        window.addEventListener('keydown', keyPressedHandler);
    
        return () => window.removeEventListener('keydown', keyPressedHandler);
      }, []);

      return [ pressedKey, setPressedKey ] ;
}

export default useKeyEvent ;