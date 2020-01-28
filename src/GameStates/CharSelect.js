import React from 'react';
import mage from '../MapDrawing/mage.jpg'
import war from '../MapDrawing/warrior.jpg'

export default function CharSelect(props) {


  let x = props.chars.map((a, b) =>
    <option key={b} value={a.Class}>{a.Class}</option>
  )




  return (
    <div className='charSelect'>
      <h1>Choose Your Fighter!</h1>
      <img className='war chars' src={war} />
      <img className='mage chars' src={mage} />
      <form onSubmit={(e) => {
        props.history.push('/dialogue')
        props.finish(e)
      }}
      >
        <select className='dropdown' name='className' onChange={e => props.pickChar(e.target.value)}>
        <option key='default'></option>
        {x}
        </select>
        <input className='selectChar' type='submit' />
      </form>
    </div>
  )
}