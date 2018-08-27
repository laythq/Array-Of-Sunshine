import React from 'react';
import axios from 'axios';
import { findMethod, processInput } from './model';


export class CodeSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  getCodeSuggestion() {
    let userInput = {
      input: processInput(this.props.input),
      output: processInput(this.props.output),
      language: this.props.language
    };
    axios.post('/api/scripts', userInput)
    .then(res => console.log('Success:', res.data))
    .catch(error => console.error('Error:', error));
  }

    // previous code:
    // const processedInput = processInput(this.props.input);
    // const processedOutput = processInput(this.props.output);
    // return findMethod(processedInput, processedOutput);

  render() {
    if (!this.props.input) {
      return null;
    }
    this.getCodeSuggestion();
    this.props.logSuggestion(this.props.input, this.props.output, this.state.text);
    return (
      <div>
        {this.props.input}
          >
        {this.props.output}
          =
        {this.state.text}
      </div>
    );
  }
}

export default CodeSuggestion;
