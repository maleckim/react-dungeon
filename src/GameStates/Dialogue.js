import React from 'react';

export default class Dialogue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      who: this.props.who,
      responses: [],
      count: 0
    }

  }

  componentDidMount() {
    let query = this.state.who
    this.getRespones(query);

  }

  getRespones(query) {
    fetch(`http://localhost:1234/response?who=${query}`)
      .then(res => res.json())
      .then(resJSON => this.setState({
        responses: [...resJSON]
      }))
  }


  genDialogue = () => {
    if(this.state.responses){
    let current = this.state.count;
    let saying = this.state.responses[current];
    
    return(<p>{saying}</p>)
    }else{
      return(<p>not populated!</p>)
    }
  }

  nextDialogue = () => {
    
    let { count } = this.state
    if(count === this.state.responses.length - 1){
      this.props.history.push('/openWorld');
    }
    count = count + 1;
    this.setState({
      count: count
    })
  }
  

  render() {
    return (
      <>
      <h1>{this.state.who}...</h1>
      {this.genDialogue()}
      <button onClick={() => this.nextDialogue()}>Continue</button>
      </>
    )
  }



}