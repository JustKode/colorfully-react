import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../common/layout/BasicLayout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { changeColor } from '../util/colorChange';
export default function TestRouter() {
  const pageId = '페이지 아이디 넣으세요!';
  useEffect(() => {
    changeColor(pageId);
  }, []);
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path="/test" element={<LoginPage />} />
        <Route path="/test/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}
