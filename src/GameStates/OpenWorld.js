import React, { Component } from 'react';
import CharStatus from '../UI/CharStatus'
import ActionBar from '../UI/ActionBar'
import ShowMap from '../UI/ShowMap'

export default class OpenWorld extends Component {



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