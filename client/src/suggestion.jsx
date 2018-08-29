import React from 'react';

export function CodeSuggestion(props) {

    if (!props.input) {
      return null;
    }

    return (
      <div>
        {props.language}: {props.input} > {props.output} = {props.suggestion}
      </div>
    );
}
