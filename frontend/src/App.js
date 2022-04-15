import React from 'react';
import { Route } from 'react-router-dom';
import LonginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Route component={LonginPage} path="/" exact />
    </div>
  );
}

export default App;
