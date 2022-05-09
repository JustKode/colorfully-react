import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../common/layout/BasicLayout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { mainBackGroupState, subBackGroupState, mainGroupState, subGroupState, pointGroupState } from '../recoil';

export default function TestRouter() {
  const [mainBackGroup, setMainBackGroup] = useRecoilState(mainBackGroupState);
  const [subBackGroup, setSubBackGroup] = useRecoilState(subBackGroupState);
  const [mainGroup, setMainGroup] = useRecoilState(mainGroupState);
  const [subGroup, setSubGroup] = useRecoilState(subGroupState);
  const [pointGroup, setPointGroup] = useRecoilState(pointGroupState);
  useEffect(() => {
    setMainBackGroup({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setSubBackGroup({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setMainGroup({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setSubGroup({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setPointGroup({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
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
