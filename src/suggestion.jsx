import React from 'react';

import { findMethod, processInput } from './model';

export class CodeSuggestion extends React.Component {
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

export default CodeSuggestion;
