import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { group1State, group2State, group3State, group4State, group5State } from '../recoil';

export default function TestRouter() {
  const [group1, setGroup1] = useRecoilState(group1State);
  const [group2, setGroup2] = useRecoilState(group2State);
  const [group3, setGroup3] = useRecoilState(group3State);
  const [group4, setGroup4] = useRecoilState(group4State);
  const [group5, setGroup5] = useRecoilState(group5State);
  useEffect(() => {
    setGroup1({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setGroup2({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setGroup3({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setGroup4({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
    setGroup5({
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      font: 'sans-serif',
    });
  }, []);

  return (
    <Routes>
      <Route path="/test" element={<LoginPage />} />
      <Route path="/test/main" element={<MainPage />} />
    </Routes>
  );
}
