import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestRouter from './test/testRouter';
import SurveyDialog from './util/survey';

export default function MainRouter() {
  return (
    <>
      <SurveyDialog />;
      <Routes>
        <Route path="/" />
      </Routes>
      <TestRouter />
    </>
  );
}
