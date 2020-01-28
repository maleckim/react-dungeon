import React from 'react';
import ActionBar from '../UI/ActionBar';
import fight1 from '../MapDrawing/fight1.png'


export default class Fight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      enemy: this.props.enemy,
      stats: {
        hp: null,
        defense: null,
        attack: []

      }
    }
  }

  componentDidMount() {

    fetch(`http://localhost:1234/npcStat?who=${this.state.enemy}`)
      .then(res => res.json())
      .then(resJSON => {
        const {health, def, attack} = resJSON
        this.setState({
          stats: {
            hp: health,
            defense: def,
            attack:[attack]
          }
        })
      })
  }

  render() {

    console.log(this.state);
    return (
      <div>
        <img className='fight-scene1' src={fight1} />
        <p>{this.state.enemy} hp: {this.state.stats.hp} defense: {this.state.stats.defense}</p>
        <ActionBar status={0} />

      </div>

    )
  }
}