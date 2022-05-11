import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePresenter from '../components/HomeComponent';

export default function HomeContainer() {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in');
  };

  const goDashboard = () => {
    navigate('/dashboard');
  };

  return <HomePresenter goSignIn={goSignIn} goDashboard={goDashboard} />;
}
