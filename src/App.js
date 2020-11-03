import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// Créer deux boutons + et - qui incremente et décrémente une variable number initialisé via un hook (useState)
// Ajouter une augmentation de taille lorsqu'on incremente

function App() {
  const [number, setNumber] = useState(1)

  const numberPlus = () => {
    setNumber(number + 1)
  }

  const numberMinus = () => {
    setNumber(number - 1)
  }

  return (
    <div className="App">
    <button  style={{
        width: number,
        height: number
      }} 
       onClick={numberPlus}>+</button>
    <button style={{
        width: number,
        height: number
      }} onClick={numberMinus}>-</button>
    <p
      style={{
        fontSize: number
      }}
    >{number}</p>
  </div>
  );
}

export default App;
