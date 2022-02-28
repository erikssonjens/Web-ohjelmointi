
import React from 'react';

export default function Buttons(props) {
   
  return <div>
    <button onClick={ () => props.Listaus(1)}>Add Maito</button>
    <button onClick={ () => props.Listaus(2)}>Add Banaani</button>
    <button onClick={ () => props.Listaus(3)}>Add Leipä</button>
    <button onClick={ () => props.Listaus(4)}>Add Kananmunia</button>
    <button onClick={ () => props.Listaus(5)}>Add Sokeria</button>

  </div>;
}
