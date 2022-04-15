import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function TestRouter() {
  useEffect(() => {
    console.log('asd');
  }, []);
  return (
    <Routes>
      <Route path="/test" element={<LoginPage />} />
      <Route path="/test/main" element={<MainPage />} />
    </Routes>
  );
}
