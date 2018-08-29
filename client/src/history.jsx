import React from 'react';

export function History(props) {

  function generateHistory() {
    const items = props.history.map(item => item.slice());
    return items.reverse().map((item, index) => <div key={index}>{item}</div>);
  }

  const list = generateHistory();

  return (
    <div>{list}</div>
  );
}
