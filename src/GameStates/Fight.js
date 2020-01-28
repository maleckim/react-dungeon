import React from 'react';
import ActionBar from '../UI/ActionBar';
import fight1 from '../MapDrawing/fight1.png'


export default class Fight extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      enemy: this.props.enemy
    }
  }

  render(){
    
    return(
      <div>
        <img className='fight-scene1' src={fight1}/>
        <p>{this.state.enemy}</p>
        <ActionBar status={0}/>
        
      </div>
      
    )
  }
}