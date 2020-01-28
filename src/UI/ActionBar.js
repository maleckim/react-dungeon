import React from 'react';
import {Link} from 'react-router-dom'
import Movement from './Movement'
import Actions from './Actions'


export default function ActionBar(props){


  return(
    <div className='actionBar'>
      <Link to='/openWorld/inventory'>bag</Link>
      <aside className='rightSide'>
<<<<<<< HEAD
      
      <Movement updateXY={props.updateXY}/>
=======
      <Actions return={props.return} status={props.status} />
      <Movement />
>>>>>>> 3f696cfd7401dee38495263e9b20cea5fcbe60a1
      </aside>
    </div>
  )
}