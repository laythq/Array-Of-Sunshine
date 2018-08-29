import React from 'react';
import { processInput } from './parser';
import axios from 'axios';
import { LanguageSelector } from './languageselector';
import { InputErrorMessage, LanguageErrorMessage } from './errormessage';

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
    const processedOutput = processInput(this.state.output)

    if(!this.isAnArray(processedInput)){
      const input = 'inputError'
      this.setError(input)
    } else if (this.state.language === null){
      const input = 'languageError'
      this.setError(input)
    } else {
      this.props.setInputOutput(this.state.input, this.state.output);
      this.props.setLanguage(this.state.language);
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
    const isLanguageError = this.state.languageError;
    let inputError;
    let languageError;

    if (isInputError) {
      inputError = <InputErrorMessage />;
    }
    if (isLanguageError) {
      languageError = <LanguageErrorMessage />;
    }

    return (
      <div>
        {inputError}
        {languageError}
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
