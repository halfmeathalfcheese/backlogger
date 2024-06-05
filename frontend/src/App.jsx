import './App.scss';
import React from 'react';

import Header from './components/Header/Header';
import Main from './Main';

function App() {
  return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
      </div>
  );
}

export default App;
