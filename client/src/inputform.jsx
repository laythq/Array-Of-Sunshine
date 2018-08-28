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
      language: null
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
    this.props.setInputOutput(this.state.input, this.state.output);
    this.props.setLanguage(this.state.language);
    let userInput = {
      input: processInput(this.state.input),
      output: processInput(this.state.output),
      language: this.state.language
    };
    axios.post('/api/scripts', userInput)
    .then( (res) => {
      this.props.logSuggestion(this.state.language, this.state.input, this.state.output, res.data)
      this.props.setSuggestion(res.data);
    })
    .catch(error => console.error('Error:', error));
    // .then(res => this.props.logSuggestion(this.state.input, this.state.output, res.data))
    // .catch(error => console.error('Error:', error));
  }

  selectLanguage(language) {
    this.setState({
      language: language
    })
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
            <input name="input" type="text" onChange={this.handleChange} />
            <input name="output" type="text" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default InputForm;
