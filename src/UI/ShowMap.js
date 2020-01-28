import React from 'react';
import corridor1 from '../MapDrawing/corridor1.png'

export default function ShowMap(props) {

  let x = props.pos.x
  let y = props.pos.y

  let map =
    [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X']
    ]

  // map[y + map.length - 1][x - map[0].length - 1] = '0'
  map[y][x] = '0'


  if (props.background === 1) {
    return (
      <div className='backGround'>
        <img src={corridor1} />
        <div className='mini'>
        {map}
        </div>
      </div>
    )
  }

}