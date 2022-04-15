import React from 'react';
import { Route } from 'react-router-dom';
import LonginPage from './test/pages/LoginPage';
import MainPage from './test/pages/MainPage';

function App() {
  return (
    <div>
      <Route component={LonginPage} path="/test" exact />
      <Route component={MainPage} path="/test/main" />
    </div>
  );
}

export default App;
