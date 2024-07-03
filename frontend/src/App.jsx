import './App.scss';
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './Main';

function HeaderWithLocation() {
  const location = useLocation();
  const hideHeaderOn = ['/login', '/register'];

  return !hideHeaderOn.includes(location.pathname) && (
    <header>
      <Header />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderWithLocation />
        <main>
          <Main />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;