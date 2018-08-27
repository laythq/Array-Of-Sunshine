import React from 'react';
import { findMethod, processInput } from './model';
const bodyParser = require('body-parser')

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

    fetch('/api/scripts', {
      method: 'POST',
      // headers: {
      //   'content-type': 'application/json',
      // },
      body: 'hello',
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
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
