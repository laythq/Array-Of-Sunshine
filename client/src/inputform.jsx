import React from 'react';
import { processInput } from './parser';
import axios from 'axios';
import { LanguageSelector } from './languageselector';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      output: null,
      suggestion: '',
      language: null,
      inputError: false,
      outputError: false,
      languageError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const processedInput = processInput(this.state.input)
    
    if(!this.isAnArray(processedInput)){
      const input = 'inputError'
      this.setError(input)
    } else if (this.state.language === null){
      const input = 'languageError'
      this.setError(input)
    } else if (this.state.output === null) {
      const output = 'outputError'
      this.setError(output)
    } else {
      this.props.setInputOutput(this.state.input, this.state.output);
      this.props.setLanguage(this.state.language);
      const processedOutput = processInput(this.state.output)
      let userInput = {
        input: processedInput,
        output: processedOutput,
        language: this.state.language
      };
      this.getMethods(userInput)
      this.resetErrors()
    }
  }

  setError(state) {
    this.setState({
      [state]: true,
    })
  }

  resetErrors() {
    this.setState({
      inputError: false,
      outputError: false,
      languageError: false,
    })
  }

  isAnArray(input) {
    return Array.isArray(input)
  }

  getMethods(input) {
    axios.post('/api/scripts', input)
    .then( (res) => {
      this.props.logSuggestion(this.state.language, this.state.input, this.state.output, res.data)
      this.props.setSuggestion(res.data);
    })
    .catch(error => console.error('Error:', error));
  }

  selectLanguage(language) {
    this.setState({
      language: language
    })
  }

  render() {

    const isInputError = this.state.inputError;
    let inputError;
    if (isInputError) {
      inputError = <div>Please enter an array/list eg. [1,2,3]</div>
    }
    const isLanguageError = this.state.languageError;
    let languageError;
    if (isLanguageError) {
      languageError = <div>Please select a language</div>
    }
    const isOutputError = this.state.outputError;
    let outputError;
    if (isOutputError) {
      outputError = <div>Please enter your desired output</div>
    }

    return (
      <div>
        {inputError}
        {languageError}
        {outputError}
        <div>
          Language Selector:
          <LanguageSelector
            selectLanguage={this.selectLanguage}
          />
        </div>
        <div>
          User Input:
          <form onSubmit={this.handleSubmit}>
            <input id="input" name="input" type="text" onChange={this.handleChange} />
            <input id="output" name="output" type="text" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default InputForm;
