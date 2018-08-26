import React from 'react';

export class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleJavascriptClick() {
    this.props.setLanguage('javascript')
  }

  handleRubyClick() {
    this.props.setLanguage('ruby')
  }

  handlePythonClick() {
    this.props.setLanguage('python')
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleJavascriptClick()}>
          Javascript
        </button>
        <button onClick={() => this.handleRubyClick()}>
          Ruby
        </button>
        <button onClick={() => this.handlePythonClick()}>
          Python
        </button>
      </div>
    );
  }
}
export default LanguageSelector;
