import React from 'react';

export function CodeSuggestion(props) {

    if (!props.input) {
      return null;
    }



    function formatSuggestion(array) {
      let suggestions = []
      if(Array.isArray(array)){ array.forEach( suggestion => suggestions.push(<div class="suggestion">{suggestion}</div> ))}
      return suggestions
    }

    return (
      <div id="code-suggestion">
        <div id="language">
          {props.language}
        </div>
        <div id="input">
          {props.input}
        </div>
        <div id="output">
          {props.output}
        </div>
        <div id="suggestions">
          {formatSuggestion(props.suggestion)}
        </div>
      </div>
    );
}
