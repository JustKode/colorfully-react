import React from 'react';
import { Route } from 'react-router-dom';
import LonginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Route component={LonginPage} path="/" exact />
      <Route component={MainPage} path="/main" />
    </div>
  );
}

export default App;
