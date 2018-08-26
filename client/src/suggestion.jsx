import React from 'react';

import { findMethod, processInput } from './model';

export class CodeSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  getCodeSuggestion() {
    fetch(`/scripts`)
      .then(response => response.json())
      .then(data => this.setState({text: data}))
    // const processedInput = processInput(this.props.input);
    // const processedOutput = processInput(this.props.output);
    // return findMethod(processedInput, processedOutput);
  }

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
