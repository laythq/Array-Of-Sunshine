import React from 'react';
import css from './history.css';

export function History(props) {

  function generateHistory() {
    return props.history.reverse();
  }

  const list = generateHistory();

  return (
    <div class="history">
      {list}
    </div>
  );
}
