import React from 'react';
import './UI.css'

export default function CharStatus(props){


  return(
    <div className='charStatus'>
      <ul>
      <li key='health'>Health:{props.health}</li>
      <li key='strength'>Strength:{props.strength}</li>
      <li key='mana'>Mana:{props.mana}</li>
      </ul>
    </div>
  )
}