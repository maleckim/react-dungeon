import React from 'react';
import { Link } from 'react-router-dom';

export default function Bag(props) {



  let items = props.items.map(a =>
    <p>
      {a} <button value={`${a}`} onClick={(e) => props.checkInfo(e.target.value)}>info</button>
    </p>
  )

  

  if (props.info) {
    return (

      <div className='backPack'>
        <button onClick={ () => props.history.goBack()}>Close</button>
        {items}
        {props.info[0].description}
      </div>
    )
  }else{
    return <div className='backPack'>
      <button onClick={ () => props.history.goBack()}>Close Bag</button>
      {items}
    </div>
  }
}