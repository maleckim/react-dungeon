import React from 'react';
import {Link} from 'react-router-dom';
import spook from '../MapDrawing/spookycave.png'

export default function Intro(){

  return(
    <div className='introContainer'>
      <h1>Now begins your great Journey!</h1>
      <img className='spookyCave' src={spook}></img>
      <p>press <Link className='start' to="/charSelect">Start</Link> to begin!!</p>
    </div>
  )
}