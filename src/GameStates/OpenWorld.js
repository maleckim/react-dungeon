import React from 'react';
import CharStatus from '../UI/CharStatus'
import ActionBar from '../UI/ActionBar'
import ShowMap from '../UI/ShowMap'

export default function OpenWorld(props){


  return(
    <>
    <ShowMap />
    <CharStatus health={props.char.Health} strength={props.char.Strength} mana={props.char.Mana}/>
    <ActionBar />
    </>
  )
}