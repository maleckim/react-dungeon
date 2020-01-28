import React from 'react';
import { Link } from 'react-router-dom'
import Movement from './Movement'
import Actions from './Actions'


export default function ActionBar(props) {




  if (props.status !== 0) {
    return (

      <div className='actionBar'>
        <Link className='bag' to='/openWorld/inventory'>bag</Link>
        <aside className='rightSide'>
          <Actions return={props.return} status={props.status} over={props.over} disabled={props.disabled} />
          <Movement updateXY={props.updateXY} />
        </aside>
      </div>

    )
  } else {
    return (
      <div className='actionBar'>
      <Actions status={props.status} />
      </div>
    )
  }

}