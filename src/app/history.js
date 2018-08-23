import React, { Component } from 'react';
import { change } from './placeholder_model_EF';

export default class History extends React.Component {
  generateHistory() {
    const items = this.props.history.map(item => item.slice());
    return items.reverse().map((item, index) => <div key={index}>{item}</div>);
  }

  render() {
    const list = this.generateHistory();
    return (
      <div>{list}</div>
    );
  }
}
