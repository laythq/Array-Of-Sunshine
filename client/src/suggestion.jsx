import React from 'react';

export class CodeSuggestion extends React.Component {

  render() {
    if (!this.props.input) {
      return null;
    }

    return (
      <div>
        {this.props.language}: {this.props.input} > {this.props.output} = {this.props.suggestion}
      </div>
    );

  }
}

export default CodeSuggestion;
