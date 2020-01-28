import React from 'react';

export default function ShowMap(props){


let background = props.background
console.log(typeof background)
  return(
    <div className='backGround' style={{backgroundImage:`url(${background})`}}>

    </div>
  )
}