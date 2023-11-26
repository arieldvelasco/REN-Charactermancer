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
          <div className='main-data'>
              <div><span>Jugador: </span><input type="text" name="" id="txt-character-name" /></div>
              <div><span>Nombre del Personaje: </span><input type="text" name="" id="txt-player-name" /></div>
              <div><span>Clase</span><input type="text" name="" id="txt-clase" /></div>
              <div><span>Nivel</span><input type="text" name="" id="txt-nivel" /></div>
              <div><span>Especie</span><input type="text" name="" id="txt-especie" /></div>
              <div><span>Edad</span><input type="text" name="" id="txt-edad" /></div>
              <div><span>Sexo</span><input type="text" name="" id="txt-sexo" /></div>
              <div><span>Peso</span><input type="text" name="" id="txt-peso" /></div>
              <div><span>Altura</span><input type="text" name="" id="txt-altura" /></div>
              <div><span>Pelo</span><input type="text" name="" id="txt-pelo" /></div>
              <div><span>Ojos</span><input type="text" name="" id="txt-ojos" /></div>
          </div>
          <div className="caracteristicas">
            <div><span>FUE</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-fue-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-fue-modificador" /></div>
            <div><span>DES</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-des-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-des-modificador" /></div>
            <div><span>CON</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-con-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-con-modificador" /></div>
            <div><span>PER</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-per-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-per-modificador" /></div>
            <div><span>INT</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-int-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-int-modificador" /></div>
            <div><span>POD</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-pod-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-pod-modificador" /></div>
            <div><span>VOL</span><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-vol-valor" /><input className='input-caracteristica' type="text" name="" id="txt-caracteristica-vol-modificador" /></div>
          </div>
      </section>
    </>
  )
}

export default App
