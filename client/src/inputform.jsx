import React from 'react';
import { processInput } from './parser';
import axios from 'axios';

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      output: null,
      suggestion: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let userInput = {
      input: processInput(this.state.input),
      output: processInput(this.state.output),
      language: this.props.language
    };
    axios.post('/api/scripts', userInput)
    .then( (res) => {
      this.props.setSuggestion(res.data);
      this.props.logSuggestion(this.state.input, this.state.output, res.data)
    })
    .catch(error => console.error('Error:', error));
    // .then(res => this.props.logSuggestion(this.state.input, this.state.output, res.data))
    // .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="input" type="text" onChange={this.handleChange} />
          <input name="output" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default InputForm;
