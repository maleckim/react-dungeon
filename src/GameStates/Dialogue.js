import React from 'react';

export default class Dialogue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      who: this.props.who,
      choices: [],
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
      .then(resJSON => {
        
        let { Choices, Responses } = resJSON;

        if (Choices) {
          this.setState({

            choices: [...Choices],
            responses: [...Responses]
          })
        } else {

          this.setState({
            responses: [...Responses]
          })
        }
      }
    )
  }


  genDialogue = () => {
    if (this.state.responses) {
      let current = this.state.count;
      let saying = this.state.responses[current];

      return (<p>{saying}</p>)
    } else {
      return (<p>not populated!</p>)
    }
  }

  nextDialogue = () => {

    let { count } = this.state
    if (count === this.state.responses.length - 1) {
      this.props.history.push('/openWorld');
    }
    count = count + 1;
    this.setState({
      count: count
    })
  }

 


  render() {
    

    if (this.state.who === 'Master') {
      return (
        <>
          <h1>{this.state.who}...</h1>
          {this.genDialogue()}
          <button onClick={() => this.nextDialogue()}>Continue</button>
        </>
      )
    } else{
      
      console.log(this.state.choices[0])
      let choices = this.state.choices.map(a => <option>{a}</option>)
      return (

        <>
          
          <h1>{this.state.who}...</h1>
          <p>just trying to find myself at the end of this ciggarette</p>
          <select>
            <option>{null}</option>
            {choices}
          </select>
          
          
        </>
      )
    }
  }



}