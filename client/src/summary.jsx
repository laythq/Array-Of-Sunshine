import React from 'react';
import { CodeSuggestion } from './suggestion';
import { InputForm } from './inputform';
import { History } from './history';
import css from './summary.css';

export class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      output: null,
      language: null,
      suggestion: '',
      history: [],
    };

    this.setInputOutput = this.setInputOutput.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.setSuggestion = this.setSuggestion.bind(this);
    this.logSuggestion = this.logSuggestion.bind(this);
  }

  setInputOutput(input, output) {
    this.setState({
      input,
      output,
    });
  }

  setLanguage(language) {
    this.setState({
      language: language
    })
  }

  setSuggestion(suggestion) {
    this.setState({
      suggestion: suggestion
    })
  }

  logSuggestion(language, input, output, code) {
    this.state.history.push(
      <div id="logged-suggestion">
        <div id="chosen-language">{language}</div>
        <div id="previous-input">{input}</div>
        <div id="previous-output">{output}</div>
        {code}
      </div>
    );
  }

  formatSuggestion(array) {
    let suggestions = []
    if(Array.isArray(array)){ array.forEach( suggestion => suggestions.push(<div id="suggestion">{suggestion}</div> ))}
    return suggestions
  }

  render() {
    return (
      <div id="summary">
        <div>
          <InputForm
            setInputOutput={this.setInputOutput}
            setSuggestion={this.setSuggestion}
            setLanguage={this.setLanguage}
            logSuggestion={this.logSuggestion}
            formatSuggestion={this.formatSuggestion}
          />
        </div>
        <div>
          <CodeSuggestion
            input={this.state.input}
            output={this.state.output}
            language={this.state.language}
            suggestion={this.state.suggestion}
          />
        </div>
        <div>
          <History
            history={this.state.history}
          />
        </div>
      </div>
    );
  }
}
export default Summary;
