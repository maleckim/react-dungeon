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

  specificMap = () => {
    if(this.state.location.x === 0 && this.state.location.y === 0){
      return(
      <ShowMap background = {'src\/MapDrawing\/corridor1.png'} />
      )
    }

  }



  render() {
    return (
      <>
        {this.specificMap()}
        <CharStatus health={this.props.char.Health} strength={this.props.char.Strength} mana={this.props.char.Mana} />
        <ActionBar />
      </>
    )
  }
}