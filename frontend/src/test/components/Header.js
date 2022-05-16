import React from 'react';
import Form from './Form';
import Navigation from './Navigation';

/* ************************************* */
import { useRecoilState } from 'recoil';
import CRgroupState from '../../recoil';
/* ************************************* */

const Header = ({ handleSubmit }) => {
  /* ************************************* */
  const [group] = useRecoilState(CRgroupState);
  /* ************************************* */
  return (
    <div style={{ ...group.mainBackGroup }}>
      <h1>SnapShot</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
