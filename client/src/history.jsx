import React from 'react';
import css from './styles/history.css';

export function History(props) {

  if (props.history.length === 0) {
    return null;
  }

  function generateHistory() {
    return props.history.reverse().map((item, index) => <div key={index}>{item}</div>);
  }

  const list = generateHistory();

  return (
    <div id="history-section">
      <div id="title">
        Your Search History
      </div>
      {list}
    </div>
  );
}
