import React, { Component } from 'react';
import {change} from './placeholder_model_EF';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: props.history
    }
  }

  render(){
    const list = this.generateHistory()
    return(
      <div>{list}</div>
    )
  }

  generateHistory() {
    const items = this.state.history.reverse()
    const history = items.map((item, index) =>
      <div key={index}>{item}</div>
    )
    return history
  }

}

class CodeSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    this.generateSuggestion = this.generateSuggestion.bind(this);
  }

  render(){
    this.generateSuggestion;
    return(
      <div>{this.props.input} > {this.props.output} = {this.state.code}</div>
    )
  }

  generateSuggestion(props){
    let code = change(props.input, props.output)
    this.setState({
      code: code
    })
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setInputOutput(this.state.input, this.state.output)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="input" type="text" onChange={this.handleChange} />
          <input name="output" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      code: '',
      history: []
    }

    this.setInputOutput = this.setInputOutput.bind(this)
  }

  setInputOutput(input, output){
    this.setState({
      input: input,
      output: output
    });
  };

  render() {
    return(
      <div>
        User Input:
        <InputForm setInputOutput={this.setInputOutput}/>
        Code Suggestion:
        <CodeSuggestion input={this.state.input} output={this.state.output} />
        History:
        <History history={this.state.history} />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Summary />
      </div>
    )
  }
}

export default App;
