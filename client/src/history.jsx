import React from 'react';
import css from './history.css';

export function History(props) {

  if (props.history.length === 0) {
    return null;
  }
  //
  // function generateHistory() {
  //   return props.history.reverse();
  // }
  //
  // const list = generateHistory();

  console.log(props.history.reverse())

  return (
    <div id="history-section">
      <div id="title">
        Search History
        {props.history}
      </div>
    </div>
  );
}
