import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestRouter from './test/testRouter';

export default function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" />
      </Routes>
      <TestRouter />
    </>
  );
}
