import React from 'react';

import "./Caracteristica.css";

const Caracteristica = ({ carName }) => {
  return (
    <div>
        <span>{ carName }</span>
        <input className='input-caracteristica' type="number" name="" id="txt-caracteristica-valor" />
        <input className='input-caracteristica' type="number" name="" id="txt-caracteristica-modificador" />
    </div>
  )
}

export default Caracteristica;