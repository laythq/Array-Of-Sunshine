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
      arrayError: false,
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
    this.setState({
      inputError: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.resetErrors()
    if (this.state.input === null) { this.setError('inputError')}
    else if (!this.isAnArray(processInput(this.state.input))) { this.setError('arrayError') }
    else if (this.state.language === null){ this.setError('languageError') }
    else if (this.state.output === null) { this.setError('outputError') }
    else {
      this.props.setInputOutput(this.state.input, this.state.output);
      this.props.setLanguage(this.state.language);
      const processedInput = processInput(this.state.input)
      const processedOutput = processInput(this.state.output)
      let userInput = {
        input: processedInput,
        output: processedOutput,
        language: this.state.language
      };
      this.getMethods(userInput)
    }
  }

  setError(state) {
    this.setState({
      [state]: true,
    })
  }

  resetErrors() {
    this.setState({
      outputError: false,
      languageError: false,
      arrayError: false
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

    let inputError;
    let arrayError;
    let languageError;
    let outputError;

    if (this.state.inputError) {inputError = <div>Please enter an array/list eg. [1,2,3]</div>}
    if (this.state.arrayError) {arrayError = <div>Please enter an array/list eg. [1,2,3]</div>}
    if (this.state.languageError) {languageError = <div>Please select a language</div>}
    if (this.state.outputError) {outputError = <div>Please enter your desired output</div>}

    return (
      <div>
        <div>
          {inputError}
          {arrayError}
          {languageError}
          {outputError}
        </div>
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
