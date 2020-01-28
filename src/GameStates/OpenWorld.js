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
      },
      disabled:null,
    }
  }

  static defaultProps ={
    char: {
    Health: 10,
    Mana: 10,
    Strength: 10
    }
  }

  updateXY =(pos)=>{
    let {x, y} = this.state.location
    
    if( pos==='up' && y > -2 ){
      y--

      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='down' && y < 0){
      y++

      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='right' && x < 1){
      x++
      
      this.setState({
        location: {
          x: x,
          y: y
        }
      })
    }else if(pos==='left' && x > -1){
      x--

      this.setState({
        location: {
          x: x,
          y:y
        }
      })
    }
}


  routerFunc = (val) => {
    
    this.props.history.push('/dialogue')
  }

  gameOver = (val) => {
    this.props.history.push('/Gameover')
    alert(`${val} should not be sniffed`)
  }

  specificMap = () => {
    if(this.state.location.x === 0 && this.state.location.y === 0){
      return(
      <>
      <ShowMap pos = {this.state.location} background = {1}/>
      <ActionBar updateXY={this.updateXY} return={this.routerFunc} over={this.gameOver} status = {1} disabled={this.state.disabled} />
      </>
      )
    }else{
      return(
        <>
        <ShowMap pos = {this.state.location} background = {1}/>
        <ActionBar updateXY={this.updateXY} return={this.routerFunc} status = {1} />
        </>
        )
    }

  }



  render() {
    console.log(this.state);
    return (
      <>
        <CharStatus health={this.props.char.Health} strength={this.props.char.Strength} mana={this.props.char.Mana} />
        {this.specificMap()}
      </>
    )
  }
}