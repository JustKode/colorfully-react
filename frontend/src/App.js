import React from 'react';
import { RecoilRoot } from 'recoil';
import MainRouter from './mainRouter';

function App() {
  return (
    <RecoilRoot>
      <MainRouter />
    </RecoilRoot>
  );
}

export default App;
