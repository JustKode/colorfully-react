import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { surveyDialogState } from '../../recoil/atom';
import MainComponent from '../components/MainComponent';

function MainContainer() {
  return <MainComponent />;
}

export default MainContainer;
