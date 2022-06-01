import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CRgroupState from '../../recoil';
import HomePresenter from '../components/HomeComponent';
import TCRgroupState from '../../recoil/trainedState';

export default function HomeContainer() {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in');
  };

  const goDashboard = () => {
    navigate('/dashboard');
  };

  const [group] = useRecoilState(CRgroupState);
  const [TCRgroup] = useRecoilState(TCRgroupState);

  return <HomePresenter goSignIn={goSignIn} goDashboard={goDashboard} />;
}
