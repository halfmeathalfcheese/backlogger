import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './Main';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <header>
            <Header />
          </header>
          <main>
            <Main />
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
