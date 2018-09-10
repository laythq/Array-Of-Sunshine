import React from 'react';
import { processInput } from './parser';
import axios from 'axios';
import { LanguageSelector } from './languageselector';
import css from './inputform.css';

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
      equalsError: false,
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
    else if (this.state.input === this.state.output) { this.setError('equalsError') }
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
      arrayError: false,
      equalsError: false,
    })
  }

  isAnArray(input) {
    return Array.isArray(input)
  }

  getMethods(input) {
    axios.post('/api/scripts', input)
    .then( (res) => {
      let formattedSuggestions = this.props.formatSuggestion(res.data)
      this.props.logSuggestion(this.state.language, this.state.input, this.state.output, formattedSuggestions)
      this.props.setSuggestion(formattedSuggestions);
    })
    .catch(error => console.error('Error:', error));
  }

  selectLanguage(language) {
    this.setState({
      language: language
    })
  }

  render() {

    let error;

    if (this.state.inputError) {error = <div>Please enter an array/list in the correct format eg. [1,2,3]</div>}
    if (this.state.arrayError) {error = <div>Please enter an array/list eg. [1,2,3]</div>}
    if (this.state.languageError) {error = <div>Please select a language</div>}
    if (this.state.outputError) {error = <div>Please enter your desired output</div>}
    if (this.state.equalsError) {error = <div>Please enter 2 different inputs</div>}

    return (
      <div>
        <div>
          <LanguageSelector
            selectLanguage={this.selectLanguage}
          />
        </div>
        <div id="error">
          {error}
        </div>
        <div id="input-form">
          <form onSubmit={this.handleSubmit}>
            <div id="inputs">
              <div id="input-section">
                <div className="instruction">
                  What you've got
                </div>
                <input id="input" name="input" type="text" className="user-input" onChange={this.handleChange} />
              </div>
              <div id="output-section">
                <div className="instruction">
                  What you want
                </div>
                <input id="output" name="output" type="text" className="user-input" onChange={this.handleChange} />
              </div>
            </div>
            <div className="button-holder">
              <input type="submit" className="get-code" value="Generate Code!" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default InputForm;
