import React from 'react';

export class CodeSuggestion extends React.Component {

  render() {
    if (!this.props.input) {
      return null;
    }
    // this.props.logSuggestion(this.props.input, this.props.output, this.state.suggestion);
    return (
      <div>
        {this.props.input}
          >
        {this.props.output}
          =
        {this.props.suggestion}
      </div>
    );

  }
}

export default CodeSuggestion;
