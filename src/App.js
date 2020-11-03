import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  var [number, setNumber] = useState(10)

  const numberPlus = () => {
    setNumber(number++)
  }

  const numberMinus = () => {
    if (number > 10) {
      setNumber(number--)
    }
  }

  return (
    <div className="App">
      <button onClick={numberPlus}>+</button>
      <button onClick={numberMinus}>-</button>
      <p style={{ fontSize: number }}>{number}px</p>
    </div>
  );
}

export default App;
