import React from 'react';

export default function GameOver(props){


  return(
    <>
    <h1>YOU DIED!!!!</h1>
    <button onClick={() => props.history.push('/')}>Try again?</button>
    </>
  )
}