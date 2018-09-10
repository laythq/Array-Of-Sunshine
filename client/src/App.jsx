import React from 'react';
import { Header } from './header';
import { Summary } from './summary';
import { Footer } from './footer';
import css from './App.css';


export function App(props) {

    return (
      <div>
        <Header />
        <Summary />
        <Footer />
      </div>
    );

}

export default App;
