import React from 'react';
import corridor1 from '../MapDrawing/corridor1.png'

export default function ShowMap(props) {

  console.log(props);
  if (props.background === 1) {
    return (
      <div className='backGround'>
        <img src={corridor1} />
      </div>
    )
  }

}