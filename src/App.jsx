import React, { Component } from 'react';
import { processInput, findMethod } from './suggestion.js';
import { Summary } from './summary';

class App extends React.Component {
  render() {
    return (
      <div>
        <Summary />
      </div>
    );
  }
}

export default App;