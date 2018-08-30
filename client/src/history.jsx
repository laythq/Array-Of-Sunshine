import React from 'react';

export function History(props) {

  function generateHistory() {
    return props.history.reverse();
  }

  const list = generateHistory();

  return (
    <div>{list}</div>
  );
}
