import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Character_Info from './Components/Character_Info/Character_Info'
import Caracteristica from './Components/Caracteristica/Caracteristica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Regnum ex Nihilo</h1>
      <h3>Este es un editor de personajes para el sistema de Regnum ex Nihilo (ahora hecho con REACT)</h3>
      <section>
          <div className='main-data'>
              <Character_Info fieldName="Jugador:" fieldId="txt-jugador" />
              <Character_Info fieldName="Nombre del Personaje:" fieldId="txt-nombre" />
              <Character_Info fieldName="Clase" fieldId="txt-clase" />
              <Character_Info fieldName="Nivel" fieldId="txt-nivel" />
              <Character_Info fieldName="Especie" fieldId="txt-especie" />
              <Character_Info fieldName="Edad" fieldId="txt-edad" />
              <Character_Info fieldName="Sexo" fieldId="txt-sexo" />
              <Character_Info fieldName="Peso" fieldId="txt-peso" />
              <Character_Info fieldName="Altura" fieldId="txt-altura" />
              <Character_Info fieldName="Pelo" fieldId="txt-pelo" />
              <Character_Info fieldName="Ojos" fieldId="txt-ojos" />
          </div>
          <div className="caracteristicas">
            <Caracteristica carName={"FUE"} />
            <Caracteristica carName={"DES"} />
            <Caracteristica carName={"CON"} />
            <Caracteristica carName={"PER"} />
            <Caracteristica carName={"INT"} />
            <Caracteristica carName={"POD"} />
            <Caracteristica carName={"VOL"} />
          </div>
      </section>
    </>
  )
}

export default App
