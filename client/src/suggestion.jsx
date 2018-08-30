import React from 'react';
import css from './suggestion.css';

export function CodeSuggestion(props) {

    if (!props.input) {
      return null;
    }

    return (
      <div>
      Methods:
        <div id="code-suggestion">
          <div id="chosen-language">
            {props.language}
          </div>
          <div id="previous-input">
            {props.input}
          </div>
          <div id="previous-output">
            {props.output}
          </div>
          <div id="suggestions">
            {props.suggestion}
          </div>
        </div>
      </div>
    );
}
