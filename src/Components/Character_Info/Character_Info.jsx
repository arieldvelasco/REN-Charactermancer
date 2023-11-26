import React from 'react';

const Character_Info = ({ fieldName, fieldId }) => {
  return (
    <div>
        <span>{ fieldName }: </span>
        <input type="text" name="" id={ fieldId } />
    </div>
  )
}

export default Character_Info;