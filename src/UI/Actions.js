import React from 'react';
import StatusContext from '../GameContext/StatusContext'

export default function Actions(props) {



  if (props.status === 1) {
    return (

      <StatusContext.Consumer>
        {value => (
          <>
            <button value='Stranger' onClick={e => value.dialogue(e.target.value, props.return)}>Talk to Strange Man</button>
            <button>Sniff Toxic Barrel</button>
          </>
        )
        }
      </StatusContext.Consumer>


    )
  }
}