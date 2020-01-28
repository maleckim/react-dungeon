import React, { Component } from 'react';
import CharStatus from '../UI/CharStatus'
import ActionBar from '../UI/ActionBar'
import ShowMap from '../UI/ShowMap'

export default class OpenWorld extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: {
        x: 0,
        y: 0
      }
    }
  }

  updateXY =(pos)=>{
    let {x, y} = this.state.location
    console.log(this.state.location)
    if(pos==='up'){
      y = y+1;
      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='down'){
      y=y-1
      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='right'){
      x=x+1;
      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='left'){
      x=x-1;
      this.setState({
        location: {
          x: x,
          y:y
        }
      })
    }
}



  render() {
    return (
      <>
        <ShowMap />
        <CharStatus health={this.props.char.Health} strength={this.props.char.Strength} mana={this.props.char.Mana} />
        <ActionBar updateXY={this.updateXY}/>
      </>
    )
  }
}