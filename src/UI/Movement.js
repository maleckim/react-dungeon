import React from 'react';


export default function Movement(props) {



  return(
    <div>
      <button value='up' onClick={(e)=>props.updateXY(e.target.value)}>up</button>
      <button value='down' onClick={(e)=>props.updateXY(e.target.value)}>down</button>
      <button value='left' onClick={(e)=>props.updateXY(e.target.value)}>left</button>
      <button value='right' onClick={(e)=>props.updateXY(e.target.value)}>right</button>
    </div>
  )
}