import React from 'react';

export class History extends React.Component {
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
export default History;
