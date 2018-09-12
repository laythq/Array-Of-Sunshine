import React from 'react';
import css from './styles/languageselector.css';

export class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      javascript: 'dead',
      ruby: 'dead',
      python: 'dead',
    };
  }

  resetButtons() {
    this.setState({
      javascript: 'dead',
      ruby: 'dead',
      python: 'dead',
    })
  }

  handleClick(language) {
    this.props.selectLanguage(language);
    this.resetButtons();
    this.setState({
      [language]: 'alive',
    })
  }

  render() {

    return (
      <div id="language-selector">
        <div id="buttons" align="center">
          <button id={this.state.javascript} onClick={() => this.handleClick('javascript')}>
            Javascript
          </button>
          <button id={this.state.ruby} onClick={() => this.handleClick('ruby')}>
            Ruby
          </button>
          <button id={this.state.python} onClick={() => this.handleClick('python')}>
            Python
          </button>
        </div>
      </div>
    );

  }

}

export default LanguageSelector;
