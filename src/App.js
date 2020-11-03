import { useState } from 'react'
import './App.css';

// GÈRER LE STATE (l'Etat d'un composant react).
// Créer un projet react:
// - Créer un nouveau répo dans l'organisation github: react-state-[VOTRE_PRENOM]
// - Créer un nouveau projet react: npx create-react-app react-state

// JSS

// Ternaire

// Inserer du JS dans le JSX

// Les fonctions dans les composant

// function add() {

// }

// Arrow functions

// const add = () => {

// }

// Créer deux boutons + et - qui incremente et décrémente une variable number initialisé via un hook (useState)
// Ajouter une augmentation de taille lorsqu'on incremente

function App() {
  // Un hook
  const [number, setNumber] = useState(0)

  const numberPlus = () => {
    setNumber(number++)
  }

  const numberMinus = () => {
    setNumber(number--)
  }

  // JSX
  return (
    <div className="App">
      <button onClick={numberPlus}>+</button>
      <button onClick={numberMinus}>-</button>
      <p
        style={
          fontSize = number
        }
      >{number}</p>
    </div>
  );
}

export default App;
