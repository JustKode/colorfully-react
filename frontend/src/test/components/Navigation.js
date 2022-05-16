import React from 'react';
import { NavLink } from 'react-router-dom';

/* ************************************* */
import { useRecoilState } from 'recoil';
import CRgroupState from '../../recoil';
/* ************************************* */

const Navigation = () => {
  /* ************************************* */
  const [group] = useRecoilState(CRgroupState);
  /* ************************************* */
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/mountain" style={{ ...group.subGroup }}>
            Mountain
          </NavLink>
        </li>
        <li>
          <NavLink to="/beach" style={{ ...group.subGroup }}>
            Beaches
          </NavLink>
        </li>
        <li>
          <NavLink to="/bird" style={{ ...group.subGroup }}>
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" style={{ ...group.subGroup }}>
            Food
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
