import React from 'react';
import { Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LonginPage from './test/pages/LoginPage';
import MainPage from './test/pages/MainPage';

function App() {
  return (
    <RecoilRoot>
      <Route component={LonginPage} path="/test" exact />
      <Route component={MainPage} path="/test/main" />
    </RecoilRoot>
  );
}

export default App;
