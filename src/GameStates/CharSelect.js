import React from 'react';


export default function CharSelect(props) {


  let x = props.chars.map((a, b) =>
    <option key={b} value={a.Class}>{a.Class}</option>
  )




  return (
    <form onSubmit={(e) => {
      props.history.push('/dialogue')
      props.finish(e)
    }}
    >
      <select name='className' onChange={e => props.pickChar(e.target.value)}>
        <option key='default'></option>
        {x}
      </select>
      <input type='submit' />
    </form>
  )
}