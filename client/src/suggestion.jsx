import React from 'react';
import axios from 'axios';
import { processInput } from './model';

export class CodeSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestion: null,
    };
  }

  getCodeSuggestion() {
    let userInput = {
      input: processInput(this.props.input),
      output: processInput(this.props.output),
      language: this.props.language
    };
    axios.post('/api/scripts', userInput)
    .then(res => this.setState({
        suggestion: res.data
      }))
    .catch(error => console.error('Error:', error));
  }

  render() {
    if (!this.props.input) {
      return null;
    }
    console.log(this.state.suggestion)
    this.props.logSuggestion(this.props.input, this.props.output, this.state.suggestion);
    return (
      <div>
        {this.props.input}
          >
        {this.props.output}
          =
        {this.state.suggestion}
      </div>
    );

  }
}

export default CodeSuggestion;
