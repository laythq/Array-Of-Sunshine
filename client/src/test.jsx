import React from 'react';

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/hello')
      .then(response => response.json())
      .then(data => this.setState({text: data}))
  }

  render() {
    let text = this.state.text
    return (
      <div>
        {text}
      </div>
    )
  }

}

export default Test;
