class CodeSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
      output: props.output,
      code: ''
    }

    this.generateSuggestion = this.generateSuggestion.bind(this);

  }

  render(){
    this.generateSuggestion()
    return(
      <div>{this.state.input} > {this.state.output} = {this.state.code}</div>
    )
  }

  generateSuggestion(){
    let code = change(this.state.input, this.state.output)
    this.setState({
      code: code
    })
  }

}
