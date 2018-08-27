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
    console.log(userInput)

    let userInputJSON = JSON.stringify(userInput);
    console.log(userInputJSON)

    axios.post('/api/scripts', userInput)
    .then(response => console.log('Success:', response.data))
    .catch(error => console.error('Error:', error));

    // basic get request:
    // fetch('/scripts')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
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
