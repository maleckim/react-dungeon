import React from 'react';
import { Link } from 'react-router-dom';
import StatusContext from '../GameContext/StatusContext'

export default function Bag(props) {



  
    return (

      <StatusContext.Consumer>
        {value => (
          <>
          
          <div className='backPack'>
            <button onClick={() => props.history.goBack()}>Close</button>
            {value.inventory.map(a => <p>{a} <button value={`${a}`} onClick={(e) => props.checkInfo(e.target.value)}>info</button></p>)}
            {props.info}
          </div>
          
          </>
        )
        }
      </StatusContext.Consumer>
    )
  } 
  
