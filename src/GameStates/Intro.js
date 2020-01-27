import React from 'react';
import {Link} from 'react-router-dom';

export default function Intro(){

  return(
    <>
    <h1>Now begins your great Journey!</h1>
    <p>press <Link to="/charSelect">Start</Link> to begin!!</p>
    </>
  )
}