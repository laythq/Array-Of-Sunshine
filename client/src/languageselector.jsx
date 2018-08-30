import React from 'react';
import css from './languageselector.css';

export function LanguageSelector(props) {

  function handleClick(language) {
    props.selectLanguage(language)
  }

  return (
    <div id="language-selector">
      <div id="buttons" align="center">
        <button id="language" onClick={() => handleClick('javascript')}>
          Javascript
        </button>
        <button id="language" onClick={() => handleClick('ruby')}>
          Ruby
        </button>
        <button id="language" onClick={() => handleClick('python')}>
          Python
        </button>
      </div>
    </div>
  );

}
