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

  static defaultProps ={
    char: {
    Health: 10,
    Mana: 10,
    Strength: 10
    }
  }

  routerFunc = () => {
    this.props.history.push('/dialogue')

  }

  specificMap = () => {
    if(this.state.location.x === 0 && this.state.location.y === 0){
      return(
      <>
      <ShowMap background = {1}/>
      <ActionBar return={this.routerFunc} status = {1} />
      </>
      )
    }

  }



  render() {
    console.log(this.props);
    return (
      <>
        {this.specificMap()}
        <CharStatus health={this.props.char.Health} strength={this.props.char.Strength} mana={this.props.char.Mana} />
      </>
    )
  }
}