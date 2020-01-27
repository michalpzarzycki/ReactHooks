import React, { useState, useEffect } from 'react';
import Timer from './Timer'
import './App.css';

function App() {
  const [ value, setValue ] = useState(0);
 useEffect(()=>{
   document.title = `Kliknięto ${value} razy`
 }, [value])
  return (
    <div className="App">
        <p>Kliknięto {value} razy</p>
      <button onClick={() => setValue(value + 1)}>
        Kliknij mnie
      </button>
      <div>
        Timer
        <Timer />
      </div>
    </div>
  );
}

export default App;
