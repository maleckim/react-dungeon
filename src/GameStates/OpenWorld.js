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



  render() {
    return (
      <>
        <ShowMap />
        <CharStatus health={this.props.char.Health} strength={this.props.char.Strength} mana={this.props.char.Mana} />
        <ActionBar />
      </>
    )
  }
}