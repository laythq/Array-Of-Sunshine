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
    const processedOutput = processInput(this.state.output)

    if(!this.isArray(processedInput)){
      this.setInputError()
    } else {

      this.props.setInputOutput(this.state.input, this.state.output);
      this.props.setLanguage(this.state.language);
      let userInput = {
        input: processedInput,
        output: processedOutput,
        language: this.state.language
      };
      this.getMethods(userInput)

    }
  }

  setInputError() {
    this.setState({
      inputError: true
    })
  }

  setOutputError() {
    this.setState({
      outputError: true
    })
  }

  setLanguageError() {
    this.setState({
      languageError: true
    })
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

  isArray(input) {
    return Array.isArray(input)
  }

  render() {
    return (
      <div>
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
