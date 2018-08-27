import React from 'react';

export class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(language) {
    this.props.setLanguage(language)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('javascript')}>
          Javascript
        </button>
        <button onClick={() => this.handleClick('ruby')}>
          Ruby
        </button>
        <button onClick={() => this.handleClick('python')}>
          Python
        </button>
      </div>
    );
  }
}
export default LanguageSelector;
