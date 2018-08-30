import React from 'react';
import { Header } from './header';
import { Summary } from './summary';
import { Footer } from './footer';


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
