import React from 'react';
import {Link} from 'react-router-dom'
import Movement from './Movement'


export default function ActionBar(props){


  return(
    <div className='actionBar'>
      <Link to='/openWorld/inventory'>bag</Link>
      <aside className='rightSide'>
      
      <Movement updateXY={props.updateXY}/>
      </aside>
    </div>
  )
}