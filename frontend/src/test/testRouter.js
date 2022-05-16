import React, { useEffect } from 'react';
import PhotoContextProvider from './context/PhotoContext';
import { Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Item from './components/Item';
import Search from './components/Search';
import NotFound from './components/NotFound';
import BasicLayout from '../common/layout/BasicLayout';
import './index.css';

/* ************************************* */
import { useRecoilState } from 'recoil';
import { changeColor } from '../util/colorChange';
import { CRgroupState } from '../recoil/atom';
/* ************************************* */

export default function TestRouter() {
  /* ************************************* */
  const groupId = 'GROUP_1';
  const [group, setGroup] = useRecoilState(CRgroupState);
  useEffect(() => {
    changeColor(groupId, setGroup);
  }, []);
  /* ************************************* */

  const { searchInput } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    navigate(url);
  };

  return (
    <PhotoContextProvider>
      <div className="container">
        <Header handleSubmit={handleSubmit} />
        <BasicLayout />
        <Routes>
          <Route path="/" element={<Navigate to="/mountain" />} />
          <Route path="/mountain" element={<Item searchTerm="mountain" />} />
          <Route path="/beach" element={<Item searchTerm="beach" />} />
          <Route path="/bird" element={<Item searchTerm="bird" />} />
          <Route path="/food" element={<Item searchTerm="food" />} />
          <Route path="/search/:searchInput" element={<Search searchTerm={searchInput} />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
}
