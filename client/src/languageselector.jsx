import React from 'react';

export function LanguageSelector(props) {

  function handleClick(language) {
    props.selectLanguage(language)
  }

  return (
    <div>
      <button onClick={() => handleClick('javascript')}>
        Javascript
      </button>
      <button onClick={() => handleClick('ruby')}>
        Ruby
      </button>
      <button onClick={() => handleClick('python')}>
        Python
      </button>
    </div>
  );

}
