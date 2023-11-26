import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Regnum ex Nihilo</h1>
      <h3>Este es un editor de personajes para el sistema de Regnum ex Nihilo (ahora hecho con REACT)</h3>
      <section>
          <div>
              <span>Jugador: </span><input type="text" name="" id="txt-character-name" />
              <span>Nombre: </span><input type="text" name="" id="txt-player-name" />
          </div>
      </section>
    </>
  )
}

export default App
