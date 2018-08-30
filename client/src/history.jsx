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

  return (
    <div>
      <div id="title">
        History
        <div className="history">
          {props.history.reverse()}
        </div>
      </div>
    </div>
  );
}
