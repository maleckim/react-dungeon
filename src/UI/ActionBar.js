import React from 'react';
import {Link} from 'react-router-dom'


export default function ActionBar(props){


  return(
    <div className='actionBar'>
      <Link to='/openWorld/inventory'>bag</Link>
    </div>
  )
}