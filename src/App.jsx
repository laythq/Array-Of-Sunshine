import React, { Component } from 'react';
import {change} from './placeholder_model_EF';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: props.suggestions
    }
  }

  render(){
    const list = this.listHistory()
    return(
      <div>{list}</div>
    )
  }

  listHistory() {
    const items = this.state.history.reverse()
    const listItems = items.map((item, index) =>
      <div key={index}>
        {item}
      </div>
    )
    return listItems
  }

}

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
      code: 'code',
      suggestions: []
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
    event.preventDefault();
    let code = change(this.state.input, this.state.output)
    this.setState({
      code: code
    })
    this.storeSuggestion(code);
  }

  storeSuggestion(code) {
    let suggestion = <div>{this.state.input} > {this.state.output} = {code}</div>
    this.state.suggestions.push(suggestion)
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

  renderHistory(){
    return (
      <History suggestions={this.state.suggestions} />
    )
  }

  render() {
    return (
      <div>
        User Input:
        <form onSubmit={this.handleSubmit}>
          <input name="input" type="text" onChange={this.handleChange} />
          <input name="output" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        Code Suggestion:
        {this.renderCodeSuggestion()}
        History:
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
