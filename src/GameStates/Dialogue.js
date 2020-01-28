import React from 'react';

export default class Dialogue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      who: this.props.who,
      choices: [],
      responses: [],
      playerResponse: '',
      npcResponse: '',
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

        let { Choices, Responses, Unique } = resJSON;

        if (Choices) {
          this.setState({
            specialitem: Unique,
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

  dynamicResponse = (e) => {
    e.preventDefault();
    let option;
    let response;

    this.state.choices.map((a, b) => a === this.state.playerResponse ? option = b : 0)
    this.state.responses.map((a, b) => b === option ? response = a : 0)

    

    if(option !== 1){
    this.setState({ npcResponse: response })
    }else{
      this.props.history.push('/fight')
    }
      
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
    } else {

      let choices = this.state.choices.map(a => <option value={a}>{a}</option>)

      if (!this.state.npcResponse) {
        return (
          <>

            <h1>{this.state.who}...</h1>
            <p>just trying to find myself at the end of this ciggarette</p>
            <form onSubmit={e => this.dynamicResponse(e)}>
              <select onChange={e => this.setState({ playerResponse: e.target.value })}>
                <option>{null}</option>
                {choices}
              </select>
              <input type='submit' />
            </form>

          </>
        )
      } else {

        return (
          <>
          <h1>{this.state.npcResponse}</h1>
          <h3>you obtained...{this.state.specialitem}</h3>
          <p>It was sent to you inventory</p>

          <button onClick={() => this.props.history.push('/openWorld')}>continue</button>
          </>
        )

      }
    }
  }



}