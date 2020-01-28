import React from 'react';
import StatusContext from '../GameContext/StatusContext'


export default function Actions(props) {



  if (props.status === 1) {
    return (

      <StatusContext.Consumer>
        {value => (
          <>
            {console.log(props.disabled)}
            <button value='Stranger' disabled={value.disabled} onClick={e => value.dialogue(e.target.value, props.return)}>Talk to Strange Man</button>
            <button value='toxic waste' onClick={(e) => props.over(e.target.value)}>Sniff Toxic Barrel</button>
          </>
        )
        }
      </StatusContext.Consumer>


    )
  }else if(props.status === 0){
    return(
    <>
      <button>Attack</button>
      <button>Run Away</button>
    </>
    )
  }
}