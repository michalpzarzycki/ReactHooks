import React, { useState } from 'react';
import './App.css';

function App() {
  const [ value, setValue ] = useState(0);

  return (
    <div className="App">
        <p>Kliknięto {value} razy</p>
      <button onClick={() => setValue(value + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}

export default App;
