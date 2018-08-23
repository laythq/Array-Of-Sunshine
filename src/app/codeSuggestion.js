import React, { Component } from 'react';
import { change } from './placeholder_model_EF';

export default class CodeSuggestion extends React.Component {
  render() {
    if (!this.props.input) {
      return null;
    }
    const codeSuggestion = change(this.props.input, this.props.output);
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
}
