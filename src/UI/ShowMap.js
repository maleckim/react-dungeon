import React from 'react';
import corridor1 from '../MapDrawing/corridor1.png'

export default function ShowMap(props) {

  
  let map =
    [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X']
    ]

    let x = props.pos.x + 1
    let y = props.pos.y + map.length - 1
    map[y][x] = '0'

    

    map = map.map(a => <><p>{a}</p><br /></>)
 
  
  if (props.background === 1) {
    return (
      <>
      <div className='mini'>
        <div className='map'>{map}</div>
      </div>
      <div className='backGround'>
        <img src={corridor1} />
      </div>
      </>
    )
  }

}