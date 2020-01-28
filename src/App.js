import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StatusContext from './GameContext/StatusContext'
import Intro from './GameStates/Intro';
import CharSelect from './GameStates/CharSelect';
import Dialogue from './GameStates/Dialogue';
import OpenWorld from './GameStates/OpenWorld';
import Bag from './UI/Bag'



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choice: '',
      chars: {},
      who: 'Master',
      bagContents: [],
      currentDescription: '',
    }

  }

  componentDidMount() {
    this.getChar();
  }

  getChar() {

    fetch('http://localhost:1234/chars')
      .then(res => res.json())
      .then(resJSON =>

        this.setState({
          chars: resJSON
        }
        ))
  }

  postChar = (name) => {
    if (name === 'Warrior') {
      this.setState({
        choice: `${name}`,
        bagContents: ['Dull Sword', 'map']
      })
    } else if (name === 'Mage') {
      this.setState({
        choice: `${name}`,
        bagContents: ['Novice Staff', 'map']
      })
    }

  }

  updateChar = (e) => {
    e.preventDefault();
    let current = this.state.chars.filter(a => a.Class === this.state.choice);
    this.setState({
      chars: current
    })
  }

  displayItemInfo = (item) => {
    console.log(item)
    fetch(`http://localhost:1234/info?item=${item}`)
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON)
        this.setState({
          currentDescription: resJSON
        })


      });

  }

  dialogue = (val,callback) => {

    this.setState({
      who: val
    })
    return callback();
  }






  render() {
    console.log(this.state);
    return (
      <StatusContext.Provider value={{
        dialogue: this.dialogue
      }}>

        <main>
          <Route exact path="/" component={Intro} />
          <Route exact path="/charSelect" render={(routeProps) => <CharSelect {...routeProps} chars={this.state.chars} pickChar={this.postChar} finish={this.updateChar} />} />
          <Route path="/dialogue" render={(routeProps) => <Dialogue {...routeProps} who={this.state.who} />} />
          <Route path="/openWorld" render={(routeProps) => <OpenWorld {...routeProps} char={this.state.chars[0]} />} />
          <Route path="/openWorld/inventory" render={(routeProps) => <Bag {...routeProps} items={this.state.bagContents} checkInfo={this.displayItemInfo} info={this.state.currentDescription} />} />
        </main>
        
      
  </StatusContext.Provider>
    )
  }


}

