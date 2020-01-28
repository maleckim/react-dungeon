import React from 'react';
import {Link} from 'react-router-dom'
import Movement from './Movement'
import Actions from './Actions'


export default function ActionBar(props){


  return(
    <div className='actionBar'>
      <Link to='/openWorld/inventory'>bag</Link>
      <aside className='rightSide'>
      <Actions />
      <Movement />
      </aside>
    </div>
  )
}