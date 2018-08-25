import React, { Component } from 'react';
import { processInput, findMethod } from './model';

class History extends React.Component {
  generateHistory() {
    const items = this.props.history.map(item => item.slice());
    return items.reverse().map((item, index) => <div key={index}>{item}</div>);
  }

  render() {
    const list = this.generateHistory();
    return (
      <div>{list}</div>
    );
  }
}

class CodeSuggestion extends React.Component {
  render() {
    if (!this.props.input) {
      return null;
    }
    const codeSuggestion = this.getCodeSuggestion();
    this.props.logSuggestion(this.props.input, this.props.output, codeSuggestion);
    return (
      <div>
        {this.props.input}
        >
        {this.props.output}
        =
        {codeSuggestion}
      </div>
    );
  }

  getCodeSuggestion() {
    const processedInput = processInput(this.props.input);
    const processedOutput = processInput(this.props.output);
    return findMethod(processedInput, processedOutput);
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      output: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setInputOutput(this.state.input, this.state.output);
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
      input: null,
      output: null,
      history: [],
    };

    this.setInputOutput = this.setInputOutput.bind(this);
    this.logSuggestion = this.logSuggestion.bind(this);
  }

  setInputOutput(input, output) {
    this.setState({
      input,
      output,
    });
  }

  logSuggestion(input, output, code) {
    this.state.history.push(`${input} > ${output} = ${code}`);
  }

  render() {
    return (
      <div>
        <div>
          User Input:
          <InputForm
            setInputOutput={this.setInputOutput}
          />
        </div>
        <div>
          Code Suggestion:
          <CodeSuggestion
            input={this.state.input}
            output={this.state.output}
            logSuggestion={this.logSuggestion}
          />
        </div>
        <div>
          History:
          <History
            history={this.state.history}
          />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Summary />
      </div>
    );
  }
}

export default App;
