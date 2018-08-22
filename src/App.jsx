import React, { Component } from 'react';
import {change} from './placeholder_model_EF';

// playing with creating a history, ignore for now
class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>Hello {this.props.name}</div>
    )
  }
}
// -----------------------------------------------

function CodeSuggestion(props) {
  return (
    <div>{props.input} > {props.output} = {props.code}</div>
  )
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'input',
      output: 'output',
      code: 'code'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCodeSuggestion = this.renderCodeSuggestion.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    const code = change(this.state.input, this.state.output)
    this.setState({
      code: code
    })
    event.preventDefault();
  }

  renderCodeSuggestion() {
    return (
      <CodeSuggestion
        input={this.state.input}
        output={this.state.output}
        code={this.state.code}
      />
    )
  }

  // playing with creating a history, ignore for now
  renderHistory(){
    return (
      <History name="elishka" />
    )
  }
  // -----------------------------------------------

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="input" type="text" onChange={this.handleChange} />
          <input name="output" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.renderCodeSuggestion()}
        {/* playing with creating a history, ignore for now */}
        {this.renderHistory()}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <InputForm />
      </div>
    )
  }
}

export default App;
